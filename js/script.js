const omikujiModal = $("#omikuji-modal");
const stopwatchModal = $("#stopwatch-modal");
const overlay = $("#js-overlay");
const omikujiClose = $("#omikuji-close");
const stopwatchClose = $("#stopwatch-close");
const omikujiOpen = $("#omikuji-open");
const stopwatchOpen = $("#stopwatch-open");

// おみくじ画像をクリックした時の処理
omikujiOpen.on('click', function () { //ボタンをクリックしたら
    omikujiModal.addClass("open"); // modalクラスにopenクラス付与
    overlay.addClass("open"); // overlayクラスにopenクラス付与
});

// ストップウォッチ画像をクリックした時の処理
stopwatchOpen.on('click', function () {
    stopwatchModal.addClass("open");
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

//  黒い部分をクリックした時の処理
overlay.on("click", function () {
    omikujiModal.removeClass("open"); // overlayクラスからopenクラスを外す
    stopwatchModal.removeClass("open");
    overlay.removeClass("open"); // overlayクラスからopenクラスを外す
})