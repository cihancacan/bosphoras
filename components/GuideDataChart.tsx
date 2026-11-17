import type { EditorialSection } from '@/data/highPotentialEditorialGuides';
import type { Locale } from '@/lib/i18n';

type ChartSpec = { section: string; series: { column: number; values: number[] }[] };
const charts: Record<string, ChartSpec | undefined> = {
  "rental-income-abroad-turkey": {
    "section": "income-2",
    "series": [
      {
        "column": 1,
        "values": [
          24000,
          4000,
          3000,
          17000
        ]
      }
    ]
  },
  "foreign-bank-interest-turkey": {
    "section": "income-2",
    "series": [
      {
        "column": 1,
        "values": [
          2000,
          4000,
          6000
        ]
      }
    ]
  },
  "foreign-life-insurance-turkey-resident": {
    "section": "income-2",
    "series": [
      {
        "column": 1,
        "values": [
          1280,
          750
        ]
      }
    ]
  },
  "crypto-income-turkey-tax": {
    "section": "income-2",
    "series": [
      {
        "column": 1,
        "values": [
          20000,
          30000,
          500,
          9500
        ]
      }
    ]
  },
  "trader-tax-resident-turkey": {
    "section": "income-2",
    "series": [
      {
        "column": 1,
        "values": [
          28500,
          70500,
          232500,
          372500
        ]
      }
    ]
  },
  "french-company-dividends-turkey-resident": {
    "section": "fr-tr-2",
    "series": [
      {
        "column": 2,
        "values": [
          8720,
          43600,
          87200,
          174400
        ]
      },
      {
        "column": 1,
        "values": [
          1280,
          6400,
          12800,
          25600
        ]
      }
    ]
  },
  "residence-tax-istanbul": {
    "section": "city-tax-4",
    "series": [
      {
        "column": 1,
        "values": [
          1800,
          400,
          900,
          400
        ]
      }
    ]
  },
  "live-istanbul-foreign-investor": {
    "section": "city-tax-3",
    "series": [
      {
        "column": 1,
        "values": [
          30000,
          6000,
          15000,
          9000
        ]
      }
    ]
  },
  "bodrum-tax-residence-investors": {
    "section": "city-tax-3",
    "series": [
      {
        "column": 1,
        "values": [
          24000,
          22800
        ]
      }
    ]
  },
  "antalya-tax-residence-expats": {
    "section": "city-tax-3",
    "series": [
      {
        "column": 2,
        "values": [
          26400,
          38400
        ]
      }
    ]
  },
  "istanbul-or-dubai-investors": {
    "section": "city-tax-3",
    "series": [
      {
        "column": 1,
        "values": [
          0,
          11250,
          56250
        ]
      }
    ]
  },
  "turkey-vs-italy-non-dom": {
    "section": "compare-4",
    "series": [
      {
        "column": 1,
        "values": [
          300000,
          350000,
          450000
        ]
      }
    ]
  },
  "turkey-vs-portugal-tax": {
    "section": "compare-4",
    "series": [
      {
        "column": 1,
        "values": [
          10000,
          20000,
          40000
        ]
      }
    ]
  },
  "turkey-vs-spain-beckham-law": {
    "section": "compare-4",
    "series": [
      {
        "column": 1,
        "values": [
          24000,
          144000,
          238000
        ]
      }
    ]
  },
  "turkey-vs-greece-non-dom": {
    "section": "compare-4",
    "series": [
      {
        "column": 1,
        "values": [
          100000,
          120000,
          160000
        ]
      }
    ]
  },
  "turkey-vs-cyprus-non-dom": {
    "section": "compare-4",
    "series": [
      {
        "column": 1,
        "values": [
          1325,
          2650,
          4770
        ]
      }
    ]
  },
  "turkey-vs-monaco-tax": {
    "section": "compare-4",
    "series": [
      {
        "column": 1,
        "values": [
          36000,
          72000,
          120000
        ]
      }
    ]
  },
  "turkey-vs-switzerland-tax": {
    "section": "compare-4",
    "series": [
      {
        "column": 1,
        "values": [
          435000,
          504000,
          840000
        ]
      }
    ]
  },
  "turkey-vs-uk-non-dom": {
    "section": "compare-4",
    "series": [
      {
        "column": 1,
        "values": [
          4,
          3,
          1
        ]
      }
    ]
  },
  "turkey-vs-malta-non-dom": {
    "section": "compare-4",
    "series": [
      {
        "column": 1,
        "values": [
          15000,
          22500,
          45000
        ]
      },
      {
        "column": 2,
        "values": [
          35000,
          35000,
          45000
        ]
      }
    ]
  },
  "turkey-vs-andorra-tax": {
    "section": "compare-4",
    "series": [
      {
        "column": 1,
        "values": [
          0,
          800,
          2800,
          6800
        ]
      }
    ]
  },
  "turkey-bank-account-non-resident": {
    "section": "bank-3",
    "series": [
      {
        "column": 1,
        "values": [
          400000,
          650000,
          950000,
          1200000
        ]
      }
    ]
  },
  "kyc-bank-turkey-foreigners": {
    "section": "bank-2",
    "series": [
      {
        "column": 1,
        "values": [
          185000,
          15000,
          15000
        ]
      },
      {
        "column": 2,
        "values": [
          370000,
          30000,
          30000
        ]
      }
    ]
  },
  "source-of-funds-turkey-investors": {
    "section": "bank-2",
    "series": [
      {
        "column": 1,
        "values": [
          250000,
          80000,
          10000,
          160000,
          120000,
          40000
        ]
      }
    ]
  },
  "wealth-transfer-to-turkey": {
    "section": "bank-3",
    "series": [
      {
        "column": 1,
        "values": [
          3270,
          3500,
          7000
        ]
      },
      {
        "column": 2,
        "values": [
          1490,
          3500,
          4750
        ]
      }
    ]
  }
};
const captions: Record<Locale,string> = { fr: 'Visualisation des montants du tableau', en: 'Visual comparison of the amounts above', ru: 'Наглядное сравнение сумм из таблицы', ar: 'مقارنة مرئية للمبالغ في الجدول' };

export function GuideDataChart({ guideId, section, locale }: { guideId: string; section: EditorialSection; locale: Locale }) {
  const spec = charts[guideId];
  const table = section.table;
  if (!spec || spec.section !== section.id || !table || spec.series.some(s => s.values.length !== table.rows.length || !table.headers[s.column])) return null;
  const max = Math.max(1, ...spec.series.flatMap(s => s.values));
  return <figure className="mt-6 border border-[#d8c7a1] bg-white p-4 sm:p-6">
    <figcaption className="mb-5 font-serif text-lg text-[#121826]">{captions[locale]}</figcaption>
    <div aria-hidden="true" className="space-y-5">
      <div className="flex flex-wrap gap-4 text-xs text-[#3e4857]">{spec.series.map((s,i) => <span key={s.column} className="flex items-center gap-2"><span className="h-3 w-3 shrink-0" style={{backgroundColor:i===0?'#263246':'#b18b49'}} />{table.headers[s.column]}</span>)}</div>
      {table.rows.map((row,i) => <div key={i} className="min-w-0"><p className="mb-2 text-sm font-medium text-[#121826]">{row[0]}</p>{spec.series.map((s,j) => <div key={s.column} className="mb-2 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3"><div className="h-4 bg-[#f1ece1]"><div className="h-full" style={{width:`${100*s.values[i]/max}%`,backgroundColor:j===0?'#263246':'#b18b49'}} /></div><span className="text-xs tabular-nums text-[#121826]">{row[s.column]}</span></div>)}</div>)}
    </div>
  </figure>;
}
