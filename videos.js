const videos = [
  {
    title: "全自動セキュリティVS最強のMOB軍団【からぴち×ドズル社】",
    type: "動画",
    members: ["のあ", "たっつん", "シヴァ", "なおきり"],
    series: "",
    collab: "ドズル社",
    videoId: "WnQshQiSvEQ",
    url: "https://www.youtube.com/watch?v=WnQshQiSvEQ"
  },
  {
    title: "『0メートル』から『3億8千万メートル』登るまで終わりません！【からぴち×ドズル社】",
    type: "動画",
    members: ["ゆあん", "えと", "ヒロ"],
    series: "",
    collab: "ドズル社",
    videoId: "_4MPgu1ZfPI&t",
    url: "https://www.youtube.com/watch?v=_4MPgu1ZfPI&t"
  },
  {
    title: "5つの力が失われた世界でエンドラ討伐！【からぴち×ドズル社】",
    type: "動画",
    members: ["じゃぱぱ", "どぬく", "うり"],
    series: "",
    collab: "ドズル社",
    videoId: "x_LDDuyhKRk",
    url: "https://www.youtube.com/watch?v=x_LDDuyhKRk"
  },
  {
    title: "チーム対抗ガチかくれんぼ！【からぴち×ドズル社】",
    type: "動画",
    members: ["どぬく", "ヒロ", "なおきり"],
    series: "",
    collab: "ドズル社",
    videoId: "U8TNdzAuyWA&t",
    url: "https://www.youtube.com/watch?v=U8TNdzAuyWA&t"
  },
  {
    title: "死んでも復活する鬼！？リアル鬼ごっこサバイバル35【ドズル社×からぴち】",
    type: "動画",
    members: [],
    series: "リアル鬼ごっこサバイバル",
    collab: "",
    videoId: "cd7777hX01Y",
    url: "https://www.youtube.com/watch?v=cd7777hX01Y"
  },
  {
    title: "白雪姫と小人になってエンドラ討伐【からぴち×ドズル社】",
    type: "動画",
    members: ["のあ", "えと", "うり"],
    series: "",
    collab: "ドズル社",
    videoId: "tkAu2KP6MCo",
    url: "https://www.youtube.com/watch?v=tkAu2KP6MCo"
  },
  {
    title: "❤️1個のハートで生き残れ❤️バトルロイヤル【マイクラリレー2025】",
    type: "動画",
    members: [],
    series: "マイクラリレー",
    collab: "",
    videoId: "KYmkNsYMg7E",
    url: "https://www.youtube.com/watch?v=KYmkNsYMg7E"
  },
  {
    title: "\"おかしな遊園地で\"大事件\"に巻き込まれました....【ドズル社×からぴち】\"",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "elbBHRv9KZI",
    url: "https://www.youtube.com/watch?v=elbBHRv9KZI"
  },
  {
    title: "『どこで』『だれが』『何をした』ランダムに決めたミッションクリアするまで終われません！【からぴち×ドズル社】",
    type: "動画",
    members: ["ゆあん", "シヴァ", "どぬく"],
    series: "",
    collab: "ドズル社",
    videoId: "sUafsxrB-jM",
    url: "https://www.youtube.com/watch?v=sUafsxrB-jM"
  },
  {
    title: "裏切りは誰！？殺人ピエロの“恐ろしい計画”がヤバすぎた【マインクラフト】【ドズル社×からぴち】",
    type: "動画",
    members: [],
    series: "殺人ピエロ",
    collab: "",
    videoId: "hI-oMaMHuBs",
    url: "https://www.youtube.com/watch?v=hI-oMaMHuBs"
  },
  {
    title: "体力と手持ちが共有の世界で全員合流するまで終われません！【からぴち×ドズル社】",
    type: "動画",
    members: ["じゃぱぱ", "のあ", "たっつん", "ゆあん"],
    series: "",
    collab: "ドズル社",
    videoId: "gKWQjokTB-I",
    url: "https://www.youtube.com/watch?v=gKWQjokTB-I"
  },
  {
    title: "【年越し配信】2026年の運を決める！？幸運の馬レース大会",
    type: "配信",
    members: [],
    series: "",
    collab: "",
    videoId: "yD83DCiMCfk",
    url: "https://www.youtube.com/watch?v=yD83DCiMCfk"
  },
  {
    title: "カラフルピーチ『Da-Cho』",
    type: "動画",
    members: [],
    series: "MV",
    collab: "",
    videoId: "G38by-QErF0",
    url: "https://www.youtube.com/watch?v=G38by-QErF0"
  },
  {
    title: "家っちを育てるマインクラフト",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "ycBbMnv9ng0",
    url: "https://www.youtube.com/watch?v=ycBbMnv9ng0"
  },
  {
    title: "カワイイ家っちを育ててエンダードラゴンを倒す！？【マインクラフト】",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "nKu9u6wxVdI",
    url: "https://www.youtube.com/watch?v=nKu9u6wxVdI"
  },
  {
    title: "ボケたら爆破するネタ会議【マインクラフト】",
    type: "動画",
    members: [],
    series: "茶番",
    collab: "",
    videoId: "b5-sJDlvwN4",
    url: "https://www.youtube.com/watch?v=b5-sJDlvwN4"
  },
  {
    title: "レインボータワー🌈の一番上に行けるのか！？タワーアタック&ディフェンス【マインクラフト】",
    type: "動画",
    members: [],
    series: "タワーアタック&ディフェンス",
    collab: "",
    videoId: "3A5kjZBj0OE",
    url: "https://www.youtube.com/watch?v=3A5kjZBj0OE"
  },
  {
    title: "運がすべてだ！一番くじで大当たりを当てるPVP【マインクラフト】",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "wTWiNX4uA_c",
    url: "https://www.youtube.com/watch?v=wTWiNX4uA_c"
  },
  {
    title: "とある学校のバレンタイン2【マインクラフト】",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "pmNNU3NXjsU",
    url: "https://www.youtube.com/watch?v=pmNNU3NXjsU"
  },
  {
    title: "カラフルピーチ『君が思う以上に好きなの！』",
    type: "動画",
    members: [],
    series: "MV",
    collab: "",
    videoId: "Km90jDUxKI0",
    url: "https://www.youtube.com/watch?v=Km90jDUxKI0"
  },
  {
    title: "世界を変えるガチャガチャ！？【マインクラフト】",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "adJZWuPRs3w",
    url: "https://www.youtube.com/watch?v=adJZWuPRs3w"
  },
  {
    title: "知らない人に５連勝するまで終われないPVP【マインクラフト】",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "KsPNOkWAagM",
    url: "https://www.youtube.com/watch?v=KsPNOkWAagM"
  },
  {
    title: "フォロワーを増やして対決するマインクラフト",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "LCc2N2TWud0",
    url: "https://www.youtube.com/watch?v=LCc2N2TWud0"
  },
  {
    title: "ヤバい！爆発する【マインクラフト】",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "u6eQt4r3Tzc",
    url: "https://www.youtube.com/watch?v=u6eQt4r3Tzc"
  },
  {
    title: "天使には気を付けろ！？リアル鬼ごっこサバイバル36【マインクラフト】",
    type: "動画",
    members: [],
    series: "リアル鬼ごっこサバイバル",
    collab: "",
    videoId: "jNZlzaisXEM",
    url: "https://www.youtube.com/watch?v=jNZlzaisXEM"
  },
  {
    title: "クレープ屋さんごっこ【マインクラフト】",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "gVAF7lmV0iA",
    url: "https://www.youtube.com/watch?v=gVAF7lmV0iA"
  },
  {
    title: "空を守りきれ！天空の覇者【マインクラフト】",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "5vMyuk2aRmw",
    url: "https://www.youtube.com/watch?v=5vMyuk2aRmw"
  },
  {
    title: "なおきりを怖がらせろ！【マインクラフト】",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "zYTqgJtH6c4",
    url: "https://www.youtube.com/watch?v=zYTqgJtH6c4"
  },
  {
    title: "【キャラ崩壊】パンツはいてない人は逮捕です！パンツ人狼【マインクラフト】",
    type: "動画",
    members: [],
    series: "人狼",
    collab: "",
    videoId: "Oy6VBTeTAbU",
    url: "https://www.youtube.com/watch?v=Oy6VBTeTAbU"
  },
  {
    title: "仲間の中に“ドラキュラ”がいます。【マインクラフト】",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "9CK9MmlXJY4",
    url: "https://www.youtube.com/watch?v=9CK9MmlXJY4"
  },
  {
    title: "怖すぎる！女の子が行く恐怖の初めてのおつかい【マインクラフト】",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "VLHTZ2ex0oA",
    url: "https://www.youtube.com/watch?v=VLHTZ2ex0oA"
  },
  {
    title: "\"【感動】1万人が選んだ\"好きなアイテム\"持ってくるまで終われま10【マインクラフト】\"",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "Tv_d3wlwGCo",
    url: "https://www.youtube.com/watch?v=Tv_d3wlwGCo"
  },
  {
    title: "虹のぼってみた【マインクラフト】",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "U1T9lgH9Wxg",
    url: "https://www.youtube.com/watch?v=U1T9lgH9Wxg"
  },
  {
    title: "絵文字だけで書かれたビンゴってできるの？",
    type: "動画",
    members: [],
    series: "BINGO",
    collab: "",
    videoId: "5S4NWMGYYog",
    url: "https://www.youtube.com/watch?v=5S4NWMGYYog"
  },
  {
    title: "一生終わらないババ抜きが面白すぎるwwwww【マインクラフト】",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "f8IsfmX8I68",
    url: "https://www.youtube.com/watch?v=f8IsfmX8I68"
  },
  {
    title: "ピッタリできないと一生終わりません",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "sKW9FaynhWs",
    url: "https://www.youtube.com/watch?v=sKW9FaynhWs"
  },
  {
    title: "うさぎ vs 人間",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "yYqjwdj-3as",
    url: "https://www.youtube.com/watch?v=yYqjwdj-3as"
  },
  {
    title: "【#すごいサバイバル】今日から新たな生活が始まる！？",
    type: "配信",
    members: ["じゃぱぱ"],
    series: "すごいサバイバル",
    collab: "",
    videoId: "Jct770cQLMA",
    url: "https://www.youtube.com/watch?v=Jct770cQLMA"
  },
  {
    title: "頑張って作ったタワー vs 真実の口！！攻城戦ベッドウォーズ",
    type: "動画",
    members: [],
    series: "攻城戦ベッドウォーズ",
    collab: "",
    videoId: "HT5ubDgwC0E",
    url: "https://www.youtube.com/watch?v=HT5ubDgwC0E"
  },
  {
    title: "【#すごいサバイバル】お家が欲しいよ！",
    type: "配信",
    members: ["じゃぱぱ"],
    series: "すごいサバイバル",
    collab: "",
    videoId: "qcyy6uONSBI",
    url: "https://www.youtube.com/watch?v=qcyy6uONSBI"
  },
  {
    title: "今の、見られてたよな…？能力者人狼【マインクラフト】",
    type: "動画",
    members: [],
    series: "人狼",
    collab: "",
    videoId: "ajhb_AcgZ9Q",
    url: "https://www.youtube.com/watch?v=ajhb_AcgZ9Q"
  },
  {
    title: "【#すごいサバイバル】鉱石掘って天空の家を作るぞ～！",
    type: "配信",
    members: ["じゃぱぱ"],
    series: "すごいサバイバル",
    collab: "",
    videoId: "dpx9_UBVxXs",
    url: "https://www.youtube.com/watch?v=dpx9_UBVxXs"
  },
  {
    title: "売上No.1は誰だ！？ホストクラブ対決【Peach Night】",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "ovCb86ZH-1g",
    url: "https://www.youtube.com/watch?v=ovCb86ZH-1g"
  },
  {
    title: "【#すごいサバイバル】急げ～！絶対に完成させるお家作り",
    type: "配信",
    members: ["じゃぱぱ"],
    series: "すごいサバイバル",
    collab: "",
    videoId: "tr-WbNTs00M",
    url: "https://www.youtube.com/watch?v=tr-WbNTs00M"
  },
  {
    title: "見破れるか？モンスター心理戦",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "Lc_qben6yLQ",
    url: "https://www.youtube.com/watch?v=Lc_qben6yLQ"
  },
  {
    title: "【#すごいサバイバル】エンドラ討伐＆庭と内装作る",
    type: "配信",
    members: ["じゃぱぱ"],
    series: "すごいサバイバル",
    collab: "",
    videoId: "73j56AuhQzk",
    url: "https://www.youtube.com/watch?v=73j56AuhQzk"
  },
  {
    title: "ポケモンの世界で建築バトルしてみた！",
    type: "動画",
    members: ["のあ", "たっつん", "シヴァ", "どぬく"],
    series: "",
    collab: "ポケモン公式",
    videoId: "sM0mNNVrmUY",
    url: "https://www.youtube.com/watch?v=sM0mNNVrmUY"
  },
  {
    title: "【#すごいサバイバル】最終日なのに家できてないんだが",
    type: "配信",
    members: ["じゃぱぱ"],
    series: "すごいサバイバル",
    collab: "",
    videoId: "ACDXLaSskyc",
    url: "https://www.youtube.com/watch?v=ACDXLaSskyc"
  },
  {
    title: "嘘つきなBINGOが訳わからなすぎた",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "0Vrq5jNLMl0",
    url: "https://www.youtube.com/watch?v=0Vrq5jNLMl0"
  },
  {
    title: "おかしな宇宙人だらけの人狼ゲーム【マインクラフト】",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "d0_AyOGH7OE",
    url: "https://www.youtube.com/watch?v=d0_AyOGH7OE"
  },
  {
    title: "カメラを向けられたらポーズを決めろ！【マインクラフト】",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "X62N70-CNbA",
    url: "https://www.youtube.com/watch?v=X62N70-CNbA"
  },
  {
    title: "寝起きすぐの頭脳派 vs ぐっすり寝たおバカの勝負トントン説",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "OQFhJY29ueo",
    url: "https://www.youtube.com/watch?v=OQFhJY29ueo"
  },
  {
    title: "1位は誰だ？からぴちランキング展覧会",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "JvxqWT2fkWY",
    url: "https://www.youtube.com/watch?v=JvxqWT2fkWY"
  },
  {
    title: "【スペシャル】からぴちのボツ＆未公開動画いっぱい出しちゃいます！【カラフルピーチ】",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "h3345OzeLSk",
    url: "https://www.youtube.com/watch?v=h3345OzeLSk"
  },
  {
    title: "【春の運動会】赤組vs白組の全てをかけた戦いが開幕！！最初から本気すぎる激闘に！？《①》",
    type: "動画",
    members: [],
    series: "春の運動会",
    collab: "",
    videoId: "UmfTQFlJkpo",
    url: "https://www.youtube.com/watch?v=UmfTQFlJkpo"
  },
  {
    title: "【春の運動会】団長だーれ？白熱の当てっこバトル開幕！！＆〇〇騎馬戦が面白すぎたwww《②》",
    type: "動画",
    members: [],
    series: "春の運動会",
    collab: "",
    videoId: "ESJwFw7CxbQ",
    url: "https://www.youtube.com/watch?v=ESJwFw7CxbQ"
  },
  {
    title: "【春の運動会】落ちたら死ぬ？命懸けの縄跳びが怖すぎた！《③》",
    type: "動画",
    members: [],
    series: "春の運動会",
    collab: "",
    videoId: "Gy00sh9c1cA",
    url: "https://www.youtube.com/watch?v=Gy00sh9c1cA"
  },
  {
    title: "【春の運動会】最強の頭脳は誰だ？ポイント争奪戦《④》",
    type: "動画",
    members: [],
    series: "春の運動会",
    collab: "",
    videoId: "TzdVv4mkfYo",
    url: "https://www.youtube.com/watch?v=TzdVv4mkfYo"
  },
  {
    title: "絶対に見逃さないでください",
    type: "動画",
    members: [],
    series: "",
    collab: "",
    videoId: "7G3bF6Twz2M",
    url: "https://www.youtube.com/watch?v=7G3bF6Twz2M"
  },
  {
    title: "【春の運動会】何が起きるかわからない、波乱のクライマックスへ《⑤》",
    type: "動画",
    members: [],
    series: "春の運動会",
    collab: "",
    videoId: "uoIJzC9zyyw",
    url: "https://www.youtube.com/watch?v=uoIJzC9zyyw"
  },
  {
    title: "怖すぎるハンターから逃げろ！マイクラバーサス【じゃぱぱ視点】",
    type: "配信",
    members: [],
    series: "",
    collab: "",
    videoId: "GGXmcgKpJ3A",
    url: "https://www.youtube.com/watch?v=GGXmcgKpJ3A"
  },
  {
    title: "ゆびきりレイン / カラフルピーチ(Official Music Video)",
    type: "動画",
    members: [],
    series: "MV",
    collab: "",
    videoId: "XBscJGQ-MvI",
    url: "https://www.youtube.com/watch?v=XBscJGQ-MvI"
  },
  {
    title: "楽園には気をつけろ！？リアル鬼ごっこサバイバル37【マインクラフト】",
    type: "動画",
    members: [],
    series: "リアル鬼ごっこサバイバル",
    collab: "",
    videoId: "iH1ghiTNHsQ",
    url: "https://www.youtube.com/watch?v=iH1ghiTNHsQ"
  },
  {
    title: "【鬼畜】キモすぎる「くち」に食われる世界でエンドラ討伐できるのか！？【からぴちマイクラ修行】",
    type: "動画",
    members: [],
    series: "からぴちマイクラ修行",
    collab: "",
    videoId: "7kOKVFNoWwQ",
    url: "https://www.youtube.com/watch?v=7kOKVFNoWwQ"
  },
  {
    title: "怪しい会社に入社しました。【スパイ大作戦】",
    type: "動画",
    members: [],
    series: "スパイ大作戦",
    collab: "",
    videoId: "SH20RpKuNH0",
    url: "https://www.youtube.com/watch?v=SH20RpKuNH0"
  },
  {
    title: "【 #いちごマイクラ 】目指せ億万長者！1億円行くぞ🔥 11日目",
    type: "配信",
    members: ["じゃぱぱ", "たっつん", "シヴァ", "どぬく", "うり"],
    series: "いちごマイクラ",
    collab: "STPR 他",
    videoId: "Ne_tJ98rXmk",
    url: "https://www.youtube.com/watch?v=Ne_tJ98rXmk"
  },
    {
    title: "死んでも復活する鬼！？リアル鬼ごっこサバイバル35【ドズル社×からぴち】",
    type: "動画",
    members: ["じゃぱぱ|たっつん|ゆあん|シヴァ|もふ"],
    series: "リアル鬼ごっこサバイバル",
    collab: "ドズル社",
    videoId: "cd7777hX01Y",
    url: "https://www.youtube.com/watch?v=cd7777hX01Y"
  }
 
];
