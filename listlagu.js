// ================================
// JAM REALTIME
// ================================
function updateJam() {
    const jam = document.getElementById("jam");
    if (!jam) return;

    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");

    jam.textContent = `${h}:${m}:${s}`;
}

setInterval(updateJam, 1000);
updateJam();

// ================================
// FADE OUT SAAT PINDAH PAGE
// ================================
document.querySelectorAll("a[data-link]").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const tujuan = link.getAttribute("href");

        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = tujuan;
        }, 400);
    });
});
