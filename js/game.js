"use strict";

{
  const themeDisplayButton = document.getElementById("theme-display-button");
  const themeDisplayInputs = document.querySelectorAll(
    ".game__theme-display__input"
  );
  let themeInputValues = [];

  // inputの値を配列にする関数
  function getValue() {
    themeDisplayInputs.forEach((input) => {
      if (input.value) {
        themeInputValues.push(input.value);
      }
    });
  }

  themeDisplayButton.addEventListener("click", () => {
    getValue();
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

  const panels = [new Panel(), new Panel()];

  // スロットに配列を渡す
  const themes = themeInputValues;
  const instructions = ["aaa", "bbb", "ccc"];
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
    panels[0].spin(themes);
    panels[1].spin(instructions);
  });
}
