let canvas = document.getElementById("canvi");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

var mouseX = 0;
var mouseY = 0;
var dragged = false;
var clicked = false
var keys = [];

canvas.addEventListener("mousemove", function(e) {
    var cRect = canvas.getBoundingClientRect();
    mouseX = Math.round(e.clientX - cRect.left);
    mouseY = Math.round(e.clientY - cRect.top);
});
canvas.addEventListener("mousedown", function(e) {
    dragged = true;
}, false);
canvas.addEventListener("mouseup", function(e) {
    if(dragged === true) {
        clicked = true;
        dragged = false;
    }
}, false);
window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);
function keysPressed(e) {
    // store an entry for every key pressed
    keys[e.keyCode] = true;
    e.preventDefault();
}
function keysReleased(e) {
    // mark keys that were released
    keys[e.keyCode] = false;
}

function coonnection() {
    constructor(weight) {
        this.weight = 0;
    } 
}

function nueron() {
    constructor(bias) {
        this.bias = bias;
    }
}

function layer() {
    this.nuerons = [];
    constructor(nuerons, nextLayer) {
        for(let i = 0; i < nuerons; i++) {
            this.nuerons.push(new nueron(-0.5 + Math.random(), nextLayer));
        }
    }
}

function network() {
    this.layers = [];
    constructor(layers) {
        for(let i = 0; i < layers.length; i++) {
            layers.push(new layer(layers[i], layers[i + 1]));
        }
    }
}

let sampleNetwork = new network([2, 2]);

setInterval(function() {
  ctx.fillStyle = "rgb(200, 200, 200)";
  ctx.fillRect(Math.random() * 100, Math.random() * 100, 100, 100);
}, 16);
