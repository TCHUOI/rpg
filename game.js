setInterval(function() {
    ctx.fillStyle = "rgb(200, 200, 200)";
    ctx.fillRect(Math.random() * 100, Math.random() * 100, 100, 100);

    player.run();
}, 16);
