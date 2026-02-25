function renderHTMLProduct_event_btn_addToCart_BuyNow(){for(let e=0;e<DB.products.length;e++){var t=`
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
         `;let c=DB.products[e],a=t.replaceAll("$$product-id$$",c.id).replaceAll("$$product-name$$",c.name).replaceAll("$$price$$",c.price.formatMoney()).replaceAll("$$sold$$",c.sold);$(".product-grid").append(a),$(`.btn-buy-now[product-id="${c.id}"]`).click(function(){btnBuyNowClick(c)}),$(`.btn-add-to-cart[product-id="${c.id}"]`).click(function(){c.quantity=1,c.totalPrice=c.price,btnAddToCartClick(c)})}}function btnBuyNowClick(t){if(!c_load(saveKEY.userLogin)){showToast("Vui lòng đăng nhập để mua hàng","error",2e3),c_openModal("modalLoginForm");return}}function btnAddToCartClick(t,e){if(!c_load(saveKEY.userLogin)){showToast("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng","error",2e3),c_openModal("modalLoginForm");return}"no-toast"!=e&&showToast(`\u{110}\xe3 th\xeam ${t.name} v\xe0o gi\u{1ECF} h\xe0ng`,"success",1500);let c=!!t.isChecked&&t.isChecked;c=c?"checked='checked'":"";var a=`
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
                <input type="text" id="input-qty-product-${t.id}" value="$$quantity$$" class="input-qty">
                <button class="btn-qty btn-qty-plus">+</button>
            </div>
            </div>
            <span style="color: var(--bg); margin-left: 10px; margin-right: 10px;"> = </span>
            <span class="cart-item-total-price" style="text-align: right; width: 70px; color: var(--bg); font-size: 14px;">$$total-price$$</span>
            <div class="cart-item-select-action d-flex-a-c">
              <input ${c} class="cart-item-checkbox ml-2" type="checkbox" product-id="$$product-id$$" onclick="cartItemCheckboxClick(this)">
              <div style="width: 15px;"></div>
              <button product-id="$$product-id$$" onclick="cartItemDeleteClick(this)" type="button" class="btn btn-danger">X\xd3A</button>
            </div>
        </div>
    </div>
            `;let i=$(`.cart-list-items .cart-item[product-id='${t.id}']`);if(i.length>0){let t=i.find(".quantity-control-c4 .input-qty"),e=parseInt(t.val());e++,t.val(e),e>0&&i.find(".cart-item-checkbox").prop("disabled",!1);let c=i.find(".cart-item-price").text(),a=e*(c=Number(c.replaceAll(".","").replace("₫","")));i.find(".cart-item-total-price").text(`${a.formatMoney()}\u{20AB}`),cartItemCheckboxClick(),c_save(saveKEY.cartAllItem);return}let r=a.replaceAll("$$product-name$$",t.name).replaceAll("$$product-id$$",t.id).replaceAll("$$item-price$$",t.price.formatMoney()+"₫").replaceAll("$$quantity$$",t.quantity).replaceAll("$$total-price$$",t.totalPrice.formatMoney()+"₫");$(".cart-list-items").append(r),$(`.cart-item[product-id='${t.id}']`).find(".btn-qty-plus").click(function(){let t=$(this).parents(".quantity-control-c4").find(".input-qty"),e=t.val();e++,t.val(e),e>0&&$(this).parents(".cart-item").find(".cart-item-checkbox").prop("disabled",!1);let c=$(this).parents(".cart-item").find(".cart-item-price").text(),a=e*(c=Number(c.replaceAll(".","").replace("₫","")));$(this).parents(".cart-item").find(".cart-item-total-price").text(`${a.formatMoney()}\u{20AB}`),cartItemCheckboxClick(),c_save(saveKEY.cartAllItem)}),$(`.cart-item[product-id='${t.id}']`).find(".btn-qty-minus").click(function(){let t=$(this).parents(".quantity-control-c4").find(".input-qty"),e=t.val();e--,t.val(e),e=e<0?0:e,$(this).parents(".quantity-control-c4").find(".input-qty").val(e);let c=$(this).parents(".cart-item").find(".cart-item-price").text(),a=e*(c=Number(c.replaceAll(".","").replace("₫","")));$(this).parents(".cart-item").find(".cart-item-total-price").text(`${a.formatMoney()}\u{20AB}`),0===e?($(this).parents(".cart-item").find(".cart-item-checkbox").prop("checked",!1),$(this).parents(".cart-item").find(".cart-item-checkbox").prop("disabled",!0)):$(this).parents(".cart-item").find(".cart-item-checkbox").prop("disabled",!1),cartItemCheckboxClick(),c_save(saveKEY.cartAllItem)}),$(`.cart-item[product-id='${t.id}']`).find(".input-qty").change(function(){let t=$(this),e=t.val();(isNaN(e)||e<0)&&(e=0,t.val(e));let c=$(this).parents(".cart-item").find(".cart-item-price").text(),a=e*(c=Number(c.replaceAll(".","").replace("₫","")));$(this).parents(".cart-item").find(".cart-item-total-price").text(`${a.formatMoney()}\u{20AB}`),cartItemCheckboxClick()}),c_save(saveKEY.cartAllItem)}function cartItemDeleteClick(t){let e=$(t).attr("product-id");$(`.cart-list-items .cart-item[product-id='${e}']`).remove(),cartItemCheckboxClick(),c_save(saveKEY.cartAllItem),showToast("Đã xóa sản phẩm khỏi giỏ hàng","success",800)}
//# sourceMappingURL=app-code.236da1bc.js.map
