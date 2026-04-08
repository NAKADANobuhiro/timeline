/* TBSラジオ 黄金時代の番組群 */
/* 放送期間は一部推定を含みます */
DATASETS.radio_saikyo = {
  name: 'ラジオ最強説',
    labels: {
    age:      '周年',           // 「歳」の代わり
    lifespan: '放送年数',       // 「享年」の代わり
    agePanel: '番組の放送年数', // 年齢パネルのサブタイトル
  },
    categoryLabels: {
    '人物': { age: '歳', lifespan: '享年' },
  },
  period: '1998〜2026年',
  bce: false,
  categories: {
    '人物':       '#a70008',
    '平日昼帯':     '#2980b9',
    '平日夕方帯':   '#a57100',
    '平日夜帯':   '#8800c3',
    '週末・深夜帯': '#408500',
    'ポッドキャスト': '#6b6b6bdc',
  },
  persons: [
    {
      name: '橋本吉史 (ハシP)',
      title: 'TBSラジオプロデューサー',
      birth: 1979, death: 2079, cat: '人物',
      deathUncertain: true,
    },
    {
      name: '古川耕',
      title: '放送作家、ライター、プロデューサー',
      birth: 1973, death: 2073, cat: '人物',
      deathUncertain: true,
    },
    {
      name: '宇多丸(RHYMESTER)',
      title: 'ラッパー、ラジオパーソナリティ',
      birth: 1969, death: 2069, cat: '人物',
      deathUncertain: true,
    },
    {
      name: 'BATTLE TALK RADIO アクセス',
      title: '小島慶子ほか',
      birth: 1998, death: 2010, cat: '平日夜帯',
    },
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
      birth: 2023, death: 2060, cat: '平日昼帯',
      deathUncertain: true,
    },
    {
      name: '金曜ワイドラジオTOKYO えんがわ',
      title: '外山惠理、玉袋筋太郎',
      birth: 2023, death: 2060, cat: '平日昼帯',
      deathUncertain: true,
    },
    {
      name: '大沢悠里のゆうゆうワイド',
      title: '大沢悠里',
      birth: 1986, death: 2016, cat: '平日昼帯',
    },
    {
      name: '生活は踊る',
      title: 'ジェーン・スー',
      birth: 2016, death: 2060, cat: '平日昼帯',
      deathUncertain: true,
    },
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
      birth: 2022, death: 2060, cat: '平日夜帯',
      deathUncertain: true,
    },
    {
      name: 'ウィークエンドシャッフル',
      title: '宇多丸(RHYMESTER)',
      birth: 2007, death: 2018, cat: '週末・深夜帯',
    },
    {
      name: '伊集院光 日曜日の秘密基地',
      title: '伊集院光',
      birth: 2000, death: 2008, cat: '週末・深夜帯',
    },
    {
      name: '爆笑問題の日曜サンデー',
      title: '爆笑問題',
      birth: 2008, death: 2060, cat: '週末・深夜帯',
      deathUncertain: true,
    },
    {
      name: '久米宏 ラジオなんですけど',
      title: '久米宏',
      birth: 2006, death: 2020, cat: '週末・深夜帯',
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
    {
      name: 'OVER THE SUN',
      title: 'ジェーン・スー, 堀井美香',
      birth: 2020, death: 2060, cat: 'ポッドキャスト',
      deathUncertain: true,
    },
    {
      name: 'マイゲーム・マイライフ',
      title: 'ライムスター宇多丸, 宇内梨沙',
      birth: 2017, death: 2022, cat: 'ポッドキャスト',
    },
    {
      name: '見えないわたしの、聞けば見えてくるラジオ',
      title: '石井健介',
      birth: 2023, death: 2024, cat: 'ポッドキャスト',
    },
    {
      name: '深夜特急 オン・ザ・ロード',
      title: '斎藤工',
      birth: 2023, death: 2024, cat: 'ポッドキャスト',
    },
    {
      name: '異業種Pたちの人生エンタメ会議室',
      title: '橋本吉史、RAM RIDER、渡辺範明',
      birth: 2024, death: 2060, cat: 'ポッドキャスト',
      deathUncertain: true,
    },
    {
      name: 'ラジオ拡張計画',
      title: '内田浩之, 橋本吉史, 石井玄',
      birth: 2025, death: 2060, cat: 'ポッドキャスト',
      deathUncertain: true,
    },    
  ],

  events: [
    { year: 2004, name: '橋本吉史TBS入社' },
    { year: 2007, name: 'ウィークエンドシャッフル スタート' },
    { year: 2010, name: 'radiko配信の開始' },
    { year: 2015, name: 'ワイドFM開始' },
    { year: 2016, name: '生活は踊る スタート' },
    { year: 2017, name: 'アフター6ジャンクション スタート' },
    { year: 2020, name: '令和版 夜のミステリー' },
    { year: 2024, name: '龍が如く8 発売、橋本吉史TBS退社' },
    { year: 2023, name: '見えないわたしの、聞けば見えてくるラジオ' },
    { year: 2026, name: 'ラジオ最強説 出版' },
  ],
};