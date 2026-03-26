DATASETS.reiri = {
  name: "レイリ", period: "1513〜1621年",
  empLabel: "天皇",
  categories: {
    "武田家臣":   "#9b59b6",
    "織田・徳川": "#e67e22",
  },
  persons: [
    { name:"岡部丹波守",   title:"高天神城将",          birth:1513, death:1581, cat:"武田家臣" },
    { name:"小山田信茂",   title:"武田家臣",            birth:1539, death:1582, cat:"武田家臣" },
    { name:"穴山梅雪",     title:"武田家臣（内通）",    birth:1541, death:1582, cat:"武田家臣" },
    { name:"武田勝頼",     title:"武田家17代当主",      birth:1546, death:1582, cat:"武田家臣" },
    { name:"真田昌幸",     title:"謀略の将",            birth:1547, death:1611, cat:"武田家臣" },
    { name:"土屋惣蔵",     title:"武田最強の剣士",      birth:1553, death:1582, cat:"武田家臣" },
    { name:"武田信勝",     title:"勝頼の子",            birth:1567, death:1582, cat:"武田家臣" },
    { name:"横田甚五郎",   title:"高天神城副将",        birth:1540, death:1581, cat:"武田家臣", birthUncertain:true },
    { name:"土屋平左衛門", title:"土屋惣蔵の子",        birth:1581, death:1621, cat:"武田家臣", birthUncertain:true },
    { name:"零里",         title:"武田の影",            birth:1565, death:1625, cat:"武田家臣", deathUncertain:true, fictional:true },
    { name:"明智光秀",     title:"本能寺の変",          birth:1528, death:1582, cat:"織田・徳川", birthUncertain:true },
    { name:"織田信長",     title:"天下布武",            birth:1534, death:1582, cat:"織田・徳川" },
    { name:"徳川家康",     title:"江戸幕府初代将軍",    birth:1543, death:1616, cat:"織田・徳川" },
  ],
  events: [
    { year:1575, name:"長篠の戦い" },
    { year:1581, name:"高天神城陥落" },
    { year:1582, name:"本能寺の変・武田家滅亡" },
  ],
  emperors: [
    { name:"後奈良天皇", start:1526, end:1557 },
    { name:"正親町天皇", start:1557, end:1586 },
    { name:"後陽成天皇", start:1586, end:1611 },
  ],
  retired: []
};
