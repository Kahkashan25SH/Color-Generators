
let colors = ['red', 'green', 'blue', 'yellow', 'pink'];
let currentColor = 0;

function changecolor() {
    document.body.style.backgroundColor = colors[currentColor];
    currentColor = (currentColor + 1) % colors.length;
}
setInterval(changecolor, 5000); // Change color every 5 seconds


