const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let t = 0;

function drawWave() {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        for (let x = 0; x < canvas.width; x++) {
            const y = canvas.height / 2 + Math.sin(x * 0.01 + t + i) * 30 * (i + 1);
            ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `hsl(${(t * 10 + i * 40) % 360}, 100%, 60%)`;
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    t += 0.02;
    requestAnimationFrame(drawWave);
}

drawWave();




