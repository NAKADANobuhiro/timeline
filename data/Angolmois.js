DATASETS.angolmois = {
  name: "アンゴルモア 元寇合戦記", period: "1178〜1314年",
  categories: {
    "対馬勢・流人":   "#27ae60",
    "九州御家人":     "#2471a3",
    "元・モンゴル軍": "#c0392b",
    "高麗軍":         "#e67e22",
  },
  persons: [
    // ── 対馬勢・流人（対馬編） ──
    { name:"朽井迅三郎",   title:"主人公・島流しの武者",           birth:1240, death:1290, cat:"対馬勢・流人", birthUncertain:true, deathUncertain:true, fictional:true },
    { name:"輝日姫",       title:"宗助国の娘・安徳天皇の末裔",      birth:1258, death:1310, cat:"対馬勢・流人", birthUncertain:true, deathUncertain:true, fictional:true },
    { name:"安徳天皇（創作）", title:"壇ノ浦で入水せず生き延びた設定・文永の役の頃まで存命（輝日姫の祖）", birth:1178, death:1278, cat:"対馬勢・流人", deathUncertain:true, fictional:true,
      serve:[ { role:"天皇", start:1180, end:1185 } ] },
    { name:"鬼剛丸",       title:"巨漢の海賊・流人",               birth:1238, death:1290, cat:"対馬勢・流人", birthUncertain:true, deathUncertain:true, fictional:true },
    { name:"白石和久",     title:"元御家人・馬上打物の達人・流人",  birth:1245, death:1290, cat:"対馬勢・流人", birthUncertain:true, deathUncertain:true, fictional:true },
    { name:"張明福",       title:"宋出身の商人・流人",             birth:1240, death:1290, cat:"対馬勢・流人", birthUncertain:true, deathUncertain:true, fictional:true },
    { name:"導円",         title:"僧侶・金創医・流人",             birth:1235, death:1295, cat:"対馬勢・流人", birthUncertain:true, deathUncertain:true, fictional:true },
    { name:"火垂",         title:"弓の名手・流人",                 birth:1248, death:1290, cat:"対馬勢・流人", birthUncertain:true, deathUncertain:true, fictional:true },
    { name:"宗助国",       title:"対馬地頭代・文永の役で戦死",      birth:1207, death:1274, cat:"対馬勢・流人", birthUncertain:true },

    // ── 九州御家人（博多編） ──
    { name:"少弐資能",     title:"鎮西の宿老・弘安の役で戦死",      birth:1198, death:1281, cat:"九州御家人" },
    { name:"少弐経資",     title:"少弐家嫡男・鎮西の指揮官",        birth:1229, death:1289, cat:"九州御家人" },
    { name:"少弐景資",     title:"元寇の日本方総大将",             birth:1246, death:1285, cat:"九州御家人" },
    { name:"大友頼泰",     title:"豊後の御家人・元寇の指揮官",      birth:1222, death:1300, cat:"九州御家人" },
    { name:"菊池武房",     title:"肥後の御家人・赤坂を奪還",        birth:1245, death:1285, cat:"九州御家人" },
    { name:"竹崎季長",     title:"肥後の御家人・『蒙古襲来絵詞』を残す", birth:1246, death:1314, cat:"九州御家人", deathUncertain:true },
    { name:"白石通泰",     title:"肥前の御家人",                   birth:1230, death:1300, cat:"九州御家人", birthUncertain:true, deathUncertain:true },

    // ── 元・モンゴル軍 ──
    { name:"忻都（ヒンドゥ）", title:"元軍の右副都元帥",           birth:1230, death:1290, cat:"元・モンゴル軍", birthUncertain:true, deathUncertain:true },
    { name:"劉復亨",       title:"元軍の左副都元帥・文永の役で負傷", birth:1220, death:1290, cat:"元・モンゴル軍", birthUncertain:true, deathUncertain:true },

    // ── 高麗軍 ──
    { name:"金方慶",       title:"高麗軍の総司令官",               birth:1212, death:1300, cat:"高麗軍" },
    { name:"洪茶丘",       title:"高麗軍の指揮官",                 birth:1244, death:1291, cat:"高麗軍" },
    { name:"金侁",         title:"高麗軍の指揮官・弘安の役で戦死",  birth:1235, death:1281, cat:"高麗軍", birthUncertain:true },
  ],
  events: [
    { year:1268, name:"モンゴルの国書到来" },
    { year:1274, name:"文永の役（対馬編）" },
    { year:1274, name:"宗助国、対馬で戦死" },
    { year:1281, name:"弘安の役（博多編）" },
    { year:1281, name:"志賀島の戦い" },
    { year:1281, name:"台風で元軍壊滅" },
  ],
  rulers: [
    {
      label: "執権",
      entries: [
        { name:"北条時宗", start:1268, end:1284 },
        { name:"北条貞時", start:1284, end:1301 },
      ],
    },
    {
      label: "元",
      entries: [
        { name:"クビライ（世祖）", start:1260, end:1294 },
      ],
    },
  ],
};
