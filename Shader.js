const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let x = 1
let y = 1
let intervalCode = 0;
intervalCode = setInterval(animate, 1000 / 60);

function animate() {
    console.log(y)
    console.log(x)
    y += Math.sin(x*102) * 150
    x += Math.sin(7 * 2)
    ctx.fillStyle = '#000'
    ctx.fillRect(x, y, 5, 5);
    y /= 100
    x-100;
}