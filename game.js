function player() {
    this.x = parseInt(localStorage.getItem("x")) || 0;
    this.y = parseInt(localStorage.getItem("y")) || 0;
}

setInterval(function() {
  ctx.fillStyle = "rgb(200, 200, 200)";
  ctx.fillRect(Math.random() * 100, Math.random() * 100, 100, 100);
}, 16);
