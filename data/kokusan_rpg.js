/* 国産RPGクロニクル 物語の革命者たち
   発売は 2 年タイムライン、発売以外はイベントとして表示
   出典: 書籍『国産RPGクロニクル 物語の革命者たち』各章末年表
   ※ 月単位データセット (monthly: true)
   ※ 「発売」のみバー化。配信開始・サービス開始・連載開始・放送開始・公開・刊行・誕生 はイベント */
DATASETS.kokusan_rpg = {
  name: '国産RPGクロニクル',
  monthly: true,
  period: '1974年9月〜2027年10月',
  labels: {
    age:      '年経過',
    lifespan: '展開期間',
    agePanel: '展開中の作品',
  },
  categories: {
    'ゲームソフト': '#E60012',
    'ゲームハード': '#0066CC',
    'カードゲーム': '#F9A825',
  },
  persons: [
    /* ── 1980年代 ── */
    { name: 'ウィザードリィ',                          title: 'PC',     birth: '1981-05', death: '1983-05', cat: 'ゲームソフト' },
    { name: 'ドラゴンクエスト',                        title: 'FC',     birth: '1986-12', death: '1988-12', cat: 'ゲームソフト' },
    { name: 'デジタル・デビル物語 女神転生',           title: 'FC',     birth: '1987-09', death: '1989-09', cat: 'ゲームソフト' },
    { name: 'ゲームボーイ',                            title: '携帯ゲーム機', birth: '1989-04', death: '1991-04', cat: 'ゲームハード' },
    { name: 'クインティ',                              title: 'FC',     birth: '1989-06', death: '1991-06', cat: 'ゲームソフト' },
    { name: 'MOTHER',                                  title: 'FC',     birth: '1989-07', death: '1991-07', cat: 'ゲームソフト' },
    { name: '魔界塔士Sa・Ga',                          title: 'GB',     birth: '1989-12', death: '1991-12', cat: 'ゲームソフト' },

    /* ── 1990年代前半 ── */
    { name: 'デジタル・デビル物語 女神転生2',          title: 'FC',     birth: '1990-04', death: '1992-04', cat: 'ゲームソフト' },
    { name: 'Sa・Ga2 秘宝伝説',                        title: 'GB',     birth: '1990-12', death: '1992-12', cat: 'ゲームソフト' },
    { name: '時空の覇者 Sa・Ga3 [完結編]',             title: 'GB',     birth: '1991-12', death: '1993-12', cat: 'ゲームソフト' },
    { name: 'ヨッシーのたまご',                        title: 'FC/GB',  birth: '1991-12', death: '1993-12', cat: 'ゲームソフト' },
    { name: 'ロマンシング サ・ガ',                     title: 'SFC',    birth: '1992-01', death: '1994-01', cat: 'ゲームソフト' },
    { name: '真・女神転生',                            title: 'SFC',    birth: '1992-10', death: '1994-10', cat: 'ゲームソフト' },
    { name: 'ロマンシング サ・ガ2',                    title: 'SFC',    birth: '1993-12', death: '1995-12', cat: 'ゲームソフト' },
    { name: '真・女神転生2',                           title: 'SFC',    birth: '1994-03', death: '1996-03', cat: 'ゲームソフト' },
    { name: '真・女神転生 if...',                      title: 'SFC',    birth: '1994-10', death: '1996-10', cat: 'ゲームソフト' },

    /* ── 1990年代後半 ── */
    { name: 'クロノ・トリガー',                        title: 'SFC',    birth: '1995-03', death: '1997-03', cat: 'ゲームソフト' },
    { name: 'ロマンシング サ・ガ3',                    title: 'SFC',    birth: '1995-11', death: '1997-11', cat: 'ゲームソフト' },
    { name: '真・女神転生デビルサマナー',              title: 'SS',     birth: '1995-12', death: '1997-12', cat: 'ゲームソフト' },
    { name: 'ポケットモンスター 赤・緑',               title: 'GB',     birth: '1996-02', death: '1998-02', cat: 'ゲームソフト' },
    { name: 'スーパーマリオRPG',                       title: 'SFC',    birth: '1996-03', death: '1998-03', cat: 'ゲームソフト' },
    { name: 'ゲームボーイポケット',                    title: '携帯ゲーム機', birth: '1996-07', death: '1998-07', cat: 'ゲームハード' },
    { name: '女神異聞録ペルソナ',                      title: 'PS',     birth: '1996-09', death: '1998-09', cat: 'ゲームソフト' },
    { name: 'ポケモンカードゲーム',                    title: 'TCG',    birth: '1996-10', death: '1998-10', cat: 'カードゲーム' },
    { name: 'ディアブロ',                              title: 'PC',     birth: '1996-12', death: '1998-12', cat: 'ゲームソフト' },
    { name: 'サガ フロンティア',                       title: 'PS',     birth: '1997-07', death: '1999-07', cat: 'ゲームソフト' },
    { name: 'moon',                                    title: 'PS',     birth: '1997-10', death: '1999-10', cat: 'ゲームソフト' },
    { name: 'サガ フロンティア2',                      title: 'PS',     birth: '1999-04', death: '2001-04', cat: 'ゲームソフト' },
    { name: 'UFO 〜A day in the life〜',               title: 'PS',     birth: '1999-06', death: '2001-06', cat: 'ゲームソフト' },
    { name: 'ポケットモンスター 金・銀',               title: 'GB',     birth: '1999-11', death: '2001-11', cat: 'ゲームソフト' },

    /* ── 2000年代 ── */
    { name: 'L.O.L. Lack of Love',                     title: 'DC',     birth: '2000-11', death: '2002-11', cat: 'ゲームソフト' },
    { name: 'どうぶつの森',                            title: 'N64',    birth: '2001-04', death: '2003-04', cat: 'ゲームソフト' },
    { name: '.hack//感染拡大 Vol.1',                   title: 'PS2',    birth: '2002-06', death: '2004-06', cat: 'ゲームソフト' },
    { name: 'チュウリップ',                            title: 'PS2',    birth: '2002-10', death: '2004-10', cat: 'ゲームソフト' },
    { name: 'アンリミテッド：サガ',                    title: 'PS2',    birth: '2002-12', death: '2004-12', cat: 'ゲームソフト' },
    { name: '真・女神転生3 NOCTURNE',                  title: 'PS2',    birth: '2003-02', death: '2005-02', cat: 'ゲームソフト' },
    { name: '真・女神転生3 NOCTURNE マニアクス',       title: 'PS2',    birth: '2004-01', death: '2006-01', cat: 'ゲームソフト' },

    /* ── 2010年代以降 ── */
    { name: '真・女神転生4',                           title: '3DS',    birth: '2013-05', death: '2015-05', cat: 'ゲームソフト' },
    { name: 'UNDERTALE',                               title: 'PC',     birth: '2015-09', death: '2017-09', cat: 'ゲームソフト' },
    { name: 'サガ スカーレット グレイス',              title: 'PS Vita', birth: '2016-12', death: '2018-12', cat: 'ゲームソフト' },
    { name: 'サガ スカーレット グレイス 緋色の野望',   title: 'マルチ', birth: '2018-08', death: '2020-08', cat: 'ゲームソフト' },
    { name: '真・女神転生5',                           title: 'NS',     birth: '2021-11', death: '2023-11', cat: 'ゲームソフト' },
    { name: 'Balatro',                                 title: 'マルチ', birth: '2024-02', death: '2026-02', cat: 'ゲームソフト' },
    { name: 'サガ エメラルド ビヨンド',                title: 'マルチ', birth: '2024-04', death: '2026-04', cat: 'ゲームソフト' },
    { name: 'ストレイチルドレン',                      title: 'NS',     birth: '2024-12', death: '2026-12', cat: 'ゲームソフト' },
    { name: 'Pokémon Legends: Z-A',                    title: 'NS/NS2', birth: '2025-10', death: '2027-10', cat: 'ゲームソフト' },
  ],

  events: [
    /* ── 1970-80年代 ── */
    { year: '1974-09', name: '『ダンジョンズ&ドラゴンズ』(TRPG) 誕生' },
    { year: '1983-03', name: '田尻智がミニコミ誌『ゲームフリーク』を創刊' },
    { year: '1986-03', name: '小説『デジタル・デビル・ストーリー 女神転生』刊行' },
    { year: '1989-04', name: '株式会社ゲームフリーク設立' },

    /* ── 1990年代 ── */
    { year: '1994-11', name: '小説『クリス・クロス 混沌の魔王』刊行' },
    { year: '1995-10', name: 'TVアニメ『新世紀エヴァンゲリオン』放送開始' },
    { year: '1997-04', name: 'TVアニメ『ポケットモンスター』放送開始' },
    { year: '1997-07', name: '劇場版アニメ『新世紀エヴァンゲリオン Air/まごころを、君に』公開' },
    { year: '1997-09', name: '『ウルティマオンライン』(PC) サービス開始' },
    { year: '1997-12', name: 'ポケモンショック（第38話「でんのうせんしポリゴン」放送）' },
    { year: '1998-04', name: 'TVアニメ『ポケットモンスター』放送再開' },
    { year: '1998-07', name: '劇場版アニメ『ミュウツーの逆襲』公開' },

    /* ── 2000年代 ── */
    { year: '2001-01', name: '映画『アヴァロン』公開' },
    { year: '2002-05', name: '『FF11』(MMORPG) サービス開始' },
    { year: '2002-11', name: 'ウェブ小説『ソードアート・オンライン』公開' },
    { year: '2003-01', name: 'マンガ『よつばと!』連載開始' },
    { year: '2004-11', name: '『World of Warcraft』(MMORPG) サービス開始' },
    { year: '2009-02', name: '小説『アクセル・ワールド』刊行' },
    { year: '2009-04', name: '小説『ソードアート・オンライン』刊行開始' },

    /* ── 2010年代 ── */
    { year: '2012-02', name: 'TVドラマ『孤独のグルメ』放送開始' },
    { year: '2012-07', name: 'TVアニメ『ソードアート・オンライン』放送開始' },
    { year: '2014-04', name: 'マンガ『ダンジョン飯』連載開始' },
    { year: '2017-02', name: '劇場版アニメ『ソードアート・オンライン オーディナル・スケール』公開' },
    { year: '2019-10', name: '『moon』(NS) 配信開始' },

    /* ── 2020年代 ── */
    { year: '2020-02', name: 'マンガ『葬送のフリーレン』連載開始' },
    { year: '2021-09', name: '資料本『ダンジョン飯 ワールドガイド 冒険者バイブル』刊行' },
    { year: '2023-12', name: 'マンガ『ダンジョン飯』単行本完結' },
    { year: '2024-01', name: 'TVアニメ『ダンジョン飯』放送開始' },
    { year: '2024-02', name: '資料本『ダンジョン飯 ワールドガイド 冒険者バイブル 完全版』刊行' },
  ],
};
