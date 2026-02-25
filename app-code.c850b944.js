function showToast(message, type = 'success', duration = 2000) {
    // 1. Kiểm tra/Tạo container nếu chưa có
    let container = document.getElementById('toast-container');
    if (!container) {
        console.error("Toast container not found. Please ensure there is a div with id 'toast-container' in your HTML.");
        return;
    }
    // 2. Tạo element toast mới
    const toast = document.createElement('div');
    toast.className = `custom-toast toast-${type}`;
    toast.innerHTML = `
        <span style="font-size: 15px;">${message}</span>
        <span  style="font-size: 15px;"class="btn-close-toast">&times;</span>
    `;
    // 3. Thêm vào container
    container.appendChild(toast);
    // 4. Xử lý nút đóng
    toast.querySelector('.btn-close-toast').onclick = ()=>{
        toast.remove();
    };
    // 5. Tự động xóa sau khoảng thời gian (duration)
    setTimeout(()=>{
        if (toast.parentNode) {
            toast.style.animation = "slideIn 0.3s ease-in reverse forwards"; // Hiệu ứng biến mất
            setTimeout(()=>toast.remove(), 300);
        }
    }, duration);
}
// "Phơi" ra global
window.showToast = showToast;

//# sourceMappingURL=app-code.c850b944.js.map
