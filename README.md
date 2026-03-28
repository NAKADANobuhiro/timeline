# 歴史タイムライン

歴史上の人物の生没年・役職期間をインタラクティブに可視化する D3.js 製 Web アプリケーションです。

## 機能

- **複数データセット対応** — 鎌倉時代、戦国時代、幕末など 9 つのデータセットを収録
- **ズーム・パン** — マウスホイールやドラッグで時代軸を自由に拡縮
- **役職期間オーバーレイ** — 将軍・執権・天皇など在任期間を色付きバーで表示
- **年齢パネル** — 任意の年をクリックすると、その時点での各人物の年齢を右パネルに表示
- **イベントスナップ** — イベントラベルのクリックで正確なイベント年を選択
- **カテゴリフィルター** — 家・勢力別に人物を絞り込み
- **並び替え** — 生年順 / カテゴリ別を切り替え
- **ダーク / ライトモード** — テーマ切り替え対応

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
    ├── kamakura.js     # 鎌倉時代（1138〜1358年）
    ├── sengoku.js      # 戦国時代（1456〜1636年）
    ├── bakumatsu.js    # 幕末・明治維新（1809〜1922年）
    ├── historie.js     # ヒストリエ（前382〜前260年頃）
    ├── sangokushi.js   # 三国志（135〜252年）
    ├── nigejozu.js     # 逃げ上手の若君（1288〜1392年）
    ├── reiri.js        # レイリ（1513〜1621年）
    ├── ooku.js         # 大奥（1579〜1883年）
    └── fuunji.js       # 風雲児たち（1723〜1866年）
```

## 使い方

`index.html` をブラウザで直接開くだけで動作します（サーバー不要）。

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

  // ヘッダーに表示する王朝・在位ラベル（任意）
  empLabel: "天皇",         // emperors 行のラベル（省略時 "天皇"）
  retLabel: "南朝",         // retired 行のラベル（省略時 "上皇"）
  emperors: [
    { name: "後鳥羽天皇", start: 1185, end: 1197 },
  ],
  retired: [],

  // 紀元前データセットの場合
  bce: true,
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
