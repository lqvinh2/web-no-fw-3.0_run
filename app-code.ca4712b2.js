function btnShowPOClick(t){let e=t.innerText;t.innerText="Đang xử lý...",t.disabled=!0,api_getPO_ByPhone_Async(c_get_user_phone()).then(d=>{d?.success&&(render_modalShowPO(d.results),c_openModal("modalShowPO")),t.innerText=e,t.disabled=!1})}function render_table_modalShowPO(t){let e=$(`
            <table class="table-border w100">
                <thead>
                    <tr>
                      <td class="text-center" style="width: 50px;">STT</td>
                      <td class="text-center" style="width: 70px;">M\xe3 \u{110}\u{1A1}n H\xe0ng</td>
                      <td class="text-center" style="width: 45px;">S\u{1ED1} l\u{1B0}\u{1EE3}ng SP</td>
                      <td class="text-center">T\u{1ED5}ng ti\u{1EC1}n</td>
                      <td class="text-center" style="width: 50px;">XEM</td>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        `);return t.forEach((t,d)=>{e.find("tbody").append(`
                <tr po-id="${t.id}">
                  <td>
                    <div class="po-stt" style=" overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${d+1}</div>
                  </td>
                  <td>
                    <div class="po-id" style=" text-align: center; margin-left: 4px; margin-right: 4px; font-weight: bold;">${t.id}</div>
                  </td>
                  <td>
                    <div class="po-count-product text-center" style=" font-weight: bold;">${t.info.length}</div>
                  </td>
                  <td>
                    <div class="po-total-payment text-end" style="color: var(--bg); font-size: 14px; font-weight: bold;">${t.totalPrice.formatMoney()}\u{20AB}</div>
                  </td>

                   <td>
                    <div class="po-goto-detail text-end" style="color: var(--bg); font-size: 14px; font-weight: bold;">
                        <button onclick='event.preventDefault(); showPODetailByID("${t.id}"); '>Chi Ti\u{1EBF}t</button>
                    </div>
                  </td>

                </tr>
          `)}),e}function render_modalShowPO(t){if(!t||t?.length<=0)return;$(".modalShowPO_wrap").html(""),t.forEach(t=>{let e=c_decodeBase64(t.info);e&&(e=JSON.parse(e)),e||(e=[{totalPrice:0}]),t.info=e;let d=t.info.reduce((t,e)=>t+e.totalPrice,0);t.totalPrice=d});let e=render_table_modalShowPO(t);$(".modalShowPO_wrap").append(e)}function showPODetailByID(t){$(".PODetailTitle").html(`Chi Ti\u{1EBF}t \u{110}\u{1A1}n H\xe0ng : ${t}`),c_openModal("modalShowPO_detail"),$(".modalShowPODetail_wrap").html("");let e=c_get_user_phone(),d=[];api_getPO_ByPhone_Async(e).then(e=>{if(e.success){let o=c_decodeBase64((d=e.results.find(e=>e.id==t)).info);o&&(o=JSON.parse(o)),o||(o=[]),d.info=o;let l=showPODetailByID_TABLE(d);$(".modalShowPODetail_wrap").append(l)}else showToast("Lấy thông tin lỗi, hãy thử lại");console.log(e)})}function showPODetailByID_TABLE(t){let e=$(`
            <table class="table-border">
                <thead>
                    <tr>
                      <td class="text-center" style="width: 50px;">STT</td>
                      <td class="text-center" style="width: 50px;">M\xe3 SP</td>
                      <td class="text-center" style="width: 270px;">T\xean SP</td>
                      <td class="text-center" style="width: 45px;">S\u{1ED1} l\u{1B0}\u{1EE3}ng</td>
                      <td class="text-center" style="width: 45px;">Gi\xe1</td>
                      <td class="text-center" style="width: 45px;">T\u{1ED3}ng Ti\u{1EC1}n</td>
                      
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        `),d=t.info.reduce((t,e)=>t+e.totalPrice,0);return t.info.forEach((t,d)=>{e.find("tbody").append(`
                <tr product-id="${t.id}">
                  <td>
                    <div class="text-center po-detail-product-stt" style="overflow: hidden; white-space: nowrap;">${d+1}</div>
                  </td>
                  <td>
                    <div class="po-detail-product-id text-center" style=" text-align: right; margin-left: 4px; margin-right: 4px; font-weight: bold;">${t.productId}</div>
                  </td>
                  <td>
                    <div class="po-detail-product-name text-left" style=" font-weight: bold;">${t.name}</div>
                  </td>
                  <td>
                    <div class="po-detail-product-quantity text-end" style="color: var(--bg); font-size: 14px;">${t.quantity}</div>
                  </td>

                   <td>
                    <div class="po-detail-product-price text-end w100" style="color: var(--bg); font-size: 14px; font-weight: bold;">
                     ${t.price.formatMoney()}\u{20AB}
                    </div>
                  </td>

                  <td>
                    <div class="po-detail-product-total text-end" style="color: var(--bg); font-size: 14px; font-weight: bold;">${t.totalPrice.formatMoney()}\u{20AB}</div>
                  </td>


                </tr>


          `)}),e.find("tbody").append(`
                  <tr>
                  <td colspan=6>
                      <div>
                        <div class="po-detail-product-quantity text-end" style="color: var(--bg); font-size: 14px;">${d.formatMoney()}\u{20AB}</div>
                      </div>
                  </td>
                </tr>
  `),e}
//# sourceMappingURL=app-code.ca4712b2.js.map
