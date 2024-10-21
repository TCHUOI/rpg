function ellipse(x, y, radiusX, radiusY, rotation) {
    ctx.beginPath();
    ctx.ellipse(x, y, radiusX, radiusY, rotation, 0, 2 * Math.PI);
    ctx.fill();
}
