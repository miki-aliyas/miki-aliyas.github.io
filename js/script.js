'use strict';
// ローディング画面制御
const laoding = document.querySelector(".loading_bg");

// ページの読み込み完了時に処理を実行
window.addEventListener("load", () => {
    // 3秒にローディング画面を非表示にする
    setTimeout (() => {
        laoding.classList.add("loaded");
    },3000);
});

const omikujiModal = $("#omikuji-modal");
const stopwatchModal = $("#stopwatch-modal");
const wearchModal = $("#wearch-modal");
const overlay = $("#js-overlay");
const omikujiClose = $("#omikuji-close");
const stopwatchClose = $("#stopwatch-close");
const wearchClose = $("#wearch-close");
const omikujiOpen = $("#omikuji-open");
const stopwatchOpen = $("#stopwatch-open");
const wearchOpen = $("#wearch-open");

// 画像をクリックした時の処理
omikujiOpen.on('click', function () { //ボタンをクリックしたら
    omikujiModal.addClass("open"); // modalクラスにopenクラス付与
    overlay.addClass("open"); // overlayクラスにopenクラス付与
});
stopwatchOpen.on('click', function () {
    stopwatchModal.addClass("open");
    overlay.addClass("open");
});
wearchOpen.on('click', function () {
    wearchModal.addClass("open");
    overlay.addClass("open");
});

// ×ボタンをクリックした時の処理
omikujiClose.on('click', function () { //×ボタンをクリックしたら
    omikujiModal.removeClass("open"); // overlayクラスからopenクラスを外す
    overlay.removeClass("open"); // overlayクラスからopenクラスを外す
});
stopwatchClose.on('click', function () {
    stopwatchModal.removeClass("open");
    overlay.removeClass("open");
});
wearchClose.on('click', function () {
    wearchModal.removeClass("open");
    overlay.removeClass("open");
});

//  黒い部分をクリックした時の処理
overlay.on("click", function () {
    omikujiModal.removeClass("open"); // overlayクラスからopenクラスを外す
    stopwatchModal.removeClass("open");
    wearchModal.removeClass("open");
    overlay.removeClass("open"); // overlayクラスからopenクラスを外す
})