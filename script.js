window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading');
    // Menghilangkan loading setelah 1.5 detik
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => loadingScreen.style.display = 'none', 800);
    }, 1500);
});

const openBtn = document.getElementById('openBtn');
const letterSection = document.getElementById('letter');
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
let heartInterval;

// Fungsi Membuka Surat
openBtn.addEventListener('click', () => {
    letterSection.style.display = 'block';
    // Scroll mulus ke bagian surat
    letterSection.scrollIntoView({ behavior: 'smooth' });
    openBtn.style.display = 'none'; // Sembunyikan tombol 'buka'
    
    // Mulai efek hujan hati terus-menerus
    heartInterval = setInterval(createHeart, 250);
});

// Kontrol Tombol Musik
musicBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play().then(() => {
            musicBtn.innerHTML = '⏸️ pause our song';
        }).catch(err => {
            alert("Harap berikan izin browser untuk memutar musik ya sayang.");
        });
    } else {
        bgMusic.pause();
        musicBtn.innerHTML = '🎵 play our song';
    }
});

// Generator Hujan Hati
function createHeart() {
    const heartContainer = document.getElementById('hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart-drop');
    
    // Pilih emoji hati acak
    const heartTypes = ['❤️', '💖', '💗', '🤍', '💕'];
    heart.innerText = heartTypes[Math.floor(Math.random() * heartTypes.length)];
    
    // Posisi horizontal acak, ukuran acak, durasi jatuh acak
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 18 + 12 + 'px';
    const duration = Math.random() * 3 + 2; 
    heart.style.animationDuration = duration + 's';
    
    heartContainer.appendChild(heart);
    
    // Hapus hati setelah selesai jatuh
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}
