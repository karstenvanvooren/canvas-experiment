const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let flames = [];

function spawnFlames() {
    for (let i = 0; i < 20; i++) {
        flames.push({
            x: canvas.width * Math.random(),
            y: canvas.height,
            size: Math.random() * 20 + 10,
            color: `hsl(${Math.random() * 60}, 100%, 50%)`,
            speed: Math.random() * 2 + 1
        });
    }
}

function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    flames.forEach(f => {
        ctx.beginPath();
        ctx.fillStyle = f.color;
        ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
        ctx.fill();
        f.y -= f.speed;
        f.size *= 0.97;
    });

    flames = flames.filter(f => f.size > 1);
    if (Math.random() < 0.5) spawnFlames();
    requestAnimationFrame(draw);
}

draw();



