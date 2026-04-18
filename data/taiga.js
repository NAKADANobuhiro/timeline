DATASETS.taiga = {
  name: '大河への道',
  period: '1745〜1821年',
  empLabel: '将軍',
  categories: {
    '伊能忠敬':     '#c0392b',
    '弟子・測量隊': '#2471a3',
    '幕府・権力者': '#6c3483',
    '女性・支援者': '#cb4335',
  },
  persons: [

    /* ── 伊能忠敬 ── */
    {
      name:  '伊能忠敬',
      title: '日本地図の父・全国測量家 ／ 親里嘉次（影武者）',
      birth: 1745, death: 1818,
      cat:   '伊能忠敬',
      serve: [
        { role: '日本全国測量（第1〜10次）', start: 1800, end: 1816 },
      ],
    },

    /* ── 弟子・測量隊 ── */
    {
      name:  '高橋至時（未登場）',
      title: '天文学者・伊能忠敬の師・高橋景保の父',
      birth: 1764, death: 1804,
      cat:   '弟子・測量隊',
      serve: [
        { role: '幕府天文方', start: 1795, end: 1804 },
      ],
    },
    {
      name:  '間重富（未登場）',
      title: '天文学者・高橋至時とともに伊能忠敬を指導',
      birth: 1756, death: 1816,
      cat:   '弟子・測量隊',
      serve: [
        { role: '寛政の改暦・忠敬の指導', start: 1795, end: 1804 },
      ],
    },
    {
      name:  '渋川景佑（未登場）',
      title: '天文学者・高橋至時の次男・高橋景保の弟・地図完成に貢献',
      birth: 1787, death: 1856,
      cat:   '弟子・測量隊',
      serve: [
        { role: '幕府天文方・測量参加・地図製作', start: 1805, end: 1821 },
      ],
    },
    {
      name:  '高橋景保',
      title: '天文学者・忠敬の地図を守る黒幕 ／ 中井貴一',
      birth: 1785, death: 1829,
      cat:   '弟子・測量隊',
      serve: [
        { role: '天文方・隠密作戦の指揮', start: 1818, end: 1821 },
      ],
    },
    {
      name:  '綿貫善右衛門（架空）',
      title: '忠敬の筆頭弟子・地図製作統括 ／ 平田満',
      birth: 1770, death: 1835,
      birthUncertain: true, deathUncertain: true,
      cat:   '弟子・測量隊',
      serve: [
        { role: '地図製作 統括', start: 1818, end: 1821 },
      ],
    },
    {
      name:  '又吉（架空）',
      title: '忠敬の弟子・測量隊員 ／ 松山ケンイチ',
      birth: 1778, death: 1840,
      birthUncertain: true, deathUncertain: true,
      cat:   '弟子・測量隊',
      serve: [
        { role: '測量・地図製作', start: 1800, end: 1821 },
      ],
    },
    {
      name:  '修武格之進（架空）',
      title: '忠敬の弟子・測量隊員 ／ 和田正人',
      birth: 1778, death: 1840,
      birthUncertain: true, deathUncertain: true,
      cat:   '弟子・測量隊',
      serve: [
        { role: '測量・地図製作', start: 1800, end: 1821 },
      ],
    },
    {
      name:  '吉之助（架空）',
      title: '忠敬の弟子・測量隊員 ／ 田中美央',
      birth: 1778, death: 1840,
      birthUncertain: true, deathUncertain: true,
      cat:   '弟子・測量隊',
      serve: [
        { role: '測量・地図製作', start: 1800, end: 1821 },
      ],
    },
    {
      name:  '友蔵（架空）',
      title: '忠敬の弟子・測量隊員 ／ 溝口琢矢',
      birth: 1778, death: 1840,
      birthUncertain: true, deathUncertain: true,
      cat:   '弟子・測量隊',
      serve: [
        { role: '測量・地図製作', start: 1800, end: 1821 },
      ],
    },
    {
      name:  '梅安（架空）',
      title: '忠敬の弟子・測量隊員 ／ 立川志の輔',
      birth: 1770, death: 1835,
      birthUncertain: true, deathUncertain: true,
      cat:   '弟子・測量隊',
      serve: [
        { role: '測量・地図製作', start: 1800, end: 1821 },
      ],
    },
    {
      name:  '神田三郎（架空）',
      title: '幕府の命による伊能忠敬調査役 ／ 西村まさ彦',
      birth: 1770, death: 1835,
      birthUncertain: true, deathUncertain: true,
      cat:   '幕府・権力者',
      serve: [
        { role: '伊能忠敬 調査役', start: 1818, end: 1821 },
      ],
    },

    /* ── 女性・支援者 ── */
    {
      name:  'エイ(大崎栄)',
      title: '伊能忠敬の前妻・漢詩人 ／ 北川景子',
      birth: 1763, death: 1818,
      birthUncertain: true,
      cat:   '女性・支援者',
    },
    {
      name:  'トヨ（架空）',
      title: '伊能家の下女・情報管理担当 ／ 岸井ゆきの',
      birth: 1790, death: 1850,
      birthUncertain: true, deathUncertain: true,
      cat:   '女性・支援者',
    },

    /* ── 幕府・権力者 ── */
    {
      name:  '徳川家斉',
      title: '第11代将軍・地図を最終受理する権力者 ／ 草刈正雄',
      birth: 1773, death: 1841,
      cat:   '幕府・権力者',
      serve: [
        { role: '十一代将軍', start: 1787, end: 1837 },
      ],
    },
    {
      name:  '佐伯宗尚（架空）',
      title: '勘定奉行・神田三郎に伊能忠敬調査を命じた人物 ／ 本井博之',
      birth: 1768, death: 1830,
      birthUncertain: true, deathUncertain: true,
      cat:   '幕府・権力者',
      serve: [
        { role: '勘定奉行', start: 1815, end: 1825 },
      ],
    },
    {
      name:  '源空寺和尚（架空）',
      title: '寺の住職・忠敬の死を知る人物 ／ 橋爪功',
      birth: 1748, death: 1825,
      birthUncertain: true, deathUncertain: true,
      cat:   '幕府・権力者',
    },

  ],

  events: [
    { year: 1795, name: '伊能忠敬が高橋至時に師事' },
    { year: 1800, name: '第1次測量出発（蝦夷地）' },
    { year: 1804, name: '師・高橋至時 没' },
    { year: 1810, name: '第7次測量（近畿・中国）' },
    { year: 1816, name: '第10次測量 完了' },
    { year: 1818, name: '伊能忠敬 逝去（73歳）' },
    { year: 1818, name: '弟子たちの「隠密作戦」始動' },
    { year: 1821, name: '大日本沿海輿地全図 完成・将軍献上' },
    { year: 1828, name: 'シーボルト事件(伊能図持ち出し未遂)' },
  ],

  emperors: [
    { name: '徳川家斉（11代将軍）', start: 1787, end: 1837 },
  ],
};