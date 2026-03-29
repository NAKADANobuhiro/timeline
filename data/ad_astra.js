DATASETS.ad_astra = {
  name: 'アド・アストラ ―スキピオとハンニバル―',
  period: '前285〜前145年',
  bce: true,
  categories: {
    'ローマ':    '#c0392b',
    'カルタゴ':  '#c9a227',
    'ヌミディア': '#27ae60',
    'マケドニア': '#8e44ad',
  },
  persons: [

    /* ── ローマ ── */
    {
      name: 'クィントゥス・ファビウス・マクシムス',
      title: '独裁官・執政官',
      birth: -280, death: -203, cat: 'ローマ',
      serve: [{ role: '独裁官', start: -221, end: -219 }],
    },
    {
      name: 'マルクス・クラウディウス・マルケッルス',
      title: '執政官（5選）',
      birth: -268, death: -208, cat: 'ローマ',
      serve: [{ role: '執政官', start: -222, end: -208 }],
    },
    {
      name: 'プブリウス・コルネリウス・スキピオ（父）',
      title: '執政官',
      birth: -260, death: -211, cat: 'ローマ',
      serve: [{ role: 'ヒスパニア方面軍司令官', start: -218, end: -211 }],
    },
    {
      name: 'ガイウス・テレンティウス・ワッロー',
      title: '執政官',
      birth: -256, death: -200, cat: 'ローマ',
      serve: [{ role: '執政官', start: -216, end: -216 }],
    },
    {
      name: 'ルキウス・アエミリウス・パウルス',
      title: '執政官',
      birth: -229, death: -216, cat: 'ローマ',
      serve: [{ role: '執政官', start: -216, end: -216 }],
    },
    {
      name: 'スキピオ・アフリカヌス',
      title: '執政官・将軍',
      birth: -236, death: -183, cat: 'ローマ',
      serve: [
        { role: 'ヒスパニア方面軍司令官', start: -210, end: -206 },
        { role: 'アフリカ遠征軍司令官',   start: -204, end: -201 },
      ],
    },
    {
      name: 'ガイウス・ラエリウス',
      title: 'スキピオの副将',
      birth: -235, death: -160, cat: 'ローマ',
      serve: [{ role: 'アフリカ遠征 副将', start: -204, end: -201 }],
    },

    /* ── カルタゴ ── */
    {
      name: 'ハミルカル・バルカ',
      title: 'カルタゴ将軍',
      birth: -275, death: -228, cat: 'カルタゴ',
      serve: [{ role: 'ヒスパニア遠征司令官', start: -237, end: -228 }],
    },
    {
      name: 'ハスドルバル・バルカ',
      title: 'ハンニバルの弟',
      birth: -244, death: -207, cat: 'カルタゴ',
      serve: [{ role: 'イタリア遠征軍司令官', start: -208, end: -207 }],
    },
    {
      name: 'マゴ・バルカ',
      title: 'ハンニバルの末弟',
      birth: -243, death: -203, cat: 'カルタゴ',
    },
    {
      name: 'マハルバル',
      title: '騎兵指揮官',
      birth: -255, death: -207, cat: 'カルタゴ',
      birthUncertain: true, deathUncertain: true,
    },
    {
      name: 'ハスドルバル・ギスコ',
      title: 'カルタゴ将軍',
      birth: -250, death: -202, cat: 'カルタゴ',
      birthUncertain: true,
    },
    {
      name: 'ボミルカル',
      title: 'カルタゴ提督',
      birth: -250, death: -205, cat: 'カルタゴ',
      birthUncertain: true, deathUncertain: true,
    },
    {
      name: 'ソフォニスバ',
      title: 'ハスドルバル・ギスコの娘',
      birth: -225, death: -202, cat: 'カルタゴ',
      birthUncertain: true,
    },
    {
      name: 'ハンニバル・バルカ',
      title: 'カルタゴ軍最高司令官',
      birth: -247, death: -183, cat: 'カルタゴ',
      serve: [{ role: '最高司令官', start: -221, end: -202 }],
    },

    /* ── ヌミディア ── */
    {
      name: 'シファクス',
      title: 'マッサエシュリ王',
      birth: -243, death: -202, cat: 'ヌミディア',
      birthUncertain: true,
      serve: [{ role: 'カルタゴ側騎兵隊長', start: -204, end: -203 }],
    },
    {
      name: 'マシニッサ',
      title: 'ヌミディア統一王',
      birth: -238, death: -148, cat: 'ヌミディア',
      serve: [{ role: 'ヌミディア王', start: -201, end: -148 }],
    },

    /* ── マケドニア ── */
    {
      name: 'フィリッポス5世',
      title: 'マケドニア王',
      birth: -238, death: -179, cat: 'マケドニア',
      serve: [{ role: 'マケドニア王', start: -221, end: -179 }],
    },
  ],

  events: [
    { year: -264, name: '第一次ポエニ戦争 開戦' },
    { year: -241, name: '第一次ポエニ戦争 終結' },
    { year: -237, name: 'ハミルカル ヒスパニア遠征' },
    { year: -221, name: 'ハンニバル 司令官就任' },
    { year: -219, name: 'サグントゥム攻略' },
    { year: -218, name: 'アルプス越え・第二次ポエニ戦争 開戦' },
    { year: -218, name: 'トレッビアの戦い' },
    { year: -217, name: 'トラシメヌス湖の戦い' },
    { year: -216, name: 'カンナエの戦い' },
    { year: -215, name: 'ハンニバル・フィリッポス同盟' },
    { year: -212, name: 'シュラクサイ陥落' },
    { year: -211, name: 'カプア陥落' },
    { year: -209, name: '新カルタゴ攻略 (スキピオ)' },
    { year: -207, name: 'メタウルスの戦い' },
    { year: -206, name: 'イリパの戦い' },
    { year: -204, name: 'スキピオ アフリカ上陸' },
    { year: -203, name: 'ハンニバル イタリア撤退' },
    { year: -202, name: 'ザマの戦い' },
    { year: -201, name: '第二次ポエニ戦争 終結' },
    { year: -183, name: 'ハンニバル・スキピオ 没' },
  ],

  rulers: [
    {
      label: 'ローマ 執政官/独裁官',
      entries: [
        { name: 'ファビウス（独裁官）', start: -221, end: -219 },
        { name: 'パウルス・ワッロー', start: -216, end: -215 },
        { name: 'マルケッルス', start: -214, end: -208 },
        { name: '諸執政官', start: -207, end: -206 },
        { name: 'スキピオ（将軍）', start: -205, end: -201 },
      ],
    },
    {
      label: 'カルタゴ 司令官',
      entries: [
        { name: 'ハミルカル', start: -237, end: -228 },
        { name: 'ハスドルバル（婿）', start: -227, end: -221 },
        { name: 'ハンニバル', start: -221, end: -202 },
      ],
    },
  ],
};
