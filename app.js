// Fungsi untuk Navigasi Menu Global (Pindah dari Home ke Resume)
function navigatePage(pageId) {
  // Matikan semua section halaman
  document.querySelectorAll('.page-section').forEach(page => {
    page.classList.remove('active');
  });
  
  // Nyalakan section halaman yang dituju
  document.getElementById(pageId).classList.add('active');
}

// Fungsi untuk Navigasi Tab di dalam Resume
function switchTab(tabId, clickedBtn) {
  // Matikan semua tombol tab
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  // Matikan semua konten panel
  document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
  
  // Nyalakan tombol yang diklik dan konten panelnya
  clickedBtn.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}