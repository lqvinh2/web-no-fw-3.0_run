const saveKEY = {
    cartItemTableWILLBuy: "cart_ItemTableWILLBuy",
    cartAllItem: "CART_ALL_ITEM",
    PAYMENT: "PAYMENT",
    userLogin: "USER_LOGIN",
    phone: "phone"
};
String.prototype.toNumber = function() {
    var value = this;
    value = value.replaceAll(".", "").replace("\u20AB", "");
    value = Number(value);
    if (isNaN(value)) return 0;
    return value;
};
Number.prototype.toNumber = function() {
    var value = this;
    if (!value) return 0;
    value = value.toString().replaceAll(".", "").replace("\u20AB", "");
    value = Number(value);
    if (isNaN(value)) return 0;
    return value;
};
String.prototype.formatMoney = function() {
    const value = Number(this);
    if (isNaN(value)) return "0";
    // Sử dụng locale 'de-DE' (Đức) hoặc 'vi-VN' (Việt Nam) 
    // để có dấu chấm ngăn cách hàng nghìn
    return value.toLocaleString('de-DE');
};
Number.prototype.formatMoney = function() {
    const value = Number(this);
    if (isNaN(value)) return "0";
    // Sử dụng locale 'de-DE' (Đức) hoặc 'vi-VN' (Việt Nam) 
    // để có dấu chấm ngăn cách hàng nghìn
    return value.toLocaleString('de-DE');
};
const getRandom = (from, to)=>{
    return Math.floor(Math.random() * (to - from + 1)) + from;
};
$(function() {
    // Lấy các phần tử cần thiết
    const cartIcon = document.querySelector('.cart-icon');
    const cartDropdown = document.getElementById('cartDropdown');
    const btnCloseCart = document.getElementById('btnCloseCart');
    // Mở giỏ hàng khi click vào Icon (Dành cho Mobile)
    cartIcon.addEventListener('click', function(e) {
        // Chỉ kích hoạt trên màn hình dưới 768px
        if (window.innerWidth <= 768) {
            cartDropdown.classList.add('active');
            // Ngăn chặn cuộn trang web bên dưới khi đang mở giỏ hàng
            document.body.style.overflow = 'hidden';
        }
    });
    // Đóng giỏ hàng khi click vào nút X
    btnCloseCart.addEventListener('click', function(e) {
        e.stopPropagation(); // Ngăn sự kiện nổi bọt lên icon
        cartDropdown.classList.remove('active');
        // Cho phép cuộn trang lại bình thường
        document.body.style.overflow = 'auto';
    });
});
function cartItemCheckboxClick(checkbox) {
    c_save(saveKEY.cartAllItem);
    let checkedCheckboxes = $(`.cart-list-items .cart-item-checkbox:checked`);
    let totalPayment = 0;
    let table_JQ_paymentItem = $(`
            <table class="table-border payment-item-table">
                <thead>
                    <tr>
                      <td class="text-center">T\xean</td>
                      <td class="text-center" style="width: 70px;">Gi\xe1</td>
                      <td class="text-center" style="width: 45px;">S\u{1ED1} l\u{1B0}\u{1EE3}ng</td>
                      <td class="text-center" style="width: 110px;">T\u{1ED5}ng ti\u{1EC1}n</td>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        `);
    // tạo TABLE thông tin S
    checkedCheckboxes.each(function() {
        let productId = $(this).attr("product-id");
        let cartItem = $(`.cart-list-items .cart-item[product-id='${productId}']`);
        let itemTotalPrice = cartItem.find(`.cart-item-total-price`).text();
        itemTotalPrice = itemTotalPrice.toNumber();
        totalPayment += itemTotalPrice;
        // tạo 1 div có thông tin sản phẩm đã được chọn, bao gồm tên sản phẩm, số lượng và tổng tiền của sản phẩm đó, sau đó append div này vào phần thanh toán
        let productName = cartItem.find(`.cart-item-name`).text();
        let quantity = cartItem.find(`.quantity-control-c4 .input-qty`).val();
        let itemPrice = cartItem.find(`.cart-item-price`).text();
        table_JQ_paymentItem.find(`tbody`).append(`
                <tr product-id="${productId}">
                  <td>
                    <div class="payment-item-name" style="width: 170px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${productName}</div>
                  </td>
                  <td>
                    <div class="payment-item-price" style="width: 70px; text-align: right; margin-left: 4px; margin-right: 4px; font-weight: bold;">${itemPrice}</div>
                  </td>
                  <td>
                    <div class="payment-item-quantity text-center" style="width: 32px; font-weight: bold;">${quantity}</div>
                  </td>
                  <td>
                    <div class="payment-item-total-price text-end w100" style="color: var(--bg); font-size: 14px; font-weight: bold;">${itemTotalPrice.formatMoney()}\u{20AB}</div>
                  </td>
                </tr>
          `);
    });
    // tạo TABLE thông tin E
    $(`.selected-products`).html("");
    $(`.selected-products`).append(table_JQ_paymentItem);
    $(`.total-payment`).text(`T\u{1ED5}ng thanh to\xe1n: ${totalPayment.formatMoney()}\u{20AB}`);
    // hover vào tất cả '.cart-item' tìm <tr product-id="${productId}"> trong table_JQ_paymentItem và add class hover vào tr đó, khi hover ra thì remove class hover đó đi
    $(`.cart-item`).hover(function() {
        let productId = $(this).attr("product-id");
        table_JQ_paymentItem.find(`tr[product-id='${productId}']`).css("background-color", "rgba(0, 0, 0, 0.1)");
    }, function() {
        let productId = $(this).attr("product-id");
        table_JQ_paymentItem.find(`tr[product-id='${productId}']`).css("background-color", "transparent");
    });
    c_save(saveKEY.cartItemTableWILLBuy);
}

//# sourceMappingURL=app-code.c36f364e.js.map
