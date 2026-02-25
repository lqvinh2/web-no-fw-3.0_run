function btnLogginClick(btn) {
    let modalID = "modalLoginForm";
    let phone = $("#txtLoginPhone").val();
    if (!phone) {
        showToast("Vui l\xf2ng nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i.", "error");
        txtLoginPhone.focus();
        return;
    }
    let pass = $("#txtLoginPass").val();
    if (!pass) {
        showToast("Vui l\xf2ng nh\u1EADp m\u1EADt kh\u1EA9u.", "error");
        $("#txtLoginPass").focus();
    }
    // giả lập CHECK DB
    if (!DB.users.find((x)=>x.phone == phone && x.pass == pass)) {
        showToast("S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ho\u1EB7c m\u1EADt kh\u1EA9u kh\xf4ng \u0111\xfang.", "error");
        return;
    }
    // c_closeModal(modalID);
    //c_openModal("modalLoginForm");
    //let h = $(`#holder_btn_login__infoUser`);
    //h.html(`<span style="color: white; font-weight: bold; font-size: 14px;">Xin Chào, ${phone}</span> | <button class="btn-logout" onclick="event.preventDefault(); btnLogoutClick(this);">Đăng Xuất</button>`);
    let obj = {
        phone,
        pass
    };
    c_save(saveKEY.phone, obj);
    c_save(saveKEY.userLogin, obj);
    $("#txtLoginPhone").val('');
    $("#txtLoginPass").val('');
    showToast("\u0110\u0103ng nh\u1EADp th\xe0nh c\xf4ng.", "success");
    let h = $(`#holder_Login_userInfo`);
    h.html(`<span style="color: white; font-weight: bold; font-size: 14px;">Xin Ch\xe0o, ${phone}</span> | <button class="btn-logout" onclick="event.preventDefault(); btnLogoutClick(this);">\u{110}\u{103}ng Xu\u{1EA5}t</button>`);
    h.removeClass("d-none");
    $(`#holder_btn_login`).addClass("d-none");
    c_closeModal(modalID);
    cart_renderCartByUser();
}

//# sourceMappingURL=app-code.31d849af.js.map
