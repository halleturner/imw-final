const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function resizeCanvas() {
    canvas.width = 1113;
    canvas.height = 878;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Set initial canvas size to full window

// Set up the initial text
var text = 'CLEAR';
var x = 50;
var y = 50;

// Function to draw the text on the canvas
function drawText() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.fillText(text, x, y); // Draw the text
}

// Initial draw
drawText();

// Add click event listener to the canvas
canvas.addEventListener('click', function (event) {
    var rect = canvas.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;

    // Check if the click happened within the bounds of the text
    if (mouseX > x && mouseX < x + ctx.measureText(text).width && mouseY > y - 20 && mouseY < y) {
        // If clicked on the text, make it disappear
        text = ''; // Set text to empty string
        drawText(); // Redraw the canvas
    }
})

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        drawLine(lastX, lastY, e.offsetX, e.offsetY);
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }
});

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.strokeStyle = '#fff'; // Line color
    ctx.lineWidth = 2; // Line width
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}
