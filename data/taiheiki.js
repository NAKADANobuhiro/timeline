DATASETS.taiheiki = {
  name: '太平記',
  period: '1270〜1400年',
  bce: false,
  categories: {
    '南朝（後醍醐方）': '#27ae60',
    '足利方':           '#2980b9',
    '北条氏':           '#c0392b',
    '公家・その他':     '#8e44ad',
  },
  persons: [

    /* ── 北条氏 ── */
    {
      name: '北条高時',
      title: '第14代執権',
      birth: 1303, death: 1333, cat: '北条氏',
      serve: [{ role: '第14代執権', start: 1316, end: 1326 }],
    },
    {
      name: '長崎高資',
      title: '内管領',
      birth: 1290, death: 1333, cat: '北条氏',
      birthUncertain: true,
      serve: [{ role: '内管領', start: 1315, end: 1333 }],
    },

    /* ── 南朝（後醍醐方） ── */
    {
      name: '北畠親房',
      title: '公家・南朝の参謀',
      birth: 1293, death: 1354, cat: '南朝（後醍醐方）',
    },
    {
      name: '楠木正成',
      title: '河内の武将',
      birth: 1294, death: 1336, cat: '南朝（後醍醐方）',
      birthUncertain: true,
    },
    {
      name: '名和長年',
      title: '伯耆の武将',
      birth: 1280, death: 1336, cat: '南朝（後醍醐方）',
      birthUncertain: true,
    },
    {
      name: '新田義貞',
      title: '武将・鎌倉攻め総大将',
      birth: 1301, death: 1338, cat: '南朝（後醍醐方）',
      serve: [{ role: '鎌倉攻め総大将', start: 1333, end: 1333 }],
    },
    {
      name: '後醍醐天皇',
      title: '第96代天皇',
      birth: 1288, death: 1339, cat: '南朝（後醍醐方）',
      serve: [{ role: '第96代天皇', start: 1318, end: 1339 }],
    },
    {
      name: '護良親王',
      title: '征夷大将軍',
      birth: 1308, death: 1335, cat: '南朝（後醍醐方）',
      serve: [{ role: '征夷大将軍', start: 1333, end: 1334 }],
    },
    {
      name: '北畠顕家',
      title: '陸奥将軍府',
      birth: 1318, death: 1338, cat: '南朝（後醍醐方）',
      serve: [{ role: '陸奥守・鎮守府将軍', start: 1333, end: 1338 }],
    },
    {
      name: '脇屋義助',
      title: '新田義貞の弟',
      birth: 1306, death: 1342, cat: '南朝（後醍醐方）',
    },
    {
      name: '楠木正行',
      title: '楠木正成の嫡男',
      birth: 1326, death: 1348, cat: '南朝（後醍醐方）',
    },
    {
      name: '後村上天皇',
      title: '第97代天皇（南朝）',
      birth: 1328, death: 1368, cat: '南朝（後醍醐方）',
      serve: [{ role: '第97代天皇（南朝）', start: 1339, end: 1368 }],
    },

    /* ── 足利方 ── */
    {
      name: '赤松則村（円心）',
      title: '播磨の武将',
      birth: 1277, death: 1350, cat: '足利方',
    },
    {
      name: '足利尊氏',
      title: '初代征夷大将軍',
      birth: 1305, death: 1358, cat: '足利方',
      serve: [{ role: '征夷大将軍', start: 1338, end: 1358 }],
    },
    {
      name: '足利直義',
      title: '尊氏の弟・幕府政務担当',
      birth: 1306, death: 1352, cat: '足利方',
      serve: [{ role: '政所・幕府運営', start: 1338, end: 1350 }],
    },
    {
      name: '高師直',
      title: '執事・尊氏の腹心',
      birth: 1304, death: 1351, cat: '足利方',
      birthUncertain: true,
      serve: [{ role: '執事', start: 1336, end: 1351 }],
    },
    {
      name: '佐々木道誉',
      title: '近江の守護・婆娑羅大名',
      birth: 1296, death: 1373, cat: '足利方',
    },
    {
      name: '細川頼春',
      title: '四国の守護',
      birth: 1299, death: 1352, cat: '足利方',
    },
    {
      name: '足利義詮',
      title: '第2代将軍',
      birth: 1330, death: 1367, cat: '足利方',
      serve: [{ role: '第2代将軍', start: 1358, end: 1367 }],
    },
    {
      name: '足利義満',
      title: '第3代将軍',
      birth: 1358, death: 1408, cat: '足利方',
      serve: [{ role: '第3代将軍', start: 1368, end: 1394 }],
    },

    /* ── 公家・その他 ── */
    {
      name: '二条道平',
      title: '関白',
      birth: 1283, death: 1341, cat: '公家・その他',
      serve: [{ role: '関白', start: 1316, end: 1318 }],
    },
    {
      name: '花山院師賢',
      title: '公家・後醍醐方',
      birth: 1290, death: 1337, cat: '公家・その他',
    },
  ],

  events: [
    { year: 1318, name: '後醍醐天皇 即位' },
    { year: 1324, name: '正中の変' },
    { year: 1331, name: '元弘の乱' },
    { year: 1333, name: '鎌倉幕府 滅亡・建武の新政' },
    { year: 1335, name: '中先代の乱・護良親王 殺害' },
    { year: 1336, name: '湊川の戦い・南北朝 分裂' },
    { year: 1338, name: '足利尊氏 征夷大将軍就任' },
    { year: 1339, name: '後醍醐天皇 崩御' },
    { year: 1348, name: '四条畷の戦い（楠木正行 戦死）' },
    { year: 1350, name: '観応の擾乱' },
    { year: 1352, name: '足利直義 死去' },
    { year: 1358, name: '足利尊氏 死去' },
    { year: 1368, name: '足利義満 将軍就任' },
    { year: 1392, name: '南北朝 統一' },
  ],

  rulers: [
    {
      label: '南朝 天皇',
      entries: [
        { name: '後醍醐',   start: 1318, end: 1339 },
        { name: '後村上',   start: 1339, end: 1368 },
        { name: '長慶',     start: 1368, end: 1383 },
        { name: '後亀山',   start: 1383, end: 1392 },
      ],
    },
    {
      label: '征夷大将軍',
      entries: [
        { name: '護良親王', start: 1333, end: 1334 },
        { name: '足利尊氏', start: 1338, end: 1358 },
        { name: '足利義詮', start: 1358, end: 1367 },
        { name: '足利義満', start: 1368, end: 1394 },
      ],
    },
  ],
};
