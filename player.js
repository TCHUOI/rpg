function player() {
    this.x = parseInt(localStorage.getItem("x")) || 0;
    this.y = parseInt(localStorage.getItem("y")) || 0;
}
