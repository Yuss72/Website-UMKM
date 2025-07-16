document.getElementById('kontakForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form reload

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;

    // Reset semua pesan error dan alert
    document.getElementById('emailError').classList.add('d-none');
    document.getElementById('usernameError').classList.add('d-none');
    document.getElementById('pesanError').classList.add('d-none');

    let valid = true;

    // Validasi input kosong
    if (username === '') {
        document.getElementById('usernameError').classList.remove('d-none');
        console.log("Nama kosong");
        valid = false;
    }

    if (email === '') {
        document.getElementById('emailError').classList.remove('d-none');
        console.log("email kosong");
        valid = false;
    }

    if (pesan.length < 5 || pesan.length > 20) {
        console.log("Pesan tidak sesuai panjang");
        document.getElementById('pesanError').classList.remove('d-none');
        valid = false;
    }

    if (!valid) {
        console.log("Form tidak valid, login gagal.");
        return;
    }

    console.log("Memproses pesan...");
    alert("Pesan berhasil dikirim!");
});