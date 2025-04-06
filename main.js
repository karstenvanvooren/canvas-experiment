const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawLines() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 500; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.strokeStyle = `rgba(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, 0.2)`;
        ctx.lineWidth = Math.random() * 2;
        ctx.stroke();
    }
}

drawLines();
canvas.addEventListener("click", drawLines);


