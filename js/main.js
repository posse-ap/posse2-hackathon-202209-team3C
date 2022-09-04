'use strict';

{
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

  // モーダル画面
  const buttonOpen = document.getElementById('game__modal__open');
  const modal = document.getElementById('game__modal');
  const buttonClose = document.getElementsByClassName('game__modal__close')[0];

  // ボタンがクリックされた時
  buttonOpen.addEventListener('click', modalOpen);
  function modalOpen() {
    modal.style.display = 'block';
  }

  // バツ印がクリックされた時
  buttonClose.addEventListener('click', modalClose);
  function modalClose() {
    modal.style.display = 'none';
  }

  // モーダルコンテンツ以外がクリックされた時
  addEventListener('click', outsideClose);
  function outsideClose(e) {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  }
}
