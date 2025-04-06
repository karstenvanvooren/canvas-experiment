const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function randomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

function drawCircles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const count = 200;
    for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 40;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = randomColor();
        ctx.fill();
    }
}

drawCircles();
canvas.addEventListener("click", drawCircles);

