function userStartPage() {
    let isUserLogin = c_is_user_has_login();
    let phone = c_get_user_phone();
    if (!isUserLogin) {
        $(`#holder_Login_userInfo`).addClass("d-none");
        $(`#holder_btn_login`).removeClass("d-none");
        return;
    }
    let user = c_load(phone + '_' + saveKEY.userLogin);
    if (user) {
        let h = $(`#holder_Login_userInfo`);
        h.html(`<span style="color: white; font-weight: bold; font-size: 14px;">Xin Ch\xe0o, ${user.phone}</span> | <button class="btn-logout" onclick="event.preventDefault(); btnLogoutClick(this);">\u{110}\u{103}ng Xu\u{1EA5}t</button>`);
        h.removeClass("d-none");
        $(`#holder_btn_login`).addClass("d-none");
    }
}
function startPage() {
    userStartPage();
    renderHTMLProduct_event_btn_addToCart_BuyNow();
    cart_renderCartByUser();
}
$(function() {
    startPage();
// TODO DELETE
//$(`.cart-dropdown`).css('display', 'block');
});

//# sourceMappingURL=app-code.1c6c7bf6.js.map
