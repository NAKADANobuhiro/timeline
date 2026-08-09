DATASETS.tenmaku = {
  name: "天幕のジャードゥーガル", period: "1162〜1294年",
  empLabel: "大ハーン",
  categories: {
    "モンゴル皇族":       "#c0392b",
    "后妃・ハトゥン":     "#6c3483",
    "モンゴルの臣下":     "#2471a3",
    "イスラム圏・学者":   "#27ae60",
    "周辺部族":           "#d68910",
  },
  persons: [
    // ── モンゴル皇族 ──
    { name:"チンギス・カン", title:"モンゴル帝国初代大ハーン",        birth:1162, death:1227, cat:"モンゴル皇族", birthUncertain:true,
      serve:[ { role:"大ハーン", start:1206, end:1227 } ] },
    { name:"ジュチ",         title:"チンギスの長男",                birth:1182, death:1227, cat:"モンゴル皇族", birthUncertain:true, deathUncertain:true },
    { name:"チャガタイ",     title:"チンギスの次男・法の番人",      birth:1183, death:1242, cat:"モンゴル皇族", birthUncertain:true },
    { name:"オゴデイ",       title:"第2代大ハーン・チンギスの三男",  birth:1186, death:1241, cat:"モンゴル皇族",
      serve:[ { role:"大ハーン", start:1229, end:1241 } ] },
    { name:"トルイ",         title:"チンギスの四男・トゥース攻めの主将", birth:1191, death:1232, cat:"モンゴル皇族", birthUncertain:true },
    { name:"テムゲ",         title:"チンギスの末弟テムゲ・オッチギン。オゴデイ死後の監国期に帝位を狙い失脚・処刑", birth:1168, death:1246, cat:"モンゴル皇族", birthUncertain:true, deathUncertain:true },
    { name:"グユク",         title:"第3代大ハーン・オゴデイの長子",  birth:1206, death:1248, cat:"モンゴル皇族",
      serve:[ { role:"大ハーン", start:1246, end:1248 } ] },
    { name:"モンケ",         title:"トルイの長男・第4代大ハーン", birth:1209, death:1259, cat:"モンゴル皇族",
      serve:[ { role:"大ハーン", start:1251, end:1259 } ] },
    { name:"クビライ",       title:"トルイの子・第5代大ハーン／元朝初代皇帝",    birth:1215, death:1294, cat:"モンゴル皇族",
      serve:[ { role:"大ハーン／元朝皇帝", start:1260, end:1294 } ] },
    { name:"フレグ",         title:"トルイの子・後のイルハン朝始祖",  birth:1218, death:1265, cat:"モンゴル皇族", birthUncertain:true },
    { name:"アリクブケ",     title:"トルイの末子・クビライと帝位を争う", birth:1219, death:1266, cat:"モンゴル皇族", birthUncertain:true,
      serve:[ { role:"大ハーン（対立）", start:1260, end:1264 } ] },

    // ── 后妃・ハトゥン ──
    { name:"ドレゲネ",       title:"オゴデイの第六妃・グユクの生母・オゴデイ死後の監国", birth:1185, death:1246, cat:"后妃・ハトゥン", birthUncertain:true,
      serve:[ { role:"監国", start:1241, end:1246 } ] },
    { name:"ソルコクタニ・ベキ", title:"トルイの正妃・ネストリウス派", birth:1190, death:1252, cat:"后妃・ハトゥン", birthUncertain:true },
    { name:"ボラクチン",     title:"オゴデイの第一妃・宮廷の謀略家",  birth:1182, death:1241, cat:"后妃・ハトゥン", birthUncertain:true, deathUncertain:true },
    { name:"キルギスタニ",   title:"オゴデイの第三妃・小柄で明るい性格",  birth:1190, death:1246, cat:"后妃・ハトゥン", birthUncertain:true, deathUncertain:true },
    { name:"モゲ",           title:"オゴデイの第四妃／史実モデル モゲ・ハトゥン",  birth:1190, death:1248, cat:"后妃・ハトゥン", birthUncertain:true, deathUncertain:true },
    { name:"クラン",         title:"メルキト出身のチンギスの妃",     birth:1185, death:1215, cat:"后妃・ハトゥン", birthUncertain:true, deathUncertain:true },

    // ── モンゴルの臣下 ──
    { name:"チンカイ",       title:"ウイグル人の書記官長",           birth:1169, death:1252, cat:"モンゴルの臣下", birthUncertain:true },
    { name:"シラ",           title:"サマルカンド出身の通訳", birth:1200, death:1260, cat:"モンゴルの臣下", birthUncertain:true, deathUncertain:true, fictional:true },
    { name:"耶律楚材",       title:"オゴデイに仕えた契丹人宰相・行政の礎を築いた名臣（史実人物・作品未登場）", birth:1190, death:1244, cat:"モンゴルの臣下", notInWork:true },
    { name:"アブドゥッラフマーン", title:"オゴデイ〜監国期の徴税請負官。ドレゲネ／ファーティマの推挙で台頭、グユク即位後に処刑（史実人物・作品未登場）", birth:1185, death:1246, cat:"モンゴルの臣下", birthUncertain:true, notInWork:true },

    // ── イスラム圏・学者 ──
    { name:"シタラ／ファーティマ", title:"主人公／史実モデル ファーティマ・ハトゥン", birth:1208, death:1246, cat:"イスラム圏・学者", birthUncertain:true,
      serve:[ { role:"監国ドレゲネの腹心", start:1241, end:1246 } ] },
    { name:"ファーティマ（主人）", title:"シタラの主人・学者の未亡人・恩人", birth:1178, death:1221, cat:"イスラム圏・学者", birthUncertain:true, deathUncertain:true },
    { name:"ムハンマド",     title:"主人ファーティマの息子／史実モデルは後の大学者ナスィールッディーン・トゥースィー", birth:1201, death:1274, cat:"イスラム圏・学者" },

    // ── 周辺部族 ──
    { name:"ダイル・ウスン", title:"メルキト族の長・巫者（カム）／ドレゲネの元夫・クランの父。オゴデイ率いるモンゴル軍と戦い戦死", birth:1155, death:1204, cat:"周辺部族", birthUncertain:true, deathUncertain:true },
  ],
  events: [
    { year:1206, name:"モンゴル帝国建国" },
    { year:1219, name:"ホラズム遠征開始" },
    { year:1220, name:"サマルカンド陥落" },
    { year:1221, name:"トゥース攻略・シタラ捕囚" },
    { year:1227, name:"チンギス・カン死去" },
    { year:1229, name:"オゴデイ即位" },
    { year:1232, name:"トルイ急死" },
    { year:1234, name:"金朝滅亡" },
    { year:1235, name:"カラコルム造営" },
    { year:1241, name:"オゴデイ死去・監国開始" },
    { year:1246, name:"グユク即位・ファーティマ処刑" },
    { year:1248, name:"グユク死去" },
    { year:1271, name:"元朝成立" },
    { year:1274, name:"文永の役" },
    { year:1281, name:"弘安の役" },
  ],
  emperors: [
    { name:"チンギス・カン",     start:1206, end:1227 },
    { name:"トルイ（監国）",     start:1227, end:1229 },
    { name:"オゴデイ",           start:1229, end:1241 },
    { name:"ドレゲネ（監国）",   start:1241, end:1246 },
    { name:"グユク",             start:1246, end:1248 },
  ],
  retired: []
};
