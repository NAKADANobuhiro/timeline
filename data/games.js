DATASETS.games = {
  name: 'ゲーム機の歴史',
  period: '1977〜2030年',
  categories: {
    'アタリ':       '#C0392B',
    '任天堂':       '#E60012',
    'セガ':         '#1565C0',
    'ソニー':       '#003791',
    'バンダイ':     '#F57C00',
    'マイクロソフト': '#107C10',
    'SNK':          '#F9A825',
    'アップル':     '#555555',
  },
  persons: [

    /* ── アタリ ── */
    { name: 'Atari 2600 (VCS)',  title: '据え置き', birth: 1977, death: 1987, cat: 'アタリ' },
    { name: 'Atari 5200',        title: '据え置き', birth: 1982, death: 1992, cat: 'アタリ' },
    { name: 'Atari 7800',        title: '据え置き', birth: 1986, death: 1996, cat: 'アタリ' },
    { name: 'Atari Lynx',        title: '携帯機',   birth: 1989, death: 1999, cat: 'アタリ' },
    { name: 'Atari Jaguar',      title: '据え置き', birth: 1993, death: 2003, cat: 'アタリ' },

    /* ── 任天堂 ── */
    { name: 'ファミリーコンピュータ', title: '据え置き', birth: 1983, death: 1993, cat: '任天堂' },
    { name: 'ゲームボーイ',           title: '携帯機',   birth: 1989, death: 1999, cat: '任天堂' },
    { name: 'スーパーファミコン',     title: '据え置き', birth: 1990, death: 2000, cat: '任天堂' },
    { name: 'バーチャルボーイ',       title: '据え置き', birth: 1995, death: 2005, cat: '任天堂' },
    { name: 'NINTENDO 64',            title: '据え置き', birth: 1996, death: 2006, cat: '任天堂' },
    { name: 'ゲームボーイカラー',     title: '携帯機',   birth: 1998, death: 2008, cat: '任天堂' },
    { name: 'ゲームボーイアドバンス', title: '携帯機',   birth: 2001, death: 2011, cat: '任天堂' },
    { name: 'ゲームキューブ',         title: '据え置き', birth: 2001, death: 2011, cat: '任天堂' },
    { name: 'ニンテンドーDS',         title: '携帯機',   birth: 2004, death: 2014, cat: '任天堂' },
    { name: 'Wii',                    title: '据え置き', birth: 2006, death: 2016, cat: '任天堂' },
    { name: 'ニンテンドー3DS',        title: '携帯機',   birth: 2011, death: 2021, cat: '任天堂' },
    { name: 'Wii U',                  title: '据え置き', birth: 2012, death: 2022, cat: '任天堂' },
    { name: 'Nintendo Switch',        title: '据え置き/携帯', birth: 2017, death: 2027, cat: '任天堂' },
    { name: 'Nintendo Switch 2',      title: '据え置き/携帯', birth: 2025, death: 2035, cat: '任天堂' },

    /* ── セガ ── */
    { name: 'SG-1000',           title: '据え置き', birth: 1983, death: 1993, cat: 'セガ' },
    { name: 'セガ・マークIII',   title: '据え置き', birth: 1985, death: 1995, cat: 'セガ' },
    { name: 'メガドライブ',      title: '据え置き', birth: 1988, death: 1998, cat: 'セガ' },
    { name: 'ゲームギア',        title: '携帯機',   birth: 1990, death: 2000, cat: 'セガ' },
    { name: 'セガ・サターン',    title: '据え置き', birth: 1994, death: 2004, cat: 'セガ' },
    { name: 'ドリームキャスト',  title: '据え置き', birth: 1998, death: 2008, cat: 'セガ' },

    /* ── ソニー ── */
    { name: 'PlayStation',       title: '据え置き', birth: 1994, death: 2004, cat: 'ソニー' },
    { name: 'PlayStation 2',     title: '据え置き', birth: 2000, death: 2010, cat: 'ソニー' },
    { name: 'PlayStation Portable (PSP)', title: '携帯機', birth: 2004, death: 2014, cat: 'ソニー' },
    { name: 'PlayStation 3',     title: '据え置き', birth: 2006, death: 2016, cat: 'ソニー' },
    { name: 'PlayStation Vita',  title: '携帯機',   birth: 2011, death: 2021, cat: 'ソニー' },
    { name: 'PlayStation 4',     title: '据え置き', birth: 2013, death: 2023, cat: 'ソニー' },
    { name: 'PlayStation 5',     title: '据え置き', birth: 2020, death: 2030, cat: 'ソニー' },

    /* ── バンダイ ── */
    { name: 'ピピン@マーク',           title: '据え置き', birth: 1995, death: 2005, cat: 'バンダイ' },
    { name: 'ワンダースワン',           title: '携帯機',   birth: 1999, death: 2009, cat: 'バンダイ' },
    { name: 'ワンダースワンカラー',     title: '携帯機',   birth: 2000, death: 2010, cat: 'バンダイ' },
    { name: 'スワンクリスタル',         title: '携帯機',   birth: 2002, death: 2012, cat: 'バンダイ' },

    /* ── マイクロソフト ── */
    { name: 'Xbox',              title: '据え置き', birth: 2002, death: 2012, cat: 'マイクロソフト' },
    { name: 'Xbox 360',          title: '据え置き', birth: 2005, death: 2015, cat: 'マイクロソフト' },
    { name: 'Xbox One',          title: '据え置き', birth: 2014, death: 2024, cat: 'マイクロソフト' },
    { name: 'Xbox Series X|S',   title: '据え置き', birth: 2020, death: 2030, cat: 'マイクロソフト' },

    /* ── SNK ── */
    { name: 'ネオジオ (AES)',          title: '据え置き', birth: 1990, death: 2000, cat: 'SNK' },
    { name: 'ネオジオCD',              title: '据え置き', birth: 1994, death: 2004, cat: 'SNK' },
    { name: 'ネオジオポケット',        title: '携帯機',   birth: 1998, death: 2008, cat: 'SNK' },
    { name: 'ネオジオポケットカラー',  title: '携帯機',   birth: 1999, death: 2009, cat: 'SNK' },

    /* ── アップル ── */
    { name: 'iPhone 3GS',            title: '携帯機',   birth: 2009, death: 2019, cat: 'アップル' },
    { name: 'iPod touch (第6世代)',   title: '携帯機',   birth: 2015, death: 2025, cat: 'アップル' },
    { name: 'iPhone X',              title: '携帯機',   birth: 2017, death: 2027, cat: 'アップル' },
    { name: 'iPhone 17',             title: '携帯機',   birth: 2025, death: 2035, cat: 'アップル' },
  ],
  events: [
    { year: 1977, name: 'Atari VCS発売（家庭用ゲーム機の幕開け）' },
    { year: 1983, name: 'ファミコン発売／アタリショック' },
    { year: 1989, name: 'ゲームボーイ発売' },
    { year: 1990, name: '16bit戦争（SFC vs MD）' },
    { year: 1994, name: '次世代機戦争（PS vs SS）' },
    { year: 1996, name: 'NINTENDO 64発売' },
    { year: 1998, name: 'ドリームキャスト発売' },
    { year: 2000, name: 'PlayStation 2発売' },
    { year: 2001, name: 'Xbox参入・GBA発売' },
    { year: 2004, name: 'DS・PSP発売（携帯機競争）' },
    { year: 2006, name: 'Wii・PS3発売' },
    { year: 2011, name: '3DS・Vita発売' },
    { year: 2013, name: 'PS4・Xbox One発売' },
    { year: 2017, name: 'Nintendo Switch発売' },
    { year: 2020, name: 'PS5・Xbox Series X|S発売' },
  ],
  rulers: [
    {
      label: '世代',
      entries: [
        { name: '第2世代',  start: 1976, end: 1983 },
        { name: '第3世代',  start: 1983, end: 1988 },
        { name: '第4世代',  start: 1988, end: 1994 },
        { name: '第5世代',  start: 1994, end: 2000 },
        { name: '第6世代',  start: 1998, end: 2006 },
        { name: '第7世代',  start: 2004, end: 2013 },
        { name: '第8世代',  start: 2011, end: 2020 },
        { name: '第9世代',  start: 2020, end: 2030 },
      ],
    },
  ],
};
