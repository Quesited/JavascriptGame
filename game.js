// Start building your game here.
// The canvas and drawing context are ready to use.
const canvas = document.querySelector("#game-canvas");
const context = canvas.getContext("2d");

// Example: draw a small player placeholder in the middle of the canvas.
context.fillStyle = "#38bdf8";
context.fillRect(canvas.width / 2 - 20, canvas.height / 2 - 20, 40, 40);
