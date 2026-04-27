# Rencana Pembuatan Website Portofolio (tesyapermadi.com)

Dokumen ini adalah rencana kerja kita untuk membangun ulang website portofolio Anda menggunakan kode murni (Vanilla HTML, CSS, dan JavaScript). Pendekatan ini memastikan website Anda sangat cepat, ringan, dan mudah disesuaikan (editable) di kemudian hari.

## 1. Desain & Aset
- **Desain:** Menggunakan tema elegan (saya akan buatkan Dark Mode eksklusif, karena sangat cocok untuk Robotic Engineer & Web Developer).
- **Aset (Gambar/Logo):** Saat ini menggunakan tempat kosong (placeholder) yang nanti akan Anda tambahkan/ganti sendiri dengan mudah.
- **Animasi:** Akan ditambahkan animasi transisi dan efek saat halaman digeser (scroll) agar terasa modern.

## 2. Struktur Kode & File

Kita akan bekerja di dalam folder lokal Anda (`h:\My Drive\PROJECT WEB\PERSONAL PORTOFOLIO`). Semua file akan diberi penjelasan (komentar) bahasa Indonesia.

### `index.html`
- **Navigasi (Navbar):** Menu Home, Resume, Portfolio, Contact.
- **Hero Section:** "Hy 👋 I'm Tesya", animasi perkenalan.
- **About/Stats:** Informasi pengalaman & penyelesaian proyek.
- **Resume:** Bagian pengalaman kerja (Mechanical CAD & Robotics).
- **Services & Portfolio:** Daftar layanan dan hasil kerja.
- **Contact & Footer:** Informasi kontak (Email, Telepon).

### `style.css`
Akan menjadi tempat kita mengatur tampilan. Menggunakan **CSS Variables** agar nantinya jika Anda ingin mengganti warna, Anda hanya perlu mengubah satu baris.

### `app.js`
Akan berisi skrip ringan untuk:
- Menu navigasi di HP (Hamburger menu).
- Efek transisi yang halus (Smooth scrolling).
- Animasi muncul saat *scroll* (Fade-in on scroll).

## 3. Rencana Upload ke Hostinger
1. Masuk ke **hPanel (Hostinger Panel)**.
2. Buka **File Manager**.
3. Masuk ke folder `public_html` domain `tesyapermadi.com`.
4. Upload file `index.html`, `style.css`, dan `app.js` ke folder tersebut.
