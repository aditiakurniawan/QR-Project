const dataInput = document.getElementById('data');
const generateButton = document.getElementById('generate');
const qrcodeContainer = document.getElementById('qrcode');

generateButton.addEventListener('click', () => {
    const data = dataInput.value;
    if (data) {
        // Gunakan qrcode.js
        new QRCode(qrcodeContainer, {
            text: data,
            width: 256,
            height: 256
        });

        // Atau, jika menggunakan API, kirim data ke API dan tampilkan hasilnya
    } else {
        alert('Silakan masukkan data!');
    }
});