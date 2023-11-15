function checkPassword() {
    var password = document.getElementById('passwordInput').value.toLowerCase();

    // เปลี่ยนรหัสผ่านตามที่คุณต้องการ
    if (password === '24' || password === 'ยี่สิบสี่') {
        document.getElementById('imageContainer').innerHTML = '<img src="qrcode_wy.png" alt="รูปภาพ">';
        document.getElementById('imageContainer').style.display = 'block';
    } else {
        alert('คำตอบไม่ถูกต้อง');
    }
}
