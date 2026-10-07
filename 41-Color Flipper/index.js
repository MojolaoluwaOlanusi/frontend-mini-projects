const colorDisplay = document.getElementById('colorDisplay');
const flipBtn = document.getElementById('flipBtn');
const body = document.body;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

flipBtn.addEventListener('click', () => {
    const newColor = getRandomColor();
    body.style.backgroundColor = newColor;
    colorDisplay.textContent = newColor;
});
