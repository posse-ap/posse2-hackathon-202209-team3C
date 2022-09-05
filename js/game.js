"use strict";

{
  const themeDisplayButton = document.getElementById("theme-display-button");
  const finishDisplayButton = document.getElementById("finish-display-button");
  const themeDisplayInputs = document.querySelectorAll(
    ".game__theme-display__input"
  );

  const blackboard = document.getElementById("blackboard-theme");
  const defaultThemes = [
    "趣味",
    "Harbors",
    "青春",
    "大好きなPOSSEの先輩",
    "恋愛",
  ];
  const themeInputValues = [];
  let allThemes = [];
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
    "をかわいこぶって話して！",
  ];

  const sliderOne = document.getElementById("slider-one");
  const sliderTwo = document.getElementById("slider-two");
  const defaultFamousQuotes = [
    "寝不足は草",
    " ステーキ美味しいよね！マッスルマッスル",
    "まりじん",
    "やまとラーメン好きってわけではないのか",
  ];

  // inputの値を配列にする関数
  function getValue() {
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

  // お題の配列を獲得し、終了画面の黒板にHTMLをセットする
  themeDisplayButton.addEventListener("click", () => {
    getValue();
  });

  // 名言を獲得し、ヘッダーにセットする
  function createFamousQuotes(place) {
    defaultFamousQuotes.forEach((element) => {
      const famousQuoteElement = document.createElement("p");
      famousQuoteElement.classList.add("header__inner__slider__text");
      famousQuoteElement.textContent = element;
      place.appendChild(famousQuoteElement);
    });
  }

  createFamousQuotes(sliderOne);
  createFamousQuotes(sliderTwo);

  // トップに戻るを押した際に、お題のインプットを空にする
  finishDisplayButton.addEventListener("click", () => {
    themeDisplayInputs.forEach((element) => {
      element.innerHTML("");
    });
  });

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
      this.text.textContent = "Lets spin!";

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
}
