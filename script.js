const psychologyData = [
  { name: "パヴロフ", keyword: "古典的条件づけ（延滞・痕跡・同時・逆行）", desc: "条件づけの提示タイミングによる分類。延滞＞痕跡＞同時＞逆行の順で形成されやすい。" },
  { name: "レスコーラ", keyword: "レスコーラ・ワグナー・モデル", desc: "条件づけの連合強度の変化を数式化。予測誤差（驚き）によって学習が進むとする理論。" },
  { name: "マッキントッシュ", keyword: "注意理論", desc: "予測に役立つ刺激にはより多くの注意が向けられ、役立たない刺激への注意は減少するという理論。" },
  { name: "ソーンダイク", keyword: "オペラント条件づけの基礎 / KR・KP", desc: "問題箱を用いた試行錯誤説。結果の知識（KR：Knowledge of Results）やパフォーマンスの知識（KP）の基礎。" },
  { name: "スキナー", keyword: "オペラント条件づけ（実験装置の発展）", desc: "ソーンダイクの実験より、動物が比較的「自由に」自発的な反応を繰り返せるスキナー箱を開発した。" },
  { name: "ケーラー", keyword: "洞察学習", desc: "チンパンジーの実験。見通し（インサイト）によって、状況の構成要素が再体制化されて一気に問題解決すること。" },
  { name: "トールマン", keyword: "潜在学習 / 認知地図 / 新行動主義", desc: "報酬がなくても迷路の形（認知地図）は学習されており、報酬が出た途端にそれが行動として現れる（潜在学習）とした。" },
  { name: "バンデューラ", keyword: "観察学習", desc: "他者の行動とその結果を観察するだけで、直接報酬を得なくても学習が成立するという理論。" },
  { name: "ピアジェ", keyword: "スキーマ", desc: "環境を理解し適応するための「認知の枠組み」。同化と調節を繰り返して発達する。" },
  { name: "マウラー", keyword: "即時強化", desc: "回避学習を古典的条件づけ（恐怖）とオペラント条件づけ（恐怖減少による強化）の2要因で説明、即時的な強化を重視。" },
  { name: "ハル", keyword: "動因低減説（欲求低減説）", desc: "生物的な動因（ドライブ）や欲求が減少・低減することが、行動の強化因子になるとした理論。" },
  { name: "メール", keyword: "場面転移性の原理", desc: "ある場面で強化力を持つ刺激は、他の異なる場面（状況）に転移しても同じように強化力を持つという原理。" },
  { name: "ブレマック", keyword: "生起確率が高いものは低いものを強化する理論", desc: "「生起確率の高い行動（頻繁に行う行動）」は、「生起確率の低い行動」を強化することができるという理論。" },
  { name: "ティンバーレイク＆アリソン", keyword: "反応遮断化理論", desc: "ある行動が自由にできないよう制限（遮断）されると、その行動自体が本来の確率に関わらず強化子になるという理論。" },
  { name: "ハーロウ", keyword: "同時弁別課題 / 逆転学習", desc: "複数の課題を解くうちに「解き方のコツ」を獲得する。同時弁別や、正誤が入れ替わる逆転学習で検証。代理母実験も有名。" },
  { name: "ハーンスタイン", keyword: "継時弁別課題", desc: "刺激を順番に提示する継時弁別。選択行動の割合は、得られる報酬の割合と一致するという「マッチングの法則」を提唱。" },
  { name: "テラス", keyword: "無誤弁別課題 / フェイディング", desc: "エラー（誤反応）をさせずに弁別を学習させる方法。ヒントの刺激を徐々に薄くしていく（フェイディング）技法を用いた。" },
  { name: "ワトソン", keyword: "S-R理論 / 嫌悪条件づけ", desc: "刺激（S）と反応（R）の結合を重視。アルバート坊やの実験で、恐怖という嫌悪感情も条件づけられることを示した。" },
  { name: "ウォルピ", keyword: "系統的脱感作法", desc: "逆制約を利用し、不安階層表に基づいて恐怖や不安を段階的に消去していく行動療法。" },
  { name: "アダムス", keyword: "言語-運動期 / 運動期", desc: "運動学習の閉ループ理論。正しい運動の基準となる「知覚痕跡」と、運動を開始する「記憶痕跡」によってフィードバック制御を行う。" },
  { name: "シュミット", keyword: "スキーマ理論", desc: "アダムスの理論を発展させ、個別の運動記憶ではなく、一連の運動パターンを抽象化した「一般化スキーマ」を提唱。" },
  { name: "ブルーナー", keyword: "至高の研究 / 発見学習", desc: "概念形成のプロセスを認知科学的に分析（『思考の研究』）。学習者が自ら法則を発見する「発見学習」も提唱。" },
  { name: "ミラー", keyword: "マジカルナンバー", desc: "人間の短期記憶（ワーキングメモリ）の容量には限界があり、一度に保持できる情報（チャンク）は 7±2 個であるとした。" },
  { name: "ナイサー", keyword: "生態学的妥当性 / 日常認知", desc: "認知心理学の提唱者。実験室の中だけでなく、現実の生活環境（日常認知）に即した「生態学的妥当性」の重要性を訴えた。" },
  { name: "チョムスキー", keyword: "生成文法理論", desc: "人間は生まれつき言語を獲得するための普遍文法（LAD）を備えており、無限の文章を生成できるとした理論。" },
  { name: "サイモン", keyword: "組織論 / 人工知能", desc: "人間の意思決定は完全に合理的ではなく「限定された合理性」を持つとした。初期の人工知能研究でも有名。" },
  { name: "ハデリー", keyword: "ワーキングメモリ", desc: "短期記憶を単なる保管庫ではなく、中央実行系、音韻ループ、視空間スケッチパッド、エピソードバッファからなるシステムとした。" },
  { name: "ダルヴィング", keyword: "エピソード記憶 / 意味記憶 / 手続き記憶", desc: "個人的な思い出である「エピソード記憶」、一般的な知識である「意味記憶」、体で覚える「手続き記憶」に分類した。" },
  { name: "スクワイヤ", keyword: "宣言的記憶 / 非宣言的記憶", desc: "記憶を、言葉で表現できる「宣言的記憶（エピソード・意味）」と、言葉にできない「非宣言的記憶（手続きなど）」に大別した。" },
  { name: "バウアー", keyword: "気分一致効果 / 感情ネットワークモデル", desc: "楽しい時には楽しい記憶が思い出しやすくなる現象。記憶と感情は脳内でネットワークとして結びついているとした。" },
  { name: "ピリシン", keyword: "命題説", desc: "頭の中のイメージ（心的イメージ）の本質は、視覚的な絵のようなものではなく、言語に近い「抽象的な論理命題」であるとする説。" },
  { name: "コスリン", keyword: "アナログ説", desc: "頭の中のイメージは、実際の視覚的な絵に近い「2次元の空間的配置（アナログデータ）」として表現されているとする説。" },
  { name: "ローレンツ", keyword: "刷込み / ベビースキーマ", desc: "鳥類の離巣性に見られる刷込みや、赤ちゃん特有の身体的特徴が大人に庇護欲を起こさせる仕組みの提唱。" },
  { name: "カーネマン", keyword: "二重過程モデル / 容量モデル / 知覚的負荷理論", desc: "直感（システム1）と熟考（システム2）の二重過程モデルや、注意の資源量に限界があるとする容量モデルを提唱。" },
  { name: "ウェイソン", keyword: "帰納的推論 / 確証バイアス", desc: "人間は自分の仮説を証明する証拠ばかりを集めてしまい、反証を探そうとしない傾向（確証バイアス）があることを示した。" },
  { name: "ポズナー", keyword: "視覚的注意", desc: "注意を「心のスポットライト」に例え、事前に手がかりが出るとその場所への視覚的処理が速くなる実験を行った。" }
];
let currentMode = 'nameToConcept';
let currentQuestionIndex = 0;
let currentQuestion = null;
let shuffledData = [];

