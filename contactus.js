// JAM REALTIME
function updateJam() {
    const jam = document.getElementById("jam");
    if (!jam) return;

    const now = new Date();
    jam.textContent =
        String(now.getHours()).padStart(2, "0") + ":" +
        String(now.getMinutes()).padStart(2, "0") + ":" +
        String(now.getSeconds()).padStart(2, "0");
}
setInterval(updateJam, 1000);
updateJam();

// TRANSISI PAGE
document.querySelectorAll("a[data-link]").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const href = link.getAttribute("href");

        if (link.classList.contains("nav-next")) {
            document.body.classList.add("slide-left");
        } else if (link.classList.contains("nav-prev")) {
            document.body.classList.add("slide-right");
        } else {
            document.body.classList.add("fade-out");
        }

        setTimeout(() => {
            window.location.href = href;
        }, 400);
    });
});

// FORM SIMULASI
document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    alert("Pesan berhasil dikirim (simulasi) 📩");
    e.target.reset();
});
