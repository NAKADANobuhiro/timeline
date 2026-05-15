/* 国産RPGクロニクル 物語の革命者たち — 押井守インタビュー章
   出典: 書籍『国産RPGクロニクル 物語の革命者たち』押井守インタビュー章末年表
   ※ 月単位データセット (monthly: true)
   ※ カテゴリ: 人物 / 映像作品 / ゲーム
   ※ 人物 = 生涯バー、映像作品の公開・ゲームの発売 = 2 年バー、刊行/始動発表 はイベント */
DATASETS.kokusan_rpg_oshii = {
  name: '国産RPGクロニクル（押井守インタビュー）',
  monthly: true,
  period: '1951年8月〜2078年11月',
  labels: {
    age:      '年経過',
    lifespan: '展開期間',
    agePanel: '展開中の作品',
  },
  categoryLabels: {
    '人物': { age: '歳', lifespan: '生涯' },
  },
  categories: {
    '人物':     '#8E44AD',
    '映像作品': '#2980B9',
    'ゲーム':   '#E60012',
  },
  persons: [
    /* ── 人物 ── */
    { name: '押井守',     title: '映画監督・演出家・脚本家（1951年8月8日生）', birth: '1951-08', death: '2051-08', cat: '人物' },
    { name: '渡辺範明',   title: 'ゲームデザイナー・著者（1978年11月3日生）',  birth: '1978-11', death: '2078-11', cat: '人物' },

    /* ── 映像作品（公開を 2 年バー化） ── */
    { name: 'うる星やつら オンリー・ユー',                title: '劇場版アニメ', birth: '1983-02', death: '1985-02', cat: '映像作品' },
    { name: 'うる星やつら2 ビューティフル・ドリーマー',   title: '劇場版アニメ', birth: '1984-02', death: '1986-02', cat: '映像作品' },
    { name: '機動警察パトレイバー the Movie',             title: '劇場版アニメ', birth: '1989-07', death: '1991-07', cat: '映像作品' },
    { name: '機動警察パトレイバー2 the Movie',            title: '劇場版アニメ', birth: '1993-08', death: '1995-08', cat: '映像作品' },
    { name: 'GHOST IN THE SHELL／攻殻機動隊',             title: '劇場版アニメ', birth: '1995-11', death: '1997-11', cat: '映像作品' },
    { name: 'アヴァロン',                                 title: '映画',         birth: '2001-01', death: '2003-01', cat: '映像作品' },
    { name: 'イノセンス',                                 title: '劇場版アニメ', birth: '2004-03', death: '2006-03', cat: '映像作品' },
    { name: 'スカイ・クロラ The Sky Crawlers',            title: '劇場版アニメ', birth: '2008-08', death: '2010-08', cat: '映像作品' },
    { name: '天使のたまご 4Kリマスター',                  title: '劇場版アニメ', birth: '2025-11', death: '2027-11', cat: '映像作品' },

    /* ── ゲーム（発売を 2 年バー化） ── */
    { name: 'スーパーマリオブラザーズ',           title: 'FC',     birth: '1985-09', death: '1987-09', cat: 'ゲーム' },
    { name: 'ドラゴンクエスト',                   title: 'FC',     birth: '1986-05', death: '1988-05', cat: 'ゲーム' },
    { name: 'ウルティマ 恐怖のエクソダス',        title: 'FC',     birth: '1987-10', death: '1989-10', cat: 'ゲーム' },
    { name: 'ウィザードリィ',                     title: 'FC',     birth: '1987-12', death: '1989-12', cat: 'ゲーム' },
    { name: 'サンサーラ・ナーガ',                 title: 'FC',     birth: '1990-03', death: '1992-03', cat: 'ゲーム' },
    { name: 'サンサーラ・ナーガ2',                title: 'SFC',    birth: '1994-07', death: '1996-07', cat: 'ゲーム' },
    { name: 'Fallout',                            title: 'PC',     birth: '1997-10', death: '1999-10', cat: 'ゲーム' },
    { name: 'Fallout2',                           title: 'PC',     birth: '1998-10', death: '2000-10', cat: 'ゲーム' },
    { name: 'Fallout4',                           title: 'マルチ', birth: '2015-11', death: '2017-11', cat: 'ゲーム' },
    { name: 'ドラゴンクエストビルダーズ',         title: 'マルチ', birth: '2016-01', death: '2018-01', cat: 'ゲーム' },
    { name: 'DEATH STRANDING',                    title: 'PS4',    birth: '2019-11', death: '2021-11', cat: 'ゲーム' },
    { name: "DEATH STRANDING DIRECTOR'S CUT",     title: 'PS5',    birth: '2021-09', death: '2023-09', cat: 'ゲーム' },
  ],

  events: [
    { year: '1988-04', name: '小説『ロードス島戦記 灰色の魔女』刊行' },
    { year: '1997-12', name: '書籍『注文の多い傭兵たち』刊行' },
    { year: '2026-01', name: 'アニメ『装甲騎兵ボトムズ 灰色の魔女』始動発表' },
  ],
};
