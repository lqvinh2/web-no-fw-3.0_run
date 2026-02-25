function cart_renderCartByUser(){if(!c_is_user_has_login())return;let t=c_load(saveKEY.cartAllItem);c_load(saveKEY.cartItemTableWILLBuy),t&&t.length>0&&t.forEach(t=>{t.id=t.productId,btnAddToCartClick(t,"no-toast")}),cartItemCheckboxClick()}
//# sourceMappingURL=app-code.a39d6aea.js.map
