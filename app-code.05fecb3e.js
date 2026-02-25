function cart_btnMuaHangClick(params) {
    let isUserLogin = c_is_user_has_login();
    if (!isUserLogin) {
        showToast("Vui l\xf2ng \u0111\u0103ng nh\u1EADp \u0111\u1EC3 mua h\xe0ng!", 'error', 3000);
        return;
    }
    let cartAllItem = c_load(saveKEY.cartAllItem) || [];
    // loop all item in cartAllItem, if item is checked then add to list item will buy
    let itemWillBuy = [];
    cartAllItem.forEach((item)=>{
        if (item.isChecked) itemWillBuy.push(item);
    });
    if (itemWillBuy.length === 0) {
        showToast("Ch\u1ECDn s\u1EA3n ph\u1EA9m \u0111\u1EC3 mua h\xe0ng!", 'error', 2000);
        return;
    }
    sendMail_thongBao_DON_HANG_MOI({
        phone: c_get_user_phone(),
        HTML_Table_listProduct: c_convertListProduct_willBUY_ToHTMLTable(itemWillBuy)
    });
}

//# sourceMappingURL=app-code.05fecb3e.js.map
