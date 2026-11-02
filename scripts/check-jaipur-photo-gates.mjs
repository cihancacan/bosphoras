#!/usr/bin/env node
/**
 * Jaipur #77 launch blocker. Intentionally fails until 21 distinct, sourced,
 * visually reviewed local WebPs and explicit owner Preview approval exist.
 *
 * Usage: node scripts/check-jaipur-photo-gates.mjs
 * This check must be green before Jaipur is added to featuredCityGuides.
 */
import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';

const root = process.cwd();
const file = path.join(root, 'data/travel/jaipurPhotoProductionPlan.json');
const manifest = JSON.parse(fs.readFileSync(file, 'utf8'));
const errors = [];
const fail = (message) => errors.push(message);
const slots = manifest.photoSlots || [];
const counts = {
  landscape: slots.filter(s => s.category === 'landscape').length,
  hotel: slots.filter(s => s.category === 'hotel').length,
};
if (manifest.destination !== 'jaipur' || manifest.destinationNumber !== 77) fail('Wrong destination manifest');
if (slots.length !== 21 || counts.landscape !== 9 || counts.hotel !== 12) fail('Exactly 9 Jaipur scenes and 12 hotel photos are mandatory');
if (new Set(slots.map(s => s.key)).size !== slots.length) fail('Duplicate slot keys');
const images = [];
for (const slot of slots) {
  const label = slot.key || '<missing-key>';
  if (!slot.photoIdentityVisuallyApproved) fail(label + ': geographic/property visual approval missing');
  if (!slot.sourcePage || !/^https:\/\//.test(slot.sourcePage)) fail(label + ': exact photo source page missing');
  if (!slot.originalImageUrl || !/^https:\/\//.test(slot.originalImageUrl)) fail(label + ': exact photo URL missing');
  if (!/^[a-f0-9]{64}$/i.test(slot.originalSha256 || '')) fail(label + ': original source SHA-256 missing');
  if (slot.category === 'landscape') {
    if (!slot.author || !slot.license || !slot.licenseUrl) fail(label + ': creator/license attribution missing');
  } else if (slot.category === 'hotel') {
    if (!slot.hotel || !slot.rightsPermissionEvidence) fail(label + ': hotel identity or image-use permission missing');
  }
  const target = slot.localWebpPath || '';
  if (!/^\/images\/travel\/jaipur-premium\/(destination|hotels)\/[a-z0-9-]+\.webp$/.test(target)) {
    fail(label + ': invalid WebP path');
    continue;
  }
  const diskPath = path.join(root, 'public', target.replace(/^\//, ''));
  if (!fs.existsSync(diskPath)) {
    fail(label + ': local WebP file missing');
    continue;
  }
  const bytes = fs.readFileSync(diskPath);
  if (bytes.length < 5000 || bytes.length > 350000 ||
      bytes.toString('ascii', 0, 4) !== 'RIFF' ||
      bytes.toString('ascii', 8, 12) !== 'WEBP') {
    fail(label + ': malformed/oversize WebP');
    continue;
  }
  if (!slot.webpValidated) fail(label + ': photo optimization review missing');
  images.push({key:label, digest:crypto.createHash('sha256').update(bytes).digest('hex'), size:bytes.length});
}
if (new Set(images.map(i => i.digest)).size !== images.length) fail('Duplicate WebP image contents');
if (images.reduce((sum, i) => sum + i.size, 0) > 5000000) fail('21-image WebP pack exceeds 5 MB');
if (!manifest.previewApproved) fail('Explicit owner Preview approval missing');
if (manifest.productionApproved) fail('Production approval must remain separately gated');
if (errors.length) {
  console.error('JAIPUR_77_MEDIA_NOT_READY: ' + errors.length + ' issue(s)');
  for (const message of errors.slice(0, 55)) console.error(' - ' + message);
  process.exit(1);
}
console.log('JAIPUR_77_PRIVATE_PREVIEW_MEDIA_READY: 21 distinct sourced and approved WebP images');
