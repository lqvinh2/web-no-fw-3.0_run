function cart_renderCartByUser() {
    let isUserLogin = c_is_user_has_login();
    if (!isUserLogin) return;
    let listAllItemsCart = c_load(saveKEY.cartAllItem);
    let listItemCartPayment = c_load(saveKEY.cartItemTableWILLBuy);
    // loop listAllItemsCart để render ra giỏ hàng
    if (listAllItemsCart && listAllItemsCart.length > 0) listAllItemsCart.forEach((item)=>{
        item.id = item.productId;
        btnAddToCartClick(item, "no-toast");
    });
    cartItemCheckboxClick(); // hàm này sẽ loop qua tất cả checkbox của sản phẩm trong giỏ hàng, nếu checkbox nào được checked thì sẽ tính tổng tiền của sản phẩm đó và cộng vào tổng tiền thanh toán, sau đó hiển thị tổng tiền thanh toán ở phần thanh toán. Ngoài ra, nếu có sản phẩm nào được checked thì sẽ enabled nút thanh toán, nếu không có sản phẩm nào được checked thì sẽ disabled nút thanh toán. Hàm này cũng sẽ tạo ra một bảng thông tin các sản phẩm đã được chọn để hiển thị ở phần thanh toán, trong bảng này sẽ có tên sản phẩm, giá, số lượng và tổng tiền của sản phẩm đó.
}

//# sourceMappingURL=app-code.17695418.js.map