function shuffleArray(array) {
    return array.slice().sort(() => Math.random() - 0.5);
}

function initQuiz() {
    shuffledData = shuffleArray(psychologyData);
    currentQuestionIndex = 0;
    showQuestion();
}

function changeMode(mode) {
    if (currentMode === mode) return;
    currentMode = mode;
    
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    if (mode === 'nameToConcept') {
        document.querySelector('.mode-btn:nth-child(1)').classList.add('active');
    } else {
        document.querySelector('.mode-btn:nth-child(2)').classList.add('active');
    }
    
    initQuiz();
}

function showQuestion() {
    document.getElementById('feedback-box').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
    
    currentQuestion = shuffledData[currentQuestionIndex];
    document.getElementById('progress').innerText = `${currentQuestionIndex + 1} / ${shuffledData.length}`;

    const header = document.getElementById('q-header');
    const text = document.getElementById('q-text');
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    let correctAnswer = '';
    let wrongOptionsPool = [];

    if (currentMode === 'nameToConcept') {
        header.innerText = 'この人名に結びつく固有名詞・キーワードは？';
        text.innerText = currentQuestion.name;
        correctAnswer = currentQuestion.keyword;
        wrongOptionsPool = psychologyData.filter(d => d.name !== currentQuestion.name).map(d => d.keyword);
    } else {
        header.innerText = 'この固有名詞・説明に該当する人物は？';
        text.innerText = `${currentQuestion.keyword}\n\n【説明】\n${currentQuestion.desc}`;
        correctAnswer = currentQuestion.name;
        wrongOptionsPool = psychologyData.filter(d => d.name !== currentQuestion.name).map(d => d.name);
    }

    wrongOptionsPool = [...new Set(wrongOptionsPool)];
    const shuffledWrong = shuffleArray(wrongOptionsPool).slice(0, 3);
    const finalOptions = shuffleArray([...shuffledWrong, correctAnswer]);

    finalOptions.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerText = option;
        button.onclick = () => checkAnswer(button, option, correctAnswer);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedButton, selectedValue, correctAnswer) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    const feedbackBox = document.getElementById('feedback-box');
    feedbackBox.style.display = 'block';

    if (selectedValue === correctAnswer) {
        selectedButton.style.background = '#dcfce7';
        selectedButton.style.borderColor = '#16a34a';
        selectedButton.style.color = '#14532d';
        selectedButton.style.fontWeight = 'bold';
        feedbackBox.style.background = '#dcfce7';
        feedbackBox.style.color = '#14532d';
        feedbackBox.style.border = '1px solid #16a34a';
        feedbackBox.innerHTML = `<strong>正解！</strong><br>${currentQuestion.name} ＝ ${currentQuestion.keyword}<br><br>${currentQuestion.desc}`;
    } else {
        selectedButton.style.background = '#fee2e2';
        selectedButton.style.borderColor = '#dc2626';
        selectedButton.style.color = '#7f1d1d';
        feedbackBox.style.background = '#fee2e2';
        feedbackBox.style.color = '#7f1d1d';
        feedbackBox.style.border = '1px solid #dc2626';
        feedbackBox.innerHTML = `<strong>不正解...</strong><br>正解は <strong>${correctAnswer}</strong> です。<br><br>${currentQuestion.name} ＝ ${currentQuestion.keyword}<br>${currentQuestion.desc}`;
        
        buttons.forEach(btn => {
            if (btn.innerText === correctAnswer) {
                btn.style.background = '#dcfce7';
                btn.style.borderColor = '#16a34a';
                btn.style.color = '#14532d';
                btn.style.fontWeight = 'bold';
            }
        });
    }

    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledData.length) {
        showQuestion();
    } else {
        alert('すべての問題が終了しました！最初からやり直します。');
        initQuiz();
    }
}

initQuiz();
