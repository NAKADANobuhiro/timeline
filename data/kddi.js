/* KDDI 合併・統合の歴史
   設立年 / 合併・売却・統合年をベースに構成
   ※ 一部推定を含む */
DATASETS.kddi = {
  name: 'KDDI 合併・統合の歴史',
  period: '1953〜2050年',
  bce: false,
  categories: {
    'KDDI・前身3社':  '#8e44ad',
    '固定・国際通信': '#2980b9',
    '移動通信':       '#e74c3c',
    'ケーブル・IT':   '#27ae60',
  },
  persons: [

    /* ── KDDI・前身3社 ── */
    {
      name: 'KDD（国際電信電話）',
      title: '国際通信',
      birth: 1953, death: 2000, cat: 'KDDI・前身3社',
      serve: [{ role: 'KDDI設立に合流', start: 1999, end: 2000 }],
    },
    {
      name: 'DDI（第二電電）',
      title: '長距離・移動通信 / 存続会社',
      birth: 1984, death: 2000, cat: 'KDDI・前身3社',
      serve: [{ role: 'KDDI設立（存続会社）', start: 1999, end: 2000 }],
    },
    {
      name: 'IDO（日本移動通信）',
      title: '移動通信（東名阪）',
      birth: 1987, death: 2000, cat: 'KDDI・前身3社',
      serve: [{ role: 'KDDI設立に合流', start: 1999, end: 2000 }],
    },
    {
      name: 'KDDI',
      title: '総合通信',
      birth: 2000, death: 2050, cat: 'KDDI・前身3社',
      serve: [{ role: 'DDI＋KDD＋IDO合併により発足', start: 2000, end: 2000 }],
    },

    /* ── 固定・国際通信 ── */
    {
      name: '日本高速通信（テレウェイ）',
      title: '長距離通信',
      birth: 1984, death: 1998, cat: '固定・国際通信',
      serve: [{ role: 'KDDに吸収合併', start: 1997, end: 1998 }],
    },
    {
      name: 'パワードコム',
      title: '固定・法人通信',
      birth: 2001, death: 2006, cat: '固定・国際通信',
      serve: [{ role: 'KDDIに吸収合併', start: 2005, end: 2006 }],
    },

    /* ── 移動通信 ── */
    {
      name: 'DDIセルラーグループ（7社）',
      title: '移動通信（東名阪以外）',
      birth: 1987, death: 2001, cat: '移動通信',
      serve: [{ role: 'auブランドへ統合', start: 2000, end: 2001 }],
    },
    {
      name: 'ツーカーグループ（3社）',
      title: '移動通信（2G）',
      birth: 1991, death: 2005, cat: '移動通信',
      serve: [{ role: 'KDDIに吸収合併・au移行', start: 2004, end: 2005 }],
    },
    {
      name: 'DDIポケット',
      title: 'PHS通信',
      birth: 1994, death: 2005, cat: '移動通信',
      serve: [{ role: 'カーライル等に売却（→ウィルコム）', start: 2004, end: 2005 }],
    },
    {
      name: 'UQコミュニケーションズ（事業）',
      title: 'WiMAX・UQ mobile',
      birth: 2007, death: 2020, cat: '移動通信',
      serve: [{ role: 'KDDI本体に事業統合', start: 2019, end: 2020 }],
    },
    {
      name: '沖縄セルラー電話',
      title: 'au（沖縄）',
      birth: 1991, death: 2050, cat: '移動通信',
    },

    /* ── ケーブル・IT ── */
    {
      name: 'ジャパンケーブルネット（JCN）',
      title: 'CATV',
      birth: 2001, death: 2014, cat: 'ケーブル・IT',
      serve: [{ role: 'J:COMに統合', start: 2013, end: 2014 }],
    },
    {
      name: 'J:COM（ジュピターテレコム）',
      title: 'CATV・光通信',
      birth: 1995, death: 2050, cat: 'ケーブル・IT',
      serve: [{ role: 'KDDIグループ化（住友電工と共同）', start: 2015, end: 2015 }],
    },
    {
      name: 'BIGLOBE',
      title: 'ISP・格安SIM',
      birth: 1996, death: 2050, cat: 'ケーブル・IT',
      serve: [{ role: 'KDDIが買収（NECビッグローブより）', start: 2017, end: 2017 }],
    },
    {
      name: 'ソラコム（SORACOM）',
      title: 'IoT通信',
      birth: 2014, death: 2050, cat: 'ケーブル・IT',
      serve: [{ role: 'KDDIが買収', start: 2017, end: 2017 }],
    },
    {
      name: '日本福祉放送',
      title: 'コミュニティ放送',
      birth: 1986, death: 2010, cat: 'ケーブル・IT',
    },
  ],

  events: [
    { year: 1985, name: 'NTT民営化・通信自由化' },
    { year: 1987, name: 'DDIセルラー各社・IDO 設立' },
    { year: 2000, name: 'DDI＋KDD＋IDO 合併 → KDDI 発足' },
    { year: 2001, name: 'auブランド統一' },
    { year: 2006, name: 'パワードコム吸収合併' },
    { year: 2012, name: '4G LTE（au）サービス開始' },
    { year: 2017, name: 'BIGLOBE・ソラコム買収' },
    { year: 2020, name: 'UQ mobile 事業統合' },
    { year: 2022, name: '全国規模の通信障害（約3,915万回線影響）' },
  ],

  rulers: [
    {
      label: 'KDDI 社長',
      entries: [
        { name: '小野寺正', start: 2001, end: 2018 },
        { name: '田中孝司', start: 2018, end: 2022 },
        { name: '高橋誠', start: 2022, end: 2050 },
      ],
    },
  ],
};
