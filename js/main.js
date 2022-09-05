"use strict";

{
  const startDisplay = document.getElementById("start-display");
  const themeDisplay = document.getElementById("theme-display");
  const playDisplay = document.getElementById("play-display");
  const finishDisplay = document.getElementById("finish-display");

  const startDisplayButton = document.getElementById("start-display-button");
  const themeDisplayButton = document.getElementById("theme-display-button");
  const returnButton = document.getElementById("return");
  const finishButton = document.getElementById("finish");
  const finishDisplayButton = document.getElementById("finish-display-button");

  // js-blockをつける関数
  function addDisplayblock(button, target) {
    button.addEventListener("click", () => {
      target.classList.add("js-block");
    });
  }

  addDisplayblock(startDisplayButton, themeDisplay);
  addDisplayblock(themeDisplayButton, playDisplay);


  // js-flexをつける関数
  function addDisplayflex(button, target) {
    button.addEventListener("click", () => {
      target.classList.add("js-flex");
    });
  }

  addDisplayflex(returnButton, startDisplay);
  addDisplayflex(finishButton, finishDisplay);
  addDisplayflex(finishDisplayButton, startDisplay);


  // js-blockを外す関数
  function removeDisplayNone(button, target) {
    button.addEventListener("click", () => {
      target.classList.remove("js-block");
    });
  }

  removeDisplayNone(themeDisplayButton, themeDisplay);
  removeDisplayNone(returnButton, themeDisplay);
  removeDisplayNone(finishButton, playDisplay);
  

  // js-flexを外す関数
  function removeDisplayflex(button, target) {
    button.addEventListener("click", () => {
      target.classList.remove("js-flex");
    });
  }

  removeDisplayflex(startDisplayButton, startDisplay);
  removeDisplayflex(finishDisplayButton, finishDisplay);
}
