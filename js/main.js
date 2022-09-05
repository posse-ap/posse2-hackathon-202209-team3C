"use strict";

{
  // ローディングアニメーション
  let tl = gsap.timeline();

  function loadingAnimation() {
    tl.from(".loader__font", {
      opacity: 0,
      y: -100,
      duration: 0.5,
      delay: 0.5,
      stagger: {
        amount: 0.5,
        from: "start",
        ease: "power4.inOut",
      },
    })
      .to(".loader__font", {
        opacity: 0,
        y: 0,
        duration: 0.3,
        delay: 0.3,
        stagger: {
          amount: 0.3,
          from: "start",
          ease: "power4.inOut",
        },
      })
      .to(".loader", {
        opacity: 0,
      });
  }

  window.addEventListener("load", function () {
    loadingAnimation();
  });

  // ディスプレイ遷移
  const startDisplay = document.getElementById("start-display");
  const themeDisplay = document.getElementById("theme-display");
  const playDisplay = document.getElementById("play-display");
  const finishDisplay = document.getElementById("finish-display");

  const startDisplayButton = document.getElementById("start-display-button");
  const themeDisplayButton = document.getElementById("theme-display-button");
  const returnButton = document.getElementById("return");
  const finishButton = document.getElementById("finish");
  const spFinishButton = document.getElementById("finish-sp");
  const finishDisplayButton = document.getElementById("finish-display-button");

  // js-blockをつける関数
  function addDisplayBlock(button, target) {
    button.addEventListener("click", () => {
      target.classList.add("js-block");
    });
  }

  addDisplayBlock(startDisplayButton, themeDisplay);
  addDisplayBlock(themeDisplayButton, playDisplay);

  // js-flexをつける関数
  function addDisplayFlex(button, target) {
    button.addEventListener("click", () => {
      target.classList.add("js-flex");
    });
  }

  addDisplayFlex(returnButton, startDisplay);
  addDisplayFlex(finishButton, finishDisplay);
  addDisplayFlex(spFinishButton, finishDisplay);
  addDisplayFlex(finishDisplayButton, startDisplay);

  // js-blockを外す関数
  function removeDisplayBlock(button, target) {
    button.addEventListener("click", () => {
      target.classList.remove("js-block");
    });
  }

  removeDisplayBlock(themeDisplayButton, themeDisplay);
  removeDisplayBlock(returnButton, themeDisplay);
  removeDisplayBlock(finishButton, playDisplay);
  removeDisplayBlock(spFinishButton, playDisplay);

  // js-flexを外す関数
  function removeDisplayFlex(button, target) {
    button.addEventListener("click", () => {
      target.classList.remove("js-flex");
    });
  }

  removeDisplayFlex(startDisplayButton, startDisplay);
  removeDisplayFlex(finishDisplayButton, finishDisplay);
}
