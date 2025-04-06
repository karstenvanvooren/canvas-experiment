const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let targets = [];

canvas.addEventListener("click", (e) => {
    targets.push({ x: e.clientX, y: e.clientY, r: 0 });
});

function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    targets.forEach(t => {
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.r, 0, Math.PI * 2);
        ctx.strokeStyle = `hsl(${t.r * 10 % 360}, 100%, 50%)`;
        ctx.lineWidth = 4;
        ctx.stroke();
        t.r += 2;
    });

    targets = targets.filter(t => t.r < 100);
    requestAnimationFrame(draw);
}

draw();




