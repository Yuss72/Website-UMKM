document.getElementById('daftarForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    // Reset alert
    document.getElementById('usernameError1').classList.add('d-none');
    document.getElementById('usernameError2').classList.add('d-none');
    document.getElementById('emailError1').classList.add('d-none');
    document.getElementById('emailError2').classList.add('d-none');
    document.getElementById('passwordError1').classList.add('d-none');
    document.getElementById('passwordError2').classList.add('d-none');
    document.getElementById('passwordError3').classList.add('d-none');
    document.getElementById('passwordError4').classList.add('d-none');

    let valid = true;

    // Validasi Username
    if (username === '') {
        console.log("Username kosong");
        document.getElementById('usernameError1').classList.remove('d-none');
        valid = false;
    } else if (username.length < 5 || username.length > 20) {
        console.log("Username tidak sesuai panjang");
        document.getElementById('usernameError2').classList.remove('d-none');
        valid = false;
    }

    // Validasi Email
    const emailCek = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        console.log("Email kosong");
        document.getElementById('emailError1').classList.remove('d-none');
        valid = false;
    } else if (!emailCek.test(email)) {
        console.log("Email tidak valid");
        document.getElementById('emailError2').classList.remove('d-none');
        valid = false;
    }

    // Validasi Password
    const adaHurufBesar = /[A-Z]/.test(password);
    const adaHurufKecil = /[a-z]/.test(password);
    const adaAngka = /\d/.test(password);

    if (password === '') {
        console.log("Password kosong");
        document.getElementById('passwordError1').classList.remove('d-none');
        valid = false;
    } else if (password.length < 8) {
        console.log("Password kurang dari 8 karakter");
        document.getElementById('passwordError2').classList.remove('d-none');
        valid = false;
    } else if (!adaHurufBesar || !adaHurufKecil) {
        console.log("Password harus ada huruf besar dan kecil");
        document.getElementById('passwordError3').classList.remove('d-none');
        valid = false;
    } else if (!adaAngka) {
        console.log("Password tidak mengandung angka");
        document.getElementById('passwordError4').classList.remove('d-none');
        valid = false;
    }

    if (!valid) {
        console.log("Form tidak valid, tidak dikirim");
        return;
    }

    // Kalau lolos semua validasi
    console.log("Form valid, bisa dikirim ke server");
    alert("Form berhasil dikirim!");
});