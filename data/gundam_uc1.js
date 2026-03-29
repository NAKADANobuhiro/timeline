/* 宇宙世紀の年号をそのまま西暦として扱う（UC 0079 → 79年） */
/* 登場人物はすべて架空の人物です */
DATASETS.gundam_uc1 = {
  name: '機動戦士ガンダム（一年戦争）',
  period: 'UC 0014〜UC 0094年',
  bce: false,
  fictional: true,
  categories: {
    '地球連邦軍': '#2980b9',
    'ジオン公国軍': '#c0392b',
    'その他・民間人': '#7f8c8d',
  },
  persons: [

    /* ── 地球連邦軍 ── */
    {
      name: 'レビル',
      title: '将軍',
      birth: 17, death: 79, cat: '地球連邦軍',
      fictional: true,
      serve: [{ role: '連邦軍総司令', start: 75, end: 79 }],
    },
    {
      name: 'パオロ・カシアス',
      title: '艦長',
      birth: 32, death: 79, cat: '地球連邦軍',
      fictional: true,
      serve: [{ role: 'ホワイトベース初代艦長', start: 79, end: 79 }],
    },
    {
      name: 'ワッケイン',
      title: '中将',
      birth: 36, death: 79, cat: '地球連邦軍',
      fictional: true,
      serve: [{ role: 'サイド6駐留艦隊司令', start: 79, end: 79 }],
    },
    {
      name: 'マチルダ・アジャン',
      title: '中尉',
      birth: 53, death: 79, cat: '地球連邦軍',
      fictional: true,
      serve: [{ role: '補給部隊指揮官', start: 79, end: 79 }],
    },
    {
      name: 'スレッガー・ロウ',
      title: '少尉',
      birth: 55, death: 79, cat: '地球連邦軍',
      fictional: true,
    },
    {
      name: 'ブライト・ノア',
      title: '艦長代理→艦長',
      birth: 60, death: 140, cat: '地球連邦軍',
      fictional: true,
      deathUncertain: true,
      serve: [{ role: 'ホワイトベース艦長', start: 79, end: 80 }],
    },
    {
      name: 'セイラ・マス',
      title: '通信士・パイロット',
      birth: 62, death: 142, cat: '地球連邦軍',
      fictional: true,
      deathUncertain: true,
    },
    {
      name: 'カイ・シデン',
      title: 'MSパイロット',
      birth: 62, death: 142, cat: '地球連邦軍',
      fictional: true,
      deathUncertain: true,
      serve: [{ role: 'ガンキャノン搭乗', start: 79, end: 80 }],
    },
    {
      name: 'ミライ・ヤシマ',
      title: '操舵士',
      birth: 62, death: 142, cat: '地球連邦軍',
      fictional: true,
      deathUncertain: true,
    },
    {
      name: 'ハヤト・コバヤシ',
      title: 'MSパイロット',
      birth: 64, death: 87, cat: '地球連邦軍',
      fictional: true,
      serve: [{ role: 'ガンタンク搭乗', start: 79, end: 80 }],
    },
    {
      name: 'アムロ・レイ',
      title: 'ガンダムパイロット',
      birth: 64, death: 93, cat: '地球連邦軍',
      fictional: true,
      serve: [{ role: 'ガンダム搭乗', start: 79, end: 80 }],
    },

    /* ── ジオン公国軍 ── */
    {
      name: 'ジオン・ズム・ダイクン',
      title: 'ジオン思想の創始者',
      birth: 18, death: 58, cat: 'ジオン公国軍',
      fictional: true,
      serve: [{ role: 'ムンゾ自治共和国 主席', start: 45, end: 58 }],
    },
    {
      name: 'デギン・ソド・ザビ',
      title: '公王',
      birth: 14, death: 79, cat: 'ジオン公国軍',
      fictional: true,
      serve: [{ role: 'ジオン公国 公王', start: 68, end: 79 }],
    },
    {
      name: 'ギレン・ザビ',
      title: '最高司令官',
      birth: 30, death: 79, cat: 'ジオン公国軍',
      fictional: true,
      serve: [{ role: 'ジオン最高司令官', start: 74, end: 79 }],
    },
    {
      name: 'ランバ・ラル',
      title: '大尉',
      birth: 37, death: 79, cat: 'ジオン公国軍',
      fictional: true,
    },
    {
      name: 'キシリア・ザビ',
      title: '少将',
      birth: 40, death: 79, cat: 'ジオン公国軍',
      fictional: true,
      serve: [{ role: '突撃機動軍司令', start: 74, end: 79 }],
    },
    {
      name: 'マ・クベ',
      title: '大佐',
      birth: 40, death: 79, cat: 'ジオン公国軍',
      fictional: true,
      serve: [{ role: 'ウラル基地司令', start: 79, end: 79 }],
    },
    {
      name: 'ドズル・ザビ',
      title: '中将',
      birth: 43, death: 79, cat: 'ジオン公国軍',
      fictional: true,
      serve: [{ role: '宇宙攻撃軍司令', start: 74, end: 79 }],
    },
    {
      name: 'クラウレ・ハモン',
      title: 'ランバ・ラルの恋人',
      birth: 44, death: 79, cat: 'ジオン公国軍',
      fictional: true,
    },
    {
      name: 'ガルマ・ザビ',
      title: '大佐',
      birth: 59, death: 79, cat: 'ジオン公国軍',
      fictional: true,
      serve: [{ role: '地球方面軍司令', start: 79, end: 79 }],
    },
    {
      name: 'シャア・アズナブル',
      title: '少佐 / 赤い彗星',
      birth: 59, death: 93, cat: 'ジオン公国軍',
      fictional: true,
      serve: [{ role: '赤い彗星', start: 78, end: 79 }],
    },

    /* ── その他・民間人 ── */
    {
      name: 'テム・レイ',
      title: 'V作戦 主任技師',
      birth: 33, death: 85, cat: 'その他・民間人',
      fictional: true,
      deathUncertain: true,
      serve: [{ role: 'ガンダム開発者', start: 77, end: 79 }],
    },
    {
      name: 'フラウ・ボゥ',
      title: '民間人→通信士',
      birth: 64, death: 164, cat: 'その他・民間人',
      fictional: true,
      deathUncertain: true,
    },
    {
      name: 'ミハル・ラトキエ',
      title: 'ジオン側スパイ',
      birth: 63, death: 79, cat: 'その他・民間人',
      fictional: true,
    },
    {
      name: 'カツ・コバヤシ',
      title: '戦争孤児→MSパイロット',
      birth: 70, death: 87, cat: 'その他・民間人',
      fictional: true,
    },
    {
      name: 'レツ・コバヤシ',
      title: '戦争孤児',
      birth: 71, death: 164, cat: 'その他・民間人',
      fictional: true,
      deathUncertain: true,
    },
    {
      name: 'キッカ・キタモト',
      title: '戦争孤児',
      birth: 71, death: 164, cat: 'その他・民間人',
      fictional: true,
      deathUncertain: true,
    },
  ],

  events: [
    { year: 58, name: 'ジオン・ズム・ダイクン 没 / ザビ家台頭' },
    { year: 68, name: 'ジオン公国 独立宣言' },
    { year: 70, name: 'ジオン公国 宣戦布告（一年戦争 開戦）' },
    { year: 79, name: 'コロニー落とし（虐殺作戦）' },
    { year: 79, name: '南極条約締結' },
    { year: 79, name: 'サイド7 攻撃 / アムロ 初出撃' },
    { year: 79, name: 'ガルマ・ザビ 戦死' },
    { year: 79, name: 'ジャブロー攻略作戦' },
    { year: 79, name: 'ソロモン攻防戦（ドズル 戦死）' },
    { year: 79, name: 'ア・バオア・クー攻防戦 / 一年戦争 終結' },
    { year: 93, name: '第二次ネオ・ジオン抗争 / アムロ・シャア 没' },
  ],

  rulers: [
    {
      label: 'ジオン公国 首長',
      entries: [
        { name: 'デギン（公王）', start: 68, end: 79 },
        { name: 'ギレン（最高司令官）', start: 79, end: 79 },
      ],
    },
    {
      label: '地球連邦軍 総司令',
      entries: [
        { name: 'レビル将軍', start: 75, end: 79 },
      ],
    },
  ],
};
