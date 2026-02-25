function btnRegistNewuserClick(btn) {
    let modalID = "modalLoginForm";
    let phone = $("#txtLoginPhone").val();
    if (!phone) {
        showToast("Vui l\xf2ng nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i.", "error");
        $("#txtLoginPhone").focus();
        return;
    }
    let pass = $("#txtLoginPass").val();
    if (!pass) {
        showToast("Vui l\xf2ng nh\u1EADp m\u1EADt kh\u1EA9u.", "error");
        $("#txtLoginPass").focus();
    }
    if (DB.users.find((x)=>x.phone == phone)) {
        showToast("S\u1ED1 \u0111i\u1EC7n tho\u1EA1i \u0111\xe3 \u0111\u01B0\u1EE3c \u0111\u0103ng k\xfd. Vui l\xf2ng s\u1EED d\u1EE5ng s\u1ED1 \u0111i\u1EC7n tho\u1EA1i kh\xe1c.", "error");
        return;
    }
    // giả lập CHECK DB
    DB.users.push({
        phone,
        pass
    });
    setTimeout(()=>{
        showToast("\u0110\u0103ng k\xfd th\xe0nh c\xf4ng. B\u1EA1n c\xf3 th\u1EC3 \u0111\u0103ng nh\u1EADp ngay b\xe2y gi\u1EDD.", "success");
    }, 100);
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
    let h = $(`#holder_Login_userInfo`);
    h.html(`<span style="color: white; font-weight: bold; font-size: 14px;">Xin Ch\xe0o, ${phone}</span> | <button class="btn-logout" onclick="event.preventDefault(); btnLogoutClick(this);">\u{110}\u{103}ng Xu\u{1EA5}t</button>`);
    h.removeClass("d-none");
    $(`#holder_btn_login`).addClass("d-none");
    c_closeModal(modalID);
}

//# sourceMappingURL=app-code.3b0cfa8d.js.map
