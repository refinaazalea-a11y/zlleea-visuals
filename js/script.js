document.addEventListener(
    "DOMContentLoaded",
    function () {
        console.log(
            "Website berhasil dimuat"
        );
    }
);
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        // cek apakah input sudah terisi dengan benar
        const email = document.getElementById("email").value;
        const pesan = document.getElementById("pesan").value;

        if (email.trim() === "" || pesan.trim() === "") {
            alert("Mohon lengkapi semua opsi dengan benar (*).");
            event.preventDefault(); // Mencegah form terkirim jadi kosong
        } else {
            alert("Pilihan berhasil dikirim! Terimakasih sudah memesan di Zlleea Visuals✨");
        }
    });
}