# 歴史タイムライン

歴史上の人物の生没年・役職期間をインタラクティブに可視化する D3.js 製 Web アプリケーションです。

## 機能

- **複数データセット対応** — 歴史・漫画・ゲームなど多彩な 23 データセットを収録
- **URL ハッシュによるデータセット選択** — `index.html#kamakura` のように URL で直接データセットを指定可能
- **ズーム・パン** — マウスホイールやドラッグで時代軸を自由に拡縮
- **横軸のみ拡大縮小** — `Ctrl + ホイール` または `Shift + 左右矢印キー` で年軸だけを伸縮
- **役職期間オーバーレイ** — 将軍・執権・天皇など在任期間を色付きバーで表示
- **年齢パネル** — 任意の年をクリックすると、その時点での各人物の年齢を右パネルに表示
- **フォーカスモード** — `Space` キー押下中、または `F` キー / 🎯ボタンのトグルで、選択年に生存している人物のみに絞り込み表示
- **イベントスナップ** — イベントラベルのクリックで正確なイベント年を選択
- **カテゴリフィルター** — 家・勢力別に人物を絞り込み
- **並び替え** — 生年順 / カテゴリ別を切り替え
- **ダーク / ライトモード** — テーマ切り替え対応

### キーボードショートカット

| キー | 動作 |
|---|---|
| `+` / `=` | 拡大 |
| `-` | 縮小 |
| `0` | ズームリセット |
| `Shift + →` | 横軸のみ拡大 |
| `Shift + ←` | 横軸のみ縮小 |
| `←` / `→` | 選択年を 1 年移動（画面端で自動スクロール） |
| `↑` / `↓` | 縦スクロール |
| `Space` | 押している間、フォーカスモード（選択年に生存している人物のみ表示） |
| `F` | フォーカスモードのトグル切り替え（持続的に絞り込み） |
| `Esc` | パネルを閉じる |

## 収録データセット

スクリプト読み込み順（`index.html`）と同じ順で記載。「キー」は URL ハッシュ（`index.html#<キー>`）に使う `DATASETS` のキー名。

| キー | タイトル | 期間 | 備考 |
|---|---|---|---|
| `kamakura` | 鎌倉時代 | 1138〜1358 年 | |
| `sengoku` | 戦国時代 | 1456〜1636 年 | |
| `bakumatsu` | 幕末・明治維新 | 1809〜1922 年 | |
| `historie` | ヒストリエ | 前 382〜前 260 年頃 | 漫画 |
| `sangokushi` | 三国志 | 135〜252 年 | |
| `nigejozu` | 逃げ上手の若君 | 1288〜1392 年 | 漫画 |
| `reiri` | レイリ | 1513〜1621 年 | 漫画 |
| `silence` | 沈黙 | 1580〜1685 年 | 小説 |
| `ooku` | 大奥 | 1579〜1883 年 | 漫画 |
| `fuunji` | 風雲児たち 蘭学革命篇 | 1723〜1866 年 | 漫画 |
| `ad_astra` | アド・アストラ ―スキピオとハンニバル― | 前 285〜前 145 年 | 漫画 |
| `taiheiki` | 太平記 | 1270〜1400 年 | |
| `sori` | 日本の総理大臣 | 1885〜2026 年 | 党別カテゴリ。ファイルは `PrimeMinister_Ja.js`、キーは `sori` |
| `games` | ゲーム機の歴史 | 1977〜2030 年 | |
| `kokusan_rpg` | 国産RPGクロニクル | 1974 年 9 月〜2027 年 10 月 | 書籍・ゲーム史（月単位） |
| `kokusan_rpg_oshii` | 国産RPGクロニクル（押井守インタビュー） | 1951 年 8 月〜2078 年 11 月 | 書籍・押井守章（月単位） |
| `gundam_uc1` | 機動戦士ガンダム（一年戦争） | UC 0014〜UC 0094 年 | 漫画・アニメ（全員架空） |
| `radio_saikyo` | ラジオ最強説 | 1998〜2026 年 | TBS ラジオ番組 |
| `kddi` | KDDI 合併・統合の歴史 | 1953〜2050 年 | 企業史 |
| `blackberry` | 映画 BlackBerry | 1955〜2025 年 | 映画 |
| `taiga` | 大河への道 | 1745〜1821 年 | 映画 |
| `tenmaku` | 天幕のジャードゥーガル | 1162〜1294 年 | 漫画（モンゴル帝国） |
| `angolmois` | アンゴルモア 元寇合戦記 | 1178〜1314 年 | 漫画（元寇・対馬編／博多編）。ファイルは `Angolmois.js` |

