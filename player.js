function player() {
    this.pos = new GameVector(parseInt(localStorage.getItem("x")) || 0, parseInt(localStorage.getItem("y")) || 0);

    this.run = function() {
        ctx.ellipse(this.x, this.y, 0, 0);
    }
}
