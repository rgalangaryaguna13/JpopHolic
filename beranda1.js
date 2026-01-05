// ===== JAM REALTIME =====
const header = document.getElementById("header");

// buat elemen jam
const clock = document.createElement("div");
clock.style.position = "absolute";
clock.style.top = "15px";
clock.style.right = "20px";
clock.style.background = "rgba(255,255,255,0.15)";
clock.style.padding = "8px 14px";
clock.style.borderRadius = "20px";
clock.style.fontSize = "0.9rem";
clock.style.fontWeight = "500";

header.appendChild(clock);

function updateClock() {
    const now = new Date();
    const jam = String(now.getHours()).padStart(2, "0");
    const menit = String(now.getMinutes()).padStart(2, "0");
    const detik = String(now.getSeconds()).padStart(2, "0");

    clock.textContent = `${jam}:${menit}:${detik}`;
}

setInterval(updateClock, 1000);
updateClock();