## ファイル構成

```
timeline/
├── index.html          # エントリーポイント
├── css/
│   └── timeline.css    # スタイル
├── js/
│   ├── data.js         # DATASETS グローバル変数の宣言（const DATASETS = {}）
│   └── timeline.js     # D3.js メインロジック
└── data/               # データセットファイル（1ファイル = 1データセット）
    ├── kamakura.js
    ├── sengoku.js
    ├── bakumatsu.js
    ├── historie.js
    ├── sangokushi.js
    ├── nigejozu.js
    ├── reiri.js
    ├── silence.js
    ├── ooku.js
    ├── fuunji.js
    ├── ad_astra.js
    ├── taiheiki.js
    ├── PrimeMinister_Ja.js   # DATASETS.sori を定義
    ├── games.js
    ├── kokusan_rpg.js
    ├── kokusan_rpg_oshii.js
    ├── gundam_uc1.js
    ├── radio_saikyo.js
    ├── kddi.js
    ├── blackberry.js
    ├── taiga.js
    ├── tenmaku.js
    └── Angolmois.js          # DATASETS.angolmois を定義
```

## 使い方

`index.html` をブラウザで直接開くだけで動作します（サーバー不要）。

データセットは URL ハッシュで直接指定できます。例：

```
index.html#kamakura
index.html#gundam_uc1
index.html#sori
```

サンプルは https://timeline.ironsite.net/ で公開しています。

## データセットの追加方法

### 1. データファイルを作成する

`data/` フォルダに新しい `.js` ファイルを作成し、以下の形式で記述します。

```js
DATASETS.mydata = {
  name: "表示名",
  period: "〇〇〜〇〇年",

  // カテゴリと色の定義
  categories: {
    "カテゴリA": "#e74c3c",
    "カテゴリB": "#3498db",
  },

  // 人物リスト
  persons: [
    {
      name: "人物名",
      title: "肩書き",
      birth: 1200,          // 生年
      death: 1268,          // 没年
      cat: "カテゴリA",     // categories のキーと一致させる
      birthUncertain: true, // 生年不詳の場合（任意）
      deathUncertain: true, // 没年不詳の場合（任意）
      fictional: true,      // 架空の人物の場合（任意）

      // 役職期間（単一）
      serve: { role: "将軍", start: 1226, end: 1244 },

      // 役職期間（複数）
      serve: [
        { role: "天皇", start: 1185, end: 1197 },
        { role: "上皇", start: 1198, end: 1221 },
      ],
    },
  ],

  // イベントリスト
  events: [
    { year: 1221, name: "承久の乱" },
  ],

  // ヘッダーに表示する統治者ラベル（任意）
  rulers: [
    {
      label: "将軍",
      entries: [
        { name: "源頼朝", start: 1192, end: 1199 },
      ],
    },
  ],

  // 紀元前データセットの場合
  bce: true,

  // 全員架空の場合（データセット全体にフラグ）
  fictional: true,
};
```

### 2. index.html に読み込みを追加する

```html
<script src="data/mydata.js"></script>
```

`js/data.js` の `<script>` タグと `js/timeline.js` の `<script>` タグの間に追加してください。

## 技術スタック

- [D3.js v7.9.0](https://d3js.org/) — SVG 描画・ズーム・スケール
- バニラ HTML / CSS / JavaScript（ビルドツール不要）
