function renderHTMLProduct_event_btn_addToCart_BuyNow() {
    for(let i = 0; i < DB.products.length; i++){
        var productItem = `
            <div class="product-card" product-id="$$product-id$$">
          <div class="product-img-wrapper">
            <!-- Link \u{1EA3}nh m\u{1EDB}i c\u{1EE7}a b\u{1EA1}n -->
            <img src="https://picsum.photos/200/300" alt="S\u{1EA3}n ph\u{1EA9}m">
        
            <!-- C\xe1c Badge \u{111}\xe8 l\xean \u{1EA3}nh \u{1EDF} g\xf3c tr\xe1i d\u{1B0}\u{1EDB}i -->
            <div class="badge-container">
              <span class="badge badge-date">25-2</span>
              <span class="badge badge-voucher">Voucher</span>
            </div>
          </div>

          <div class="product-btn-buy-now-add-to-cart d-flex-j-sb">
            <button product-id="$$product-id$$" class="btn-buy-now btn-buy-now-add-to-cart">Mua Ngay</button>
            <button product-id="$$product-id$$" class="btn-add-to-cart btn-buy-now-add-to-cart">Th\xeam V\xe0o Gi\u{1ECF}</button>
          </div>
        
          <div class="product-info">
            <div class="product-name">
              <span class="label-love">Y\xeau th\xedch+</span> 
              <span class="name">$$product-name$$</span>
            </div>
            <div class="product-price-row">
              <span class="currency">$$price$$\u{20AB}</span>
              <span class="price"></span>
              <span class="sold">\u{110}\xe3 b\xe1n $$sold$$</span>
            </div>
          </div>
        
          <!-- N\xfat T\xecm s\u{1EA3}n ph\u{1EA9}m t\u{1B0}\u{1A1}ng t\u{1EF1} (C2) n\u{1EB1}m d\u{1B0}\u{1EDB}i c\xf9ng -->
          <a href="/search-similar" class="btn-similar">T\xecm s\u{1EA3}n ph\u{1EA9}m t\u{1B0}\u{1A1}ng t\u{1EF1}</a>
        </div>
         `;
        let product = DB.products[i];
        let productItemRendered = productItem.replaceAll("$$product-id$$", product.id).replaceAll("$$product-name$$", product.name).replaceAll("$$price$$", product.price.formatMoney()).replaceAll("$$sold$$", product.sold);
        $(`.product-grid`).append(productItemRendered);
        // find button buy now and add to cart
        $(`.btn-buy-now[product-id="${product.id}"]`).click(function() {
            btnBuyNowClick(product);
        });
        // find button add to cart and add to cart
        $(`.btn-add-to-cart[product-id="${product.id}"]`).click(function() {
            product.quantity = 1;
            product.totalPrice = product.price;
            btnAddToCartClick(product);
        });
    }
}
function btnBuyNowClick(product) {
    let user = c_load(saveKEY.userLogin);
    if (!user) {
        showToast("Vui l\xf2ng \u0111\u0103ng nh\u1EADp \u0111\u1EC3 mua h\xe0ng", 'error', 2000);
        c_openModal("modalLoginForm");
        return;
    }
}
function btnAddToCartClick(product, flgShowToast) {
    let user = c_load(saveKEY.userLogin);
    if (!user) {
        showToast("Vui l\xf2ng \u0111\u0103ng nh\u1EADp \u0111\u1EC3 th\xeam s\u1EA3n ph\u1EA9m v\xe0o gi\u1ECF h\xe0ng", "error", 2000);
        c_openModal("modalLoginForm");
        return;
    }
    if (flgShowToast != 'no-toast') showToast(`\u{110}\xe3 th\xeam ${product.name} v\xe0o gi\u{1ECF} h\xe0ng`, "success", 1500);
    let isChecked = product.isChecked ? product.isChecked : false;
    isChecked = isChecked ? "checked='checked'" : '';
    var catItem = `
    <div class="cart-item" product-id="$$product-id$$">

        <div class="d-flex-a-c">
            <img src="https://picsum.photos/200/300" class="cart-item-img" alt="S\u{1A1}n x\u{1ECB}t">
            <div class="cart-item-info">
                <span class="cart-item-name">$$product-name$$</span>
            </div>
        </div>
        <div class="d-flex-a-c d-flex-j-c">
            <div class="cart-item-price-section">
            <span class="cart-item-price" style="font-size: 14px; text-align: right; width: 70px; margin-right: 4px;">$$item-price$$</span>
            <div class="quantity-control-c4">
                <button class="btn-qty btn-qty-minus">-</button>
                <input type="text" id="input-qty-product-${product.id}" value="$$quantity$$" class="input-qty">
                <button class="btn-qty btn-qty-plus">+</button>
            </div>
            </div>
            <span style="color: var(--bg); margin-left: 10px; margin-right: 10px;"> = </span>
            <span class="cart-item-total-price" style="text-align: right; width: 70px; color: var(--bg); font-size: 14px;">$$total-price$$</span>
            <div class="cart-item-select-action d-flex-a-c">
              <input ${isChecked} class="cart-item-checkbox ml-2" type="checkbox" product-id="$$product-id$$" onclick="cartItemCheckboxClick(this)">
              <div style="width: 15px;"></div>
              <button product-id="$$product-id$$" onclick="cartItemDeleteClick(this)" type="button" class="btn btn-danger">X\xd3A</button>
            </div>
        </div>
    </div>
            `;
    // find trong $(`.cart-list-items`) có cart-item nào có product-id = product.id hay không
    let existingCartItem = $(`.cart-list-items .cart-item[product-id='${product.id}']`);
    // nếu đã tồn tại thì chỉ cần tăng số lượng lên 1 và tính lại tổng tiền cho item đó   S
    if (existingCartItem.length > 0) {
        let txtQuantity = existingCartItem.find(`.quantity-control-c4 .input-qty`);
        let currentQuantity = parseInt(txtQuantity.val());
        currentQuantity++;
        txtQuantity.val(currentQuantity);
        // nếu currentQuantity > 0 thì enabled checkbox
        if (currentQuantity > 0) existingCartItem.find(`.cart-item-checkbox`).prop("disabled", false);
        // calculate total price
        let itemPrice = existingCartItem.find(`.cart-item-price`).text();
        itemPrice = Number(itemPrice.replaceAll(".", "").replace("\u20AB", ""));
        let totalPrice = currentQuantity * itemPrice;
        existingCartItem.find(`.cart-item-total-price`).text(`${totalPrice.formatMoney()}\u{20AB}`);
        cartItemCheckboxClick();
        c_save(saveKEY.cartAllItem);
        return;
    }
    // nếu đã tồn tại thì chỉ cần tăng số lượng lên 1 và tính lại tổng tiền cho item đó   E
    let cartItemRendered = catItem.replaceAll("$$product-name$$", product.name).replaceAll("$$product-id$$", product.id).replaceAll("$$item-price$$", product.price.formatMoney() + "\u20AB").replaceAll("$$quantity$$", product.quantity).replaceAll("$$total-price$$", product.totalPrice.formatMoney() + "\u20AB");
    $(`.cart-list-items`).append(cartItemRendered);
    // ===========================create EVENT button PLUS S
    $(`.cart-item[product-id='${product.id}']`).find(`.btn-qty-plus`).click(function() {
        let txtQuantity = $(this).parents(`.quantity-control-c4`).find(`.input-qty`);
        let currentQuantity = txtQuantity.val();
        currentQuantity++;
        txtQuantity.val(currentQuantity);
        // nếu currentQuantity > 0 thì enabled checkbox
        if (currentQuantity > 0) $(this).parents(`.cart-item`).find(`.cart-item-checkbox`).prop("disabled", false);
        // calculate total price
        let itemPrice = $(this).parents(`.cart-item`).find(`.cart-item-price`).text();
        itemPrice = Number(itemPrice.replaceAll(".", "").replace("\u20AB", ""));
        let totalPrice = currentQuantity * itemPrice;
        $(this).parents(`.cart-item`).find(`.cart-item-total-price`).text(`${totalPrice.formatMoney()}\u{20AB}`);
        cartItemCheckboxClick();
        c_save(saveKEY.cartAllItem);
    });
    // ===========================create EVENT button PLUS E
    // ===========================create EVENT BTN MINUS S
    $(`.cart-item[product-id='${product.id}']`).find(`.btn-qty-minus`).click(function() {
        let txtQuantity = $(this).parents(`.quantity-control-c4`).find(`.input-qty`);
        let currentQuantity = txtQuantity.val();
        currentQuantity--;
        txtQuantity.val(currentQuantity);
        currentQuantity = currentQuantity < 0 ? 0 : currentQuantity;
        $(this).parents(`.quantity-control-c4`).find(`.input-qty`).val(currentQuantity);
        // calculate total price
        let itemPrice = $(this).parents(`.cart-item`).find(`.cart-item-price`).text();
        itemPrice = Number(itemPrice.replaceAll(".", "").replace("\u20AB", ""));
        let totalPrice = currentQuantity * itemPrice;
        $(this).parents(`.cart-item`).find(`.cart-item-total-price`).text(`${totalPrice.formatMoney()}\u{20AB}`);
        // nếu currentQuantity = 0 thì disalbed chekbox
        if (currentQuantity === 0) {
            $(this).parents(`.cart-item`).find(`.cart-item-checkbox`).prop("checked", false);
            $(this).parents(`.cart-item`).find(`.cart-item-checkbox`).prop("disabled", true);
        } else $(this).parents(`.cart-item`).find(`.cart-item-checkbox`).prop("disabled", false);
        cartItemCheckboxClick();
        c_save(saveKEY.cartAllItem);
    });
    // ===========================create EVENT BTN MINUS E
    // =====================create EVENT text change in input quantity  S
    $(`.cart-item[product-id='${product.id}']`).find(`.input-qty`).change(function() {
        let txtQuantity = $(this);
        let currentQuantity = txtQuantity.val();
        if (isNaN(currentQuantity) || currentQuantity < 0) {
            currentQuantity = 0;
            txtQuantity.val(currentQuantity);
        }
        // tính lại tổng tiền
        let itemPrice = $(this).parents(`.cart-item`).find(`.cart-item-price`).text();
        itemPrice = Number(itemPrice.replaceAll(".", "").replace("\u20AB", ""));
        let totalPrice = currentQuantity * itemPrice;
        $(this).parents(`.cart-item`).find(`.cart-item-total-price`).text(`${totalPrice.formatMoney()}\u{20AB}`);
        cartItemCheckboxClick();
    });
    // =====================create EVENT text change in input quantity  E
    c_save(saveKEY.cartAllItem);
}
function cartItemDeleteClick(btn) {
    let productId = $(btn).attr("product-id");
    $(`.cart-list-items .cart-item[product-id='${productId}']`).remove();
    cartItemCheckboxClick();
    c_save(saveKEY.cartAllItem);
    showToast("\u0110\xe3 x\xf3a s\u1EA3n ph\u1EA9m kh\u1ECFi gi\u1ECF h\xe0ng", "success", 800);
}

//# sourceMappingURL=app-code.04174670.js.map
