/* TBSラジオ 黄金時代の番組群 */
/* 放送期間は一部推定を含みます */
DATASETS.radio_saikyo = {
  name: 'ラジオ最強説',
  period: '1998〜2026年',
  bce: false,
  categories: {
    '平日昼帯':     '#2980b9',
    '平日夕方帯':   '#a57100',
    '平日夜帯':   '#8800c3',
    '週末・深夜帯': '#408500',
  },
  persons: [

    /* ── 平日深夜帯 ── */
    {
      name: 'BATTLE TALK RADIO アクセス',
      title: '小島慶子ほか',
      birth: 1998, death: 2010, cat: '平日夜帯',
    },

    /* ── 平日昼帯 ── */
    {
      name: 'ストリーム',
      title: '小西克哉・松本ともこ',
      birth: 2001, death: 2009, cat: '平日昼帯',
    },
    {
      name: '小島慶子キラ☆キラ',
      title: '小島慶子',
      birth: 2009, death: 2012, cat: '平日昼帯',
    },
    {
      name: 'たまむすび',
      title: '赤江珠緒',
      birth: 2012, death: 2023, cat: '平日昼帯',
    },
    {
      name: 'こねくと',
      title: '石山蓮華',
      birth: 2023, death: 2036, cat: '平日昼帯',
      deathUncertain: true,
    },
    {
      name: '生活は踊る',
      title: 'ジェーン・スー',
      birth: 2016, death: 2036, cat: '平日昼帯',
      deathUncertain: true,
    },

    /* ── 平日夕方帯 ── */
    {
      name: '荒川強啓 デイ・キャッチ!',
      title: '荒川強啓',
      birth: 1995, death: 2019, cat: '平日夕方帯',
    },
    {
      name: 'ACTION',
      title: '宮藤官九郎・尾崎世界観',
      birth: 2019, death: 2020, cat: '平日夕方帯',
    },
    {
      name: 'A.I.共存ラジオ好奇心家族',
      title: 'FROGMAN',
      birth: 2017, death: 2018, cat: '平日夜帯',
    },
    {
      name: 'アフター6ジャンクション',
      title: '宇多丸(RHYMESTER)',
      birth: 2018, death: 2022, cat: '平日夜帯',
    },
    {
      name: 'アフター6ジャンクション2',
      title: '宇多丸(RHYMESTER)',
      birth: 2022, death: 2036, cat: '平日夜帯',
      deathUncertain: true,
    },

    /* ── 週末・深夜帯 ── */
    {
      name: 'ウィークエンドシャッフル',
      title: '宇多丸(RHYMESTER)',
      birth: 2007, death: 2018, cat: '週末・深夜帯',
    },
    {
      name: 'ザ・トップ5',
      title: '安東弘樹',
      birth: 2011, death: 2012, cat: '平日夜帯',
    },
    {
      name: 'ザ・トップ5〜リターンズ',
      title: '神田愛花',
      birth: 2012, death: 2013, cat: '平日夜帯',
    },
    {
      name: 'ザ・トップ5 (シーズン3)',
      title: '堀井美香',
      birth: 2013, death: 2014, cat: '平日夜帯',
    },
    {
      name: '都市型生活情報ラジオ 興味R',
      title: '熊崎風斗',
      birth: 2017, death: 2018, cat: '平日夜帯',
    },
    {
      name: '高橋芳朗 Happy Sad',
      title: '高橋芳朗',
      birth: 2011, death: 2012, cat: '週末・深夜帯',
    },
    {
      name: '相談は踊る',
      title: 'ジェーン・スー',
      birth: 2014, death: 2016, cat: '週末・深夜帯',
    },
  ],

  events: [
    { year: 2007, name: 'ウィークエンドシャッフル スタート' },
    { year: 2009, name: 'ストリーム 終了' },
    { year: 2015, name: 'ワイドFM開始' },
    { year: 2017, name: 'アフター6ジャンクション スタート' },
    { year: 2026, name: 'ラジオ最強説 出版' },
  ],
};
