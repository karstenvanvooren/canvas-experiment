const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawFlowField() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const spacing = 20;
    for (let y = 0; y < canvas.height; y += spacing) {
        for (let x = 0; x < canvas.width; x += spacing) {
            const angle = Math.random() * Math.PI * 2;
            const length = 10 + Math.random() * 10;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
            ctx.strokeStyle = `rgba(0,0,0,0.2)`;
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    }
}

drawFlowField();
canvas.addEventListener("click", drawFlowField);



