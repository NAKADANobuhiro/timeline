/* 映画「BlackBerry」年表
   RIM社の興亡を中心に、iPhone・i-mode など同時代の技術を収録
   ※ 存命人物の death は仮値 2030 */

DATASETS.blackberry = {
  name: '映画 BlackBerry',
  period: '1955〜2025年',
  bce: false,
  labels: {
    age:      '年目',
    lifespan: 'サービス期間',
    agePanel: 'その年の状況',
  },
  categoryLabels: {
    '人物': { age: '歳', lifespan: '享年' },
  },
  categories: {
    '人物':           '#2980b9',
    'RIM/BlackBerry': '#8e44ad',
    '競合・業界':     '#c0392b',
    '日本・モバイル': '#27ae60',
  },

  persons: [

    /* ── 人物 ── */
    {
      name: 'マイク・ラザリディス',
      title: 'RIM 共同創業者・共同CEO',
      birth: 1961, death: 2030, deathUncertain: true, cat: '人物',
      serve: [{ role: '共同CEO', start: 1984, end: 2012 }],
    },
    {
      name: 'ジム・バルシリー',
      title: 'RIM 共同CEO（1992年参画）',
      birth: 1961, death: 2030, deathUncertain: true, cat: '人物',
      serve: [{ role: '共同CEO', start: 1992, end: 2012 }],
    },
    {
      name: 'ダグ・フレギン',
      title: 'RIM 共同創業者・VP Operations',
      birth: 1961, death: 2030, deathUncertain: true, cat: '人物',
      serve: [{ role: '共同創業者', start: 1984, end: 2007 }],
    },
    {
      name: 'トーステン・ハインズ(映画未登場)',
      title: 'BlackBerry CEO（2012〜2013）',
      birth: 1957, death: 2030, deathUncertain: true, cat: '人物',
      serve: [{ role: 'CEO', start: 2012, end: 2013 }],
    },
    {
      name: 'ジョン・チェン(映画未登場)',
      title: 'BlackBerry CEO（2013〜2022）',
      birth: 1955, death: 2030, deathUncertain: true, cat: '人物',
      serve: [{ role: 'CEO', start: 2013, end: 2022 }],
    },
    {
      name: 'スティーブ・ジョブズ',
      title: 'Apple 共同創業者・CEO',
      birth: 1955, death: 2011, cat: '人物',
      serve: [{ role: 'Apple CEO（復帰後）', start: 1997, end: 2011 }],
    },

    /* ── RIM / BlackBerry ── */
    {
      name: 'RIM社（Research In Motion）',
      title: 'カナダ・ウォータールー発のスマートフォンメーカー',
      birth: 1984, death: 2013, cat: 'RIM/BlackBerry',
      serve: [{ role: '社名変更', start: 2012, end: 2013 }],
    },
    {
      name: 'BlackBerry Ltd.（RIM改称後）',
      title: 'ソフトウェア・セキュリティへ転換',
      birth: 2013, death: 2022, cat: 'RIM/BlackBerry',
      serve: [{ role: 'ハードウェア製造終了', start: 2016, end: 2016 }],
    },
    {
      name: 'BlackBerry ページャー時代（RIM 850〜950）',
      title: '企業向けワイヤレスメール',
      birth: 1999, death: 2002, cat: 'RIM/BlackBerry',
    },
    {
      name: 'BlackBerry スマートフォン（QWERTY）',
      title: '物理キーボード搭載・メール特化',
      birth: 2002, death: 2016, cat: 'RIM/BlackBerry',
      serve: [
        { role: 'BlackBerry 5810（初の通話対応）', start: 2002, end: 2002 },
        { role: 'Pearl / Curve / Bold シリーズ',   start: 2006, end: 2012 },
      ],
    },
    {
      name: 'BlackBerry Storm（フルタッチ）',
      title: 'iPhone対抗のタッチスクリーン機',
      birth: 2008, death: 2012, cat: 'RIM/BlackBerry',
    },
    {
      name: 'BlackBerry 10 OS',
      title: '起死回生の新プラットフォーム',
      birth: 2013, death: 2016, cat: 'RIM/BlackBerry',
    },

    /* ── 競合・業界 ── */
    {
      name: 'Palm Pilot / Palm OS',
      title: '先行するPDA・スマートフォン',
      birth: 1996, death: 2010, cat: '競合・業界',
    },
    {
      name: 'Windows Mobile（Pocket PC）',
      title: 'Microsoft のモバイルOS',
      birth: 2000, death: 2010, cat: '競合・業界',
    },
    {
      name: 'Nokia Symbian スマートフォン',
      title: '2000年代スマートフォン最大手',
      birth: 1997, death: 2012, cat: '競合・業界',
    },
    {
      name: 'T-Mobile Sidekick（Danger社）',
      title: '若者向けメッセージ特化端末',
      birth: 2002, death: 2011, cat: '競合・業界',
    },
    {
      name: 'iPhone（Apple）',
      title: '2007年登場・スマートフォン市場を塗り替えた',
      birth: 2007, death: 2030, cat: '競合・業界',deathUncertain: true, 
      serve: [
        { role: 'Steve Jobs 発表（Macworld）', start: 2007, end: 2007 },
        { role: 'App Store 開始',              start: 2008, end: 2008 },
      ],
    },
    {
      name: 'Android（Google 他）',
      title: 'オープンなスマートフォンプラットフォーム',
      birth: 2008, death: 2030, cat: '競合・業界',deathUncertain: true, 
    },
    /* ── 日本・モバイル ── */
    {
      name: 'i-mode（NTT DoCoMo）',
      title: '世界初のモバイルインターネットサービス',
      birth: 1999, death: 2012, cat: '日本・モバイル',
      serve: [{ role: 'サービス終了', start: 2012, end: 2012 }],
    },
    {
      name: 'EZweb（au / KDDI）',
      title: '国内2位のモバイルインターネット',
      birth: 1999, death: 2012, cat: '日本・モバイル',
    },
    {
      name: 'Yahoo!ケータイ（J-Sky → ）',
      title: 'ソフトバンク系モバイルインターネット',
      birth: 1999, death: 2012, cat: '日本・モバイル',
    },
  ],

  events: [
    { year: 1984, name: 'RIM設立（ラザリディス＆フレギン）' },
    { year: 1992, name: 'バルシリー参画・共同CEO体制へ' },
    { year: 1996, name: '★ Blackberry プロトタイプをデモ' },
    { year: 1997, name: 'RIM、トロント証券取引所（TSX）上場' },
    { year: 1999, name: '★ BlackBerry 850発売 / i-mode開始' },
    { year: 2001, name: '9.11同時多発テロ—BB が主要通信手段として注目' },
    { year: 2002, name: 'BlackBerry 5810（初の通話対応）' },
    { year: 2004, name: 'BlackBerry 7100t（初の一般消費者向け）' },
    { year: 2007, name: '★ Steve Jobs、iPhoneを発表（1月）/ iPhone発売（6月）' },
    { year: 2008, name: 'App Store 開始 / BlackBerry Storm 発売' },
    { year: 2009, name: 'BlackBerry 世界シェア約20%でピーク' },
    { year: 2010, name: 'Android が急成長' },
    { year: 2011, name: 'Steve Jobs 死去（10月）' },
    { year: 2012, name: 'ラザリディス・バルシリー 共同CEO 退任（1月）' },
    { year: 2013, name: '社名 RIM → BlackBerry / BB10 OS 発売' },
    { year: 2016, name: 'BlackBerry、自社ハードウェア製造終了' },
    { year: 2022, name: 'BlackBerryデバイス向けサービス完全終了（1/4）' },
    { year: 2023, name: '映画「BlackBerry」公開' },
  ],

  rulers: [
    { role: '共同CEO体制（Lazaridis & Balsillie）', start: 1992, end: 2012 },
    { role: 'CEO: Thorsten Heins',                  start: 2012, end: 2013 },
    { role: 'CEO: John Chen（ソフトウェア転換期）', start: 2013, end: 2022 },
  ],
};
