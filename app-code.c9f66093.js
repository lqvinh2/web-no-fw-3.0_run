function c_encodeBase64(str) {
    try {
        const bytes = new TextEncoder().encode(str);
        const binString = String.fromCodePoint(...bytes);
        return btoa(binString);
    } catch (error) {
        return null;
    }
}
function c_decodeBase64(base64) {
    try {
        const binString = atob(base64);
        const bytes = Uint8Array.from(binString, (m)=>m.codePointAt(0));
        return new TextDecoder().decode(bytes);
    } catch (error) {
        return null;
    }
}
// function c_getUser() {
//     let data = localStorage.getItem(user.phone + '_' + saveKEY.userLogin);
//     if (!data) {
//       return null;
//     }
//     data = c_decodeBase64(data);
//     if (data) {
//       return JSON.parse(data);
//     }
//     return null;
// }
function c_is_user_has_login() {
    let phone = c_load(saveKEY.phone);
    return phone ? true : false;
}
function c_get_user_phone() {
    let phone = localStorage.getItem(saveKEY.phone);
    return phone ? phone : null;
}
function c_is_user_has_login___if_not_showModalLOGIN(params) {
    let phone = c_load(saveKEY.phone);
    if (!phone) {
        showToast("Vui l\xf2ng \u0111\u0103ng nh\u1EADp", "error", 2000);
        c_openModal("modalLoginForm");
        return false;
    }
    return true;
}
function c_save(key, info) {
    let phone = c_get_user_phone();
    let paymentItems = [];
    if (key == saveKEY.phone) {
        localStorage.setItem(saveKEY.phone, info.phone);
        return;
    }
    if (key == saveKEY.userLogin) {
        let saveData = JSON.stringify(info);
        saveData = c_encodeBase64(saveData);
        localStorage.setItem(phone + "_" + saveKEY.userLogin, saveData);
        return;
    }
    if (key == saveKEY.cartAllItem) {
        $(`.cart-list-items .cart-item`).each(function() {
            let productId = $(this).attr("product-id");
            let name = $(this).find(`.cart-item-name`).text();
            let price = $(this).find(`.cart-item-price`).text();
            let quantity = $(this).find(`.input-qty`).val();
            let totalPrice = $(this).find(`.cart-item-total-price`).text();
            let checkbox = $(this).find(`.cart-item-checkbox`);
            let isChecked = checkbox.is(":checked");
            paymentItems.push({
                productId: productId,
                name: name,
                price: price.toNumber(),
                quantity: quantity,
                totalPrice: totalPrice.toNumber(),
                isChecked: isChecked
            });
        });
        let saveData = JSON.stringify(paymentItems);
        saveData = c_encodeBase64(saveData);
        localStorage.setItem(phone + "_" + saveKEY.cartAllItem, saveData);
    }
    if (key == saveKEY.cartItemTableWILLBuy) {
        $(`.payment-item-table tbody tr`).each(function() {
            let productId = $(this).attr("product-id");
            let name = $(this).find(`.payment-item-name`).text();
            let price = $(this).find(`.payment-item-price`).text();
            let quantity = $(this).find(`.payment-item-quantity`).text();
            let totalPrice = $(this).find(`.payment-item-total-price`).text();
            paymentItems.push({
                productId: productId,
                name: name,
                price: price.toNumber(),
                quantity: quantity,
                totalPrice: totalPrice.toNumber()
            });
        });
        let saveData = JSON.stringify(paymentItems);
        saveData = c_encodeBase64(saveData);
        localStorage.setItem(phone + "_" + saveKEY.cartItemTableWILLBuy, saveData);
        return;
    }
}
function c_load(key) {
    let phone = c_get_user_phone();
    // nếu có phone là đã đăng nhập rồi.
    if (key == saveKEY.phone) return localStorage.getItem(saveKEY.phone);
    if (key.includes(saveKEY.cartItemTableWILLBuy) || key.includes(saveKEY.cartAllItem)) {
        let paymentItems = localStorage.getItem(phone + '_' + key);
        if (!paymentItems) return null;
        paymentItems = c_decodeBase64(paymentItems);
        if (paymentItems) return JSON.parse(paymentItems);
        return null;
    }
    if (key.includes(saveKEY.userLogin)) {
        let data = localStorage.getItem(phone + '_' + saveKEY.userLogin);
        if (!data) return null;
        data = c_decodeBase64(data);
        if (data) return JSON.parse(data);
        return null;
    }
}
function c_remove(key) {
    localStorage.removeItem(key);
}
// viết hàm chuyển đổi 1 list  object thành 1 string html <table> để hiển thị trong email
function c_convertListProduct_willBUY_ToHTMLTable(list) {
    let html = `<div><table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">  
                <thead>
                <tr>
                  <th style="background-color: #d0ee39;">S\u{1ED1} TT</th>
                  <th style="background-color: #e0995b;">m\xe3 SP</th>
                  <th style="background-color: #f2f2f2; text-align: center;">T\xean s\u{1EA3}n ph\u{1EA9}m</th>
                  <th style="background-color: #f2f2f2; text-align: center;">Gi\xe1</th>
                  <th style="background-color: #f2f2f2; text-align: center;">S\u{1ED1} l\u{1B0}\u{1EE3}ng</th>
                  <th style="background-color: #f2f2f2; text-align: center;">Th\xe0nh ti\u{1EC1}n</th>
                </tr></thead>
                <tbody>`;
    let totalAll = 0;
    list.forEach((item, index)=>{
        totalAll += item.totalPrice;
        html += `<tr>
              <td style="text-align: center;">${index + 1}</td>
              <td style="text-align: center;">${item.productId}</td>
              <td style="text-align: left;">${item.name}</td>
              <td style="text-align: right;">${item.price.formatMoney()}\u{20AB}</td>
              <td style="text-align: center;">${item.quantity}</td>
              <td style="text-align: right;">${item.totalPrice.formatMoney()}\u{20AB}</td>
            </tr>`;
    });
    html += `<tr>
              <td colspan="5" style="text-align: right; font-weight: bold;">T\u{1ED5}ng c\u{1ED9}ng:</td>
              <td style="text-align: right; font-weight: bold;">${totalAll.formatMoney()}\u{20AB}</td>
            </tr>`;
    html += `</tbody></table></div>`;
    return html;
}
function c_openModal(id) {
    if (!id) {
        console.error("Modal ID is required to open a modal.");
        return;
    }
    if (!document.getElementById(id)) {
        console.error(`No modal found with ID: ${id}`);
        return;
    }
    let myModal = new bootstrap.Modal(document.getElementById(id), {});
    myModal.show();
    $(`#${id}`).css("opacity", "0");
    let intt = setInterval(()=>{
        // wait until modal is opened
        if ($(`#${id}`).css("display") != "none") {
            clearInterval(intt);
            let cssO = {
                display: "flex",
                opacity: "1"
            };
            $(`#${id}`).css(cssO);
            $(`#${id}`).focus();
            const key = "modal-id";
            const key2 = "modal-id";
            let r = 2999;
            $(".modal-backdrop").each(function() {
                let modalIDinBackDrop = $(this).attr(key);
                if (modalIDinBackDrop) r = parseInt($(this).css("z-index"));
                else {
                    r += 2;
                    $(this).attr(key, id);
                    $(this).css("z-index", r);
                }
            });
            r = 3000;
            $(".modal-backdrop").each(function() {
                r += 2;
                let zIdx = $(this).css("z-index");
                let modalID = $(this).attr(key);
                let modal = $(`#${modalID}`);
                modal.css("z-index", r);
            });
        }
    }, 50);
}
function c_closeModal(id) {
    $("#" + id).find(`[data-bs-dismiss="modal"]`).click();
}

//# sourceMappingURL=app-code.c9f66093.js.map
