function Player() {
    this.pos = new GameVector(parseInt(localStorage.getItem("x")) || 0, parseInt(localStorage.getItem("y")) || 0);

    this.run = function() {
        ctx.ellipse(this.pos.camX, this.pos.camX, 50, 50);
    }
}
