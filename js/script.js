const modal = $("#js-modal");
const overlay = $("#js-overlay");
const close = $("#js-close");
const open = $("#js-open");

// 画像をクリックした時の処理
open.on('click', function () { //ボタンをクリックしたら
    modal.addClass("open"); // modalクラスにopenクラス付与
    overlay.addClass("open"); // overlayクラスにopenクラス付与
});
// ×ボタンをクリックした時の処理
close.on('click', function () { //×ボタンをクリックしたら
    modal.removeClass("open"); // overlayクラスからopenクラスを外す
    overlay.removeClass("open"); // overlayクラスからopenクラスを外す
});
//  黒い部分をクリックした時の処理
overlay.on("click", function () {
    modal.removeClass("open"); // overlayクラスからopenクラスを外す
    overlay.removeClass("open"); // overlayクラスからopenクラスを外す
})