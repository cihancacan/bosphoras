#!/usr/bin/env python3
"""Non-secret smoke test of Wink staging through existing Bosphoras Preview.

Does NOT send or log OAuth credentials, account IDs, full inventory, personal data,
hotel names, server response headers or HTML. Staging endpoint is disabled in production.
"""
from datetime import datetime, timezone
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError
import json, os, socket

URL = os.getenv("WINK_STAGING_SMOKE_URL",
    "https://bosphoras-7k7zwf0rg-cihans-projects-effb03c3.vercel.app/api/wink/staging/istanbul")
REPORT=Path("data/travel/winkStagingConnectionCheck.json")
report={"testedAt":datetime.now(timezone.utc).isoformat(),
        "type":"POST on existing Bosphoras Wink staging inventory diagnostic",
        "deployedPreview":"bosphoras-7k7zwf0rg-cihans-projects-effb03c3.vercel.app",
        "endpoint":"/api/wink/staging/istanbul","httpStatus":None,"connected":False}
try:
    req=Request(URL,data=b"{}",headers={
        "User-Agent":"Bosphoras-Wink-Staging-SmokeTest/1.0",
        "Content-Type":"application/json",
        "Accept":"application/json"},method="POST")
    with urlopen(req,timeout=65) as resp:
        status=resp.status;typ=resp.headers.get("Content-Type","")
        body=resp.read(500000)
except HTTPError as e:
    status=e.code;typ=e.headers.get("Content-Type","");body=e.read(500000)
except (URLError,TimeoutError,socket.timeout) as exc:
    status=None;typ="";body=b""
    report["transportFailure"]=type(exc).__name__
report["httpStatus"]=status
if "application/json" in typ:
    try:
        parsed=json.loads(body)
        report["connected"]=status==200 and parsed.get("ok") is True and parsed.get("source")=="wink-staging"
        if report["connected"]:
            report["resultCount"]=int(parsed.get("resultCount",0))
            report["city"]=str((parsed.get("search") or {}).get("city",""))
            report["accountReturned"]=bool((parsed.get("account") or {}).get("accountId"))
            report["searchCompleted"]=bool(parsed.get("searchedAt"))
        else:
            report["failureStage"]=parsed.get("stage") if parsed.get("stage") in ("credentials","token","accounts-schema","accounts","search-schema","search") else "unclassified"
            if isinstance(parsed.get("grpcCode"),int):report["grpcCode"]=parsed["grpcCode"]
    except (ValueError,TypeError):
        report["errorClass"]="unexpected-json-payload"
else:
    report["errorClass"]="no-json-response" if status is not None else "connection-not-established"
if status in (401,403):
    report["caveat"]="Possible Vercel Preview Deployment Protection or upstream access restriction; cannot conclude Wink credentials are rejected"
if report["connected"] and report.get("resultCount")==0:
    report["caveat"]="Accounts and SearchByCity worked; no bookable inventory returned for this itinerary"
REPORT.parent.mkdir(parents=True,exist_ok=True)
REPORT.write_text(json.dumps(report,indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
print("WINK STAGING SAFE SUMMARY:",json.dumps(report,ensure_ascii=False))
