# 歴史タイムライン

歴史上の人物の生没年・役職期間をインタラクティブに可視化する D3.js 製 Web アプリケーションです。

## 機能

- **複数データセット対応** — 歴史・漫画・ゲームなど多彩な 15 データセットを収録
- **URL ハッシュによるデータセット選択** — `index.html#kamakura` のように URL で直接データセットを指定可能
- **ズーム・パン** — マウスホイールやドラッグで時代軸を自由に拡縮
- **横軸のみ拡大縮小** — `Ctrl + ホイール` または `Shift + 左右矢印キー` で年軸だけを伸縮
- **役職期間オーバーレイ** — 将軍・執権・天皇など在任期間を色付きバーで表示
- **年齢パネル** — 任意の年をクリックすると、その時点での各人物の年齢を右パネルに表示
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
| `Esc` | パネルを閉じる |

## 収録データセット

| キー | タイトル | 期間 | 備考 |
|---|---|---|---|
| `kamakura` | 鎌倉時代 | 1138〜1358 年 | |
| `sengoku` | 戦国時代 | 1456〜1636 年 | |
| `bakumatsu` | 幕末・明治維新 | 1809〜1922 年 | |
| `nigejozu` | 逃げ上手の若君 | 1288〜1392 年 | 漫画 |
| `taiheiki` | 太平記 | 1270〜1400 年 | |
| `reiri` | レイリ | 1513〜1621 年 | 漫画 |
| `ooku` | 大奥 | 1579〜1883 年 | 漫画 |
| `fuunji` | 風雲児たち 蘭学革命篇 | 1723〜1866 年 | 漫画 |
| `silence` | 沈黙 | 1580〜1685 年 | 小説 |
| `sangokushi` | 三国志 | 135〜252 年 | |
| `historie` | ヒストリエ | 前 382〜前 260 年頃 | 漫画 |
| `ad_astra` | アド・アストラ ―スキピオとハンニバル― | 前 285〜前 145 年 | 漫画 |
| `gundam_uc1` | 機動戦士ガンダム（一年戦争） | UC 0014〜UC 0094 年 | 漫画・アニメ（全員架空） |
| `PrimeMinister_Ja` | 日本の総理大臣 | 1885〜2026 年 | 党別カテゴリ |
| `games` | ゲーム機の歴史 | 1977〜2030 年 | |

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
    ├── nigejozu.js
    ├── taiheiki.js
    ├── reiri.js
    ├── ooku.js
    ├── fuunji.js
    ├── silence.js
    ├── sangokushi.js
    ├── historie.js
    ├── ad_astra.js
    ├── gundam_uc1.js
    ├── PrimeMinister_Ja.js
    └── games.js
```

## 使い方

`index.html` をブラウザで直接開くだけで動作します（サーバー不要）。

データセットは URL ハッシュで直接指定できます。例：

```
index.html#kamakura
index.html#gundam_uc1
index.html#PrimeMinister_Ja
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
