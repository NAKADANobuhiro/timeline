DATASETS.bakumatsu = {
  name: "幕末・明治維新", period: "1809〜1922年",
  categories: {
    "薩摩":"#e74c3c", "長州":"#f39c12", "土佐":"#2ecc71",
    "肥前":"#16a085", "幕府":"#3498db", "新選組":"#9b59b6", "その他":"#95a5a6"
  },
  persons: [
    // 薩摩
    { name:"島津斉彬",  title:"薩摩藩主",            birth:1809, death:1858, cat:"薩摩" },
    { name:"島津久光",  title:"薩摩藩国父",          birth:1817, death:1887, cat:"薩摩" },
    { name:"西郷隆盛",  title:"維新三傑",            birth:1828, death:1877, cat:"薩摩" },
    { name:"大久保利通",title:"維新三傑",            birth:1830, death:1878, cat:"薩摩" },
    { name:"黒田清隆",  title:"第2代内閣総理大臣",   birth:1840, death:1900, cat:"薩摩",
      serve:[ { role:"総理大臣", start:1888, end:1889 } ] },
    { name:"大山巌",    title:"元帥陸軍大将",        birth:1842, death:1916, cat:"薩摩" },

    // 長州
    { name:"大村益次郎",title:"兵部大輔",            birth:1824, death:1869, cat:"長州" },
    { name:"吉田松陰",  title:"松下村塾",            birth:1830, death:1859, cat:"長州" },
    { name:"木戸孝允",  title:"維新三傑",            birth:1833, death:1877, cat:"長州" },
    { name:"井上馨",    title:"元老",                birth:1836, death:1915, cat:"長州" },
    { name:"山縣有朋",  title:"陸軍元帥・総理大臣",  birth:1838, death:1922, cat:"長州",
      serve:[ { role:"総理大臣", start:1889, end:1891 }, { role:"総理大臣", start:1898, end:1900 } ] },
    { name:"高杉晋作",  title:"奇兵隊",              birth:1839, death:1867, cat:"長州" },
    { name:"久坂玄瑞",  title:"松下村塾",            birth:1840, death:1864, cat:"長州" },
    { name:"伊藤博文",  title:"初代内閣総理大臣",    birth:1841, death:1909, cat:"長州",
      serve:[
        { role:"総理大臣", start:1885, end:1888 },
        { role:"総理大臣", start:1892, end:1896 },
        { role:"総理大臣", start:1898, end:1898 },
        { role:"総理大臣", start:1900, end:1901 }
      ] },

    // 土佐
    { name:"武市半平太",title:"土佐勤王党",          birth:1829, death:1865, cat:"土佐" },
    { name:"岩崎弥太郎",title:"三菱創業者",          birth:1835, death:1885, cat:"土佐" },
    { name:"坂本龍馬",  title:"海援隊",              birth:1836, death:1867, cat:"土佐" },
    { name:"板垣退助",  title:"自由民権運動",        birth:1837, death:1919, cat:"土佐" },
    { name:"中岡慎太郎",title:"陸援隊",              birth:1838, death:1867, cat:"土佐" },
    { name:"後藤象二郎",title:"大政奉還建白",        birth:1838, death:1897, cat:"土佐" },

    // 肥前
    { name:"鍋島直正",  title:"佐賀藩主",            birth:1815, death:1871, cat:"肥前" },
    { name:"副島種臣",  title:"外務卿",              birth:1828, death:1905, cat:"肥前" },
    { name:"江藤新平",  title:"初代司法卿",          birth:1834, death:1874, cat:"肥前" },
    { name:"大隈重信",  title:"早稲田創設者・総理",  birth:1838, death:1922, cat:"肥前",
      serve:[ { role:"総理大臣", start:1898, end:1898 }, { role:"総理大臣", start:1914, end:1916 } ] },

    // 幕府・諸藩
    { name:"井伊直弼",  title:"大老",                birth:1815, death:1860, cat:"幕府" },
    { name:"勝海舟",    title:"海軍奉行",            birth:1823, death:1899, cat:"幕府" },
    { name:"小栗忠順",  title:"勘定奉行",            birth:1827, death:1868, cat:"幕府" },
    { name:"河井継之助",title:"長岡藩家老",          birth:1827, death:1868, cat:"幕府" },
    { name:"松平容保",  title:"会津藩主・京都守護職",birth:1836, death:1893, cat:"幕府",
      serve:[ { role:"京都守護職", start:1862, end:1868 } ] },
    { name:"榎本武揚",  title:"旧幕府海軍副総裁",    birth:1836, death:1908, cat:"幕府" },
    { name:"徳川慶喜",  title:"15代将軍",            birth:1837, death:1913, cat:"幕府" },

    // 新選組
    { name:"芹沢鴨",    title:"新選組初代局長",      birth:1827, death:1863, cat:"新選組", birthUncertain:true },
    { name:"近藤勇",    title:"新選組局長",          birth:1834, death:1868, cat:"新選組" },
    { name:"土方歳三",  title:"新選組副長",          birth:1835, death:1869, cat:"新選組" },
    { name:"永倉新八",  title:"二番隊組長",          birth:1839, death:1915, cat:"新選組" },
    { name:"沖田総司",  title:"一番隊組長",          birth:1844, death:1868, cat:"新選組" },
    { name:"斎藤一",    title:"三番隊組長",          birth:1844, death:1915, cat:"新選組" },

    // 思想家・公家・実業
    { name:"横井小楠",  title:"思想家・参与",        birth:1809, death:1869, cat:"その他" },
    { name:"佐久間象山",title:"思想家・蘭学者",      birth:1811, death:1864, cat:"その他" },
    { name:"岩倉具視",  title:"公家・右大臣",        birth:1825, death:1883, cat:"その他" },
    { name:"橋本左内",  title:"福井藩士",            birth:1834, death:1859, cat:"その他" },
    { name:"福沢諭吉",  title:"慶應義塾",            birth:1835, death:1901, cat:"その他" },
    { name:"三条実美",  title:"太政大臣",            birth:1837, death:1891, cat:"その他" },
    { name:"渋沢栄一",  title:"日本資本主義の父",    birth:1840, death:1931, cat:"その他" },
  ],
  events: [
    { year:1853, name:"黒船来航" },
    { year:1854, name:"日米和親条約" },
    { year:1858, name:"安政の大獄" },
    { year:1860, name:"桜田門外の変" },
    { year:1862, name:"生麦事件" },
    { year:1863, name:"薩英戦争" },
    { year:1863, name:"八月十八日の政変" },
    { year:1864, name:"池田屋事件" },
    { year:1864, name:"禁門の変" },
    { year:1866, name:"薩長同盟" },
    { year:1866, name:"第二次長州征伐" },
    { year:1867, name:"大政奉還" },
    { year:1868, name:"戊辰戦争・明治維新" },
    { year:1869, name:"五稜郭の戦い" },
    { year:1869, name:"版籍奉還" },
    { year:1871, name:"廃藩置県" },
    { year:1871, name:"岩倉使節団" },
    { year:1873, name:"明治六年政変" },
    { year:1874, name:"民撰議院設立建白書" },
    { year:1877, name:"西南戦争" },
    { year:1885, name:"内閣制度創設" },
    { year:1889, name:"大日本帝国憲法" },
    { year:1890, name:"第一回帝国議会" },
    { year:1894, name:"日清戦争" },
    { year:1902, name:"日英同盟" },
    { year:1904, name:"日露戦争" },
    { year:1910, name:"韓国併合" },
  ],
  emperors: [
    { name:"孝明天皇", start:1846, end:1866 },
    { name:"明治天皇", start:1867, end:1912 },
    { name:"大正天皇", start:1912, end:1922 },
  ],
  retired: []
};
