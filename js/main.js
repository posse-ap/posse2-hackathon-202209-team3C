const startDisplay = document.getElementById("start-display");
const themeDisplay = document.getElementById("theme-display");
const playDisplay = document.getElementById("play-display");

const startDisplayButton = document.getElementById("start-display-button");
const themeDisplayButton = document.getElementById("theme-display-button");
const returnButton = document.getElementById("return");
const finishButton = document.getElementById("finish");

// js-noneをつける関数
function addDisplayNone(button, target) {
  button.addEventListener("click", () => {
    target.classList.add("js-none");
  });
}

addDisplayNone(startDisplayButton, startDisplay);
addDisplayNone(themeDisplayButton, themeDisplay);
addDisplayNone(returnButton, themeDisplay);
addDisplayNone(finishButton, playDisplay);

// js-noneを外す関数
function removeDisplayNone(button, target) {
  button.addEventListener("click", () => {
    target.classList.remove("js-none");
  });
}

removeDisplayNone(startDisplayButton, themeDisplay);
removeDisplayNone(themeDisplayButton, playDisplay);
removeDisplayNone(returnButton, startDisplay);
removeDisplayNone(finishButton, startDisplay);
