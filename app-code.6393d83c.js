const saveKEY={cartItemTableWILLBuy:"cart_ItemTableWILLBuy",cartAllItem:"CART_ALL_ITEM",PAYMENT:"PAYMENT",userLogin:"USER_LOGIN",phone:"phone"};String.prototype.toNumber=function(){var t=this;return isNaN(t=Number(t=t.replaceAll(".","").replace("₫","")))?0:t},Number.prototype.toNumber=function(){var t=this;return!t||isNaN(t=Number(t=t.toString().replaceAll(".","").replace("₫","")))?0:t},String.prototype.formatMoney=function(){let t=Number(this);return isNaN(t)?"0":t.toLocaleString("de-DE")},Number.prototype.formatMoney=function(){let t=Number(this);return isNaN(t)?"0":t.toLocaleString("de-DE")};const getRandom=(t,e)=>Math.floor(Math.random()*(e-t+1))+t;function cartItemCheckboxClick(t){c_save(saveKEY.cartAllItem);let e=$(".cart-list-items .cart-item-checkbox:checked"),r=0,i=$(`
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
        `);e.each(function(){let t=$(this).attr("product-id"),e=$(`.cart-list-items .cart-item[product-id='${t}']`),n=e.find(".cart-item-total-price").text();n=n.toNumber(),r+=n;let o=e.find(".cart-item-name").text(),a=e.find(".quantity-control-c4 .input-qty").val(),c=e.find(".cart-item-price").text();i.find("tbody").append(`
                <tr product-id="${t}">
                  <td>
                    <div class="payment-item-name" style="width: 170px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${o}</div>
                  </td>
                  <td>
                    <div class="payment-item-price" style="width: 70px; text-align: right; margin-left: 4px; margin-right: 4px; font-weight: bold;">${c}</div>
                  </td>
                  <td>
                    <div class="payment-item-quantity text-center" style="width: 32px; font-weight: bold;">${a}</div>
                  </td>
                  <td>
                    <div class="payment-item-total-price text-end w100" style="color: var(--bg); font-size: 14px; font-weight: bold;">${n.formatMoney()}\u{20AB}</div>
                  </td>
                </tr>
          `)}),$(".selected-products").html(""),$(".selected-products").append(i),$(".total-payment").text(`T\u{1ED5}ng thanh to\xe1n: ${r.formatMoney()}\u{20AB}`),$(".cart-item").hover(function(){let t=$(this).attr("product-id");i.find(`tr[product-id='${t}']`).css("background-color","rgba(0, 0, 0, 0.1)")},function(){let t=$(this).attr("product-id");i.find(`tr[product-id='${t}']`).css("background-color","transparent")}),c_save(saveKEY.cartItemTableWILLBuy)}$(function(){let t=document.querySelector(".cart-icon"),e=document.getElementById("cartDropdown"),r=document.getElementById("btnCloseCart");t.addEventListener("click",function(t){window.innerWidth<=768&&(e.classList.add("active"),document.body.style.overflow="hidden")}),r.addEventListener("click",function(t){t.stopPropagation(),e.classList.remove("active"),document.body.style.overflow="auto"})});
//# sourceMappingURL=app-code.6393d83c.js.map
