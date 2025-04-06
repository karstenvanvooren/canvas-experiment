const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function randomColor() {
    return `hsl(${Math.random() * 360}, 100%, 60%)`;
}

function drawSpirograph(x, y, R, r, O, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (let t = 0; t <= Math.PI * 20; t += 0.01) {
        const xt = x + (R - r) * Math.cos(t) + O * Math.cos((R - r) / r * t);
        const yt = y + (R - r) * Math.sin(t) - O * Math.sin((R - r) / r * t);
        ctx.lineTo(xt, yt);
    }
    ctx.stroke();
}

function generate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 5 + Math.random() * 5; i++) {
        const R = 100 + Math.random() * 100;
        const r = 20 + Math.random() * 40;
        const O = 40 + Math.random() * 30;
        drawSpirograph(
            canvas.width * Math.random(),
            canvas.height * Math.random(),
            R,
            r,
            O,
            randomColor()
        );
    }
}

generate();
canvas.addEventListener("click", generate);
