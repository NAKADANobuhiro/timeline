DATASETS.nigejozu = {
  name: "逃げ上手の若君", period: "1288〜1392年",
  empLabel: "天皇",
  retLabel: "南朝",
  categories: {
    "北条・鎌倉派": "#e74c3c",
    "足利・幕府派": "#3498db",
    "南朝派":       "#f1c40f",
    "時行の仲間":   "#1abc9c",
  },
  persons: [
    { name:"後醍醐天皇",   title:"建武の新政",          birth:1288, death:1339, cat:"南朝派" },
    { name:"諏訪頼重",     title:"諏訪大社大祝",        birth:1290, death:1337, cat:"北条・鎌倉派", birthUncertain:true },
    { name:"楠木正成",     title:"大楠公",              birth:1294, death:1336, cat:"南朝派", birthUncertain:true },
    { name:"新田義貞",     title:"鎌倉を攻め落とす",    birth:1301, death:1338, cat:"南朝派" },
    { name:"北条高時",     title:"14代執権・時行の父",  birth:1304, death:1333, cat:"北条・鎌倉派" },
    { name:"足利尊氏",     title:"室町幕府初代将軍",    birth:1305, death:1358, cat:"足利・幕府派" },
    { name:"足利直義",     title:"幕府行政担当",        birth:1306, death:1352, cat:"足利・幕府派" },
    { name:"高師直",       title:"執事・冷酷な策謀家",  birth:1310, death:1351, cat:"足利・幕府派", birthUncertain:true },
    { name:"北条時行",     title:"逃げ上手の若君",      birth:1325, death:1353, cat:"北条・鎌倉派", birthUncertain:true, deathUncertain:true },
    { name:"玄蕃",         title:"忍び",                birth:1322, death:1360, cat:"時行の仲間", birthUncertain:true, deathUncertain:true, fictional:true },
    { name:"小次郎",       title:"若武者",              birth:1324, death:1365, cat:"時行の仲間", birthUncertain:true, deathUncertain:true, fictional:true },
    { name:"吹雪",         title:"巫女・剣士",          birth:1323, death:1380, cat:"時行の仲間", birthUncertain:true, deathUncertain:true, fictional:true },
    { name:"雫",           title:"諏訪の侍女",          birth:1325, death:1375, cat:"時行の仲間", birthUncertain:true, deathUncertain:true, fictional:true },
  ],
  events: [
    { year:1333, name:"鎌倉幕府滅亡" },
    { year:1335, name:"中先代の乱" },
    { year:1336, name:"湊川の戦い・南北朝分裂" },
    { year:1338, name:"足利尊氏 征夷大将軍" },
    { year:1392, name:"南北朝合一" },
  ],
  emperors: [
    { name:"後醍醐天皇", start:1318, end:1339 },
    { name:"後村上天皇", start:1339, end:1368 },
  ],
  retired: [
    { name:"北朝/足利幕府", start:1336, end:1392 },
  ]
};
