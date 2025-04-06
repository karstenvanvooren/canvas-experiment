const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = canvas.height = window.innerHeight;

const colors = ["white", "black", "red", "blue", "yellow"];

function drawMondriaan() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const step = 100;
    for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 4;
        ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    for (let i = 0; i < 30; i++) {
        const x = Math.floor(Math.random() * canvas.width / step) * step;
        const y = Math.floor(Math.random() * canvas.height / step) * step;
        const w = step * (1 + Math.floor(Math.random() * 3));
        const h = step * (1 + Math.floor(Math.random() * 3));
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillRect(x, y, w, h);
    }
}

drawMondriaan();
canvas.addEventListener("click", drawMondriaan);



