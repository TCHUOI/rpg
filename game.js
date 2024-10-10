let canvas = document.getElementById("canvi");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

setInterval(function() {
  ctx.fillStyle = "rgb(200, 200, 200)";
  ctx.fillRect(Math.random() * 100, Math.random() * 100, 100, 100);
}, 16);
