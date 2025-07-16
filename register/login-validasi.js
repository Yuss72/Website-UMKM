document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form reload

    const username_email = document.getElementById('username-email').value.trim();
    const password = document.getElementById('password').value;

    // Reset semua pesan error dan alert
    document.getElementById('passwordError').classList.add('d-none');
    document.getElementById('usernameError').classList.add('d-none');

    document.getElementById('errorAlert').classList.add('d-none');
    document.getElementById('errorAlert').innerHTML = '';

    document.getElementById('successAlert').classList.add('d-none');
    document.getElementById('successAlert').innerHTML = '';

    let valid = true;

    // Validasi input kosong
    if (username_email === '') {
        document.getElementById('usernameError').classList.remove('d-none');
        console.log("Username/email kosong");
        valid = false;
    }

    if (password === '') {
        document.getElementById('passwordError').classList.remove('d-none');
        console.log("Password kosong");
        valid = false;
    }

    if (!valid) {
        console.log("Form tidak valid, login gagal.");
        return;
    }

    console.log("Memproses login...");

    // Simulasi cek login
    if (username_email === 'admin' && password === '12345') {
        document.getElementById('successAlert').innerHTML = `
            Berhasil login!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
        document.getElementById('successAlert').classList.remove('d-none');
        console.log("Login berhasil");
    } else {
        document.getElementById('errorAlert').innerHTML = `
            Username atau Password salah!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
        document.getElementById('errorAlert').classList.remove('d-none');
        console.log("Login gagal: akun tidak ditemukan");
    }
});