const quiz = [
  {
    question:"好きな食べ物は何でしょうか？",
    answers:[
      "焼肉",
      "寿司",
      "カレー",
      "うどん",
    ],
    correct:"焼肉"
  },
  {
    question:"好きなサッカーチームはどこでしょうか？",
    answers:[
      "ガンバ大阪",
      "セレッソ大阪",
      "ヴィッセル神戸",
      "京都サンガ"
    ],
    correct:"ガンバ大阪"
  },
  {
    question:"今学習しているものは何でしょうか？",
    answers:[
      "簿記",
      "Oracle",
      "AWS",
      "HTML5"
    ],
    correct:"HTML5"
  },
  {
    question:"嫌いなチームはどこでしょうか？",
    answers:[
      "ガンバ大阪",
      "ヴィッセル神戸",
      "セレッソ大阪",
      "京都サンガ"
    ],
    correct:"セレッソ大阪"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;


//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonindex = 0;
  while(buttonindex < buttonLength){
    $button[buttonindex].textContent = quiz[quizIndex].answers[buttonindex];
    buttonindex++;
  }
}
setupQuiz();


const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解!");
    score++;
  } else {
    window.alert("不正解!");
  }

  quizIndex++;
  if(quizIndex < quizLength){
    setupQuiz();
  } else{
    window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
  }
};


//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });  
  handlerIndex++;
}
