function btnLogoutClick(btn) {
    $(`#holder_Login_userInfo`).addClass("d-none");
    $(`#holder_btn_login`).removeClass("d-none");
    c_remove(saveKEY.phone);
    $(`.cart-list-items`).html("");
    $(`.selected-products`).html("");
    $(`.total-payment`).text(`T\u{1ED5}ng thanh to\xe1n: 0\u{20AB}`);
    showToast("\u0110\u0103ng xu\u1EA5t th\xe0nh c\xf4ng.", "success");
}

//# sourceMappingURL=app-code.555f9895.js.map
