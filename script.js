function checkPassword() {
    var password = document.getElementById('passwordInput').value.toLowerCase();

    // เปลี่ยนรหัสผ่านตามที่คุณต้องการ
    if (password === 'islam' || password === 'อิสลาม') {
        document.getElementById('imageContainer').innerHTML = '<img src="qrcode_wy.png" alt="รูปภาพ">';
        document.getElementById('imageContainer').style.display = 'block';
    } else {
        alert('รหัสผ่านไม่ถูกต้อง');
    }
}
