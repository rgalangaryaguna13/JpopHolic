// ================================
// FADE IN SAAT PAGE LOAD
// ================================
window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});

// ================================
// JAM REALTIME
// ================================
function updateJam() {
    const jamEl = document.getElementById("jam");
    if (!jamEl) return;

    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");

    jamEl.textContent = `${h}:${m}:${s}`;
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

        document.body.classList.remove("loaded");
        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = tujuan;
        }, 400); // harus sama dgn transition CSS
    });
});

// ================================
// NAV ACTIVE
// ================================
const currentPage = location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});
