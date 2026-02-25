function showToast(e,t="success",s=2e3){let o=document.getElementById("toast-container");if(!o)return void console.error("Toast container not found. Please ensure there is a div with id 'toast-container' in your HTML.");let n=document.createElement("div");n.className=`custom-toast toast-${t}`,n.innerHTML=`
        <span style="font-size: 15px;">${e}</span>
        <span  style="font-size: 15px;"class="btn-close-toast">&times;</span>
    `,o.appendChild(n),n.querySelector(".btn-close-toast").onclick=()=>{n.remove()},setTimeout(()=>{n.parentNode&&(n.style.animation="slideIn 0.3s ease-in reverse forwards",setTimeout(()=>n.remove(),300))},s)}window.showToast=showToast;
//# sourceMappingURL=app-code.ce416f45.js.map
