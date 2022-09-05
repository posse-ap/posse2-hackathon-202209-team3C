"use strict";

{
  // 話題のinputタグを複製する
  const themeContainer = document.getElementById("theme-input-container");
  const themeInput = document.querySelector(".game__theme-display__input");
  for (let i = 0; i < 19; i++) {
    const themesInput = themeInput.cloneNode(false);
    themeContainer.appendChild(themesInput);
  }

  // 各ボタンを格納
  const themeDisplayButton = document.getElementById("theme-display-button");
  const finishDisplayButton = document.getElementById("finish-display-button");
  const blackboard = document.getElementById("blackboard-theme");

  // 話題を格納
  const defaultThemes = [
    "趣味",
    "Harbors",
    "青春",
    "大好きなPOSSEの先輩",
    "恋愛",
    "あなたの高校生活",
    "POSSE",
    "スポーツ",
    "食欲",
  ];
  let themeInputValues = [];
  if (JSON.parse(localStorage.getItem("inputThemes"))) {
    themeInputValues = JSON.parse(localStorage.getItem("inputThemes"));
  }
  let allThemes = [];

  // お題の配列を獲得し、終了画面の黒板にHTMLをセットする
  themeDisplayButton.addEventListener("click", () => {
    getValue();
  });

  // inputの値を配列にする関数
  function getValue() {
    const themeDisplayInputs = document.querySelectorAll(
      ".game__theme-display__input"
    );
    themeDisplayInputs.forEach((input) => {
      if (input.value) {
        themeInputValues.push(input.value);
      }
    });
    setTheme();
  }

  // 終了画面の黒板にお題のHTMLをセットする関数
  function setTheme() {
    allThemes = themeInputValues.concat(defaultThemes);
    allThemes.forEach((element) => {
      const themeInBlackboardElement = document.createElement("p");
      themeInBlackboardElement.classList.add("game__blackboard__theme");
      themeInBlackboardElement.textContent = element;
      blackboard.appendChild(themeInBlackboardElement);
    });
  }

  // 指示を格納
  const instructions = [
    "についてディベートして！",
    "についての思いを熱くプレゼンして！",
    "に関するポーズをして！",
    "についてハイテンションで語って！",
    "をカタカナ言葉を使わずに話して！",
    "について語尾にござるをつけて話して！",
    "の可愛さを語って！",
    "のかっこよさを語って！",
    "を顔で表現して",
    "を語尾をでちゅにして語って！",
    "を語尾をだえ〜にして語って！",
    "をかわいこぶって話して！",
    "をギャル風に話して！",
    "について裏声だけで話して！",
    "をジェスチャーだけで話して！",
    "についてイケボ風で話して！",
    "についてカワボで話して！",
    "についてずっと笑顔で話して！",
    "についてのポーズをしてスクショ！",
  ];

  // 名言を格納
  const sliderOne = document.getElementById("slider-one");
  const sliderTwo = document.getElementById("slider-two");
  let famousQuoteValues = [
    "旅行するならどこへ行きたい??",
    "冗談じゃないわよゥ",
    "何もなかった...!!",
    "奇跡ナメるんじゃないよｵ!!!",
    "人の夢は終わらねェ!!",
    "おのかんさんしか勝たん",
  ];
  if (JSON.parse(localStorage.getItem("FamousQuotes"))) {
    famousQuoteValues = JSON.parse(localStorage.getItem("FamousQuotes"));
  }

  // 名言を獲得し、ヘッダーにセットする
  function createFamousQuotes(place) {
    famousQuoteValues.forEach((element) => {
      const famousQuoteElement = document.createElement("p");
      famousQuoteElement.classList.add("header__inner__slider__text");
      famousQuoteElement.textContent = element;
      place.appendChild(famousQuoteElement);
    });
  }
  createFamousQuotes(sliderOne);
  createFamousQuotes(sliderTwo);

  // スロット
  // スロットパネルのクラス
  let clickCount = 0;
  class Panel {
    constructor() {
      const slotPanel = document.createElement("div");
      slotPanel.classList.add("game__play-display__slot__panel");

      this.textBox = document.createElement("div");
      this.textBox.classList.add("game__play-display__slot__text-box");

      this.text = document.createElement("p");
      this.text.textContent = "Let's spin!";

      this.timeoutId = undefined;

      this.stop = document.createElement("button");
      this.stop.textContent = "STOP";

      this.stop.classList.add("game__play-display__slot__button");
      this.stop.addEventListener("click", () => {
        if (this.stop.classList.contains("js-clicked")) {
          return;
        }
        this.stop.classList.add("js-clicked");
        clickCount++;
        if (clickCount == 2) {
          spin.classList.remove("js-clicked");
        }
        clearTimeout(this.timeoutId);
      });

      slotPanel.appendChild(this.textBox);
      slotPanel.appendChild(this.textBox).appendChild(this.text);
      slotPanel.appendChild(this.stop);

      const main = document.getElementById("slot");
      main.appendChild(slotPanel);
    }

    removeJsClicked() {
      this.stop.classList.remove("js-clicked");
    }

    getRandomText(array) {
      const texts = array;
      return texts[Math.floor(Math.random() * texts.length)];
    }

    spin(array) {
      this.text.textContent = this.getRandomText(array);
      this.timeoutId = setTimeout(() => {
        this.spin(array);
      }, 50);
    }
  }

  // スロットに配列を渡す
  // const themes = themeInputValues.concat(defaultThemes);
  const spin = document.getElementById("spin");

  spin.addEventListener("click", () => {
    if (spin.classList.contains("js-clicked")) {
      return;
    }
    spin.classList.add("js-clicked");
    clickCount = 0;
    panels.forEach((panel) => {
      panel.removeJsClicked();
    });
    panels[0].spin(allThemes);
    panels[1].spin(instructions);
  });

  const panels = [new Panel(), new Panel()];

  // リセットボタンを押したら、"inputThemes"キーの値を削除する
  const themeResetButton = document.getElementById("theme-reset-button");
  themeResetButton.addEventListener("click", () => {
    const result = window.confirm("本当にリセットしますか？");
    if (result) {
      localStorage.removeItem("inputThemes");
      location.reload();
    }
  });

  // 確定ボタンを押したら、名言がストレージに保存される
  const famousQuoteInput = document.getElementById("famous-quote-input");
  const famousQuoteButton = document.getElementById("famous-quote-button");
  famousQuoteButton.addEventListener("click", () => {
    famousQuoteValues.push(famousQuoteInput.value);
    if (famousQuoteValues.length > 6) {
      famousQuoteValues.shift();
    }
    let keepFamousQuoteJson = JSON.stringify(famousQuoteValues);
    localStorage.setItem("FamousQuotes", keepFamousQuoteJson);
    famousQuoteButton.disabled = true;
    famousQuoteButton.classList.add("js-clicked");
    famousQuoteInput.classList.add("js-clicked");
  });

  // 保存ボタンを押したら、themeInputValuesがストレージに保存される
  const keepThemesButton = document.getElementById("keep-themes-button");
  keepThemesButton.addEventListener("click", () => {
    keepThemesButton.classList.add("js-clicked");
    let keepThemesJson = JSON.stringify(themeInputValues);
    localStorage.setItem("inputThemes", keepThemesJson);
  });

  // 終了画面のトップに戻るを押したらリロードされる
  finishDisplayButton.addEventListener("click", () => {
    location.reload();
  });
}
