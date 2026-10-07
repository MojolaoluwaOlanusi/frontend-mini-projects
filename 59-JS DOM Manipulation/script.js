function changeText() {
    const textElement = document.getElementById('text-element');
    textElement.textContent = 'Text Changed!';
    textElement.style.background = '#ff6b6b';
}

function changeColor() {
    const colorBox = document.getElementById('color-box');
    const colors = ['#667eea', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.background = randomColor;
}

function addElement() {
    const demo = document.querySelector('.demo');
    const newElement = document.createElement('div');
    newElement.className = 'new-element';
    newElement.textContent = 'New Element Added!';
    demo.appendChild(newElement);
}

function removeElement() {
    const newElements = document.querySelectorAll('.new-element');
    if (newElements.length > 0) {
        const lastElement = newElements[newElements.length - 1];
        lastElement.remove();
    }
}

// Additional DOM manipulation examples
const logDOM = () => {
    console.log('=== DOM Manipulation Examples ===');
    
    // Selecting elements
    const h1 = document.querySelector('h1');
    console.log('Selected h1:', h1.textContent);
    
    // Changing attributes
    const textElement = document.getElementById('text-element');
    textElement.setAttribute('data-custom', 'custom-value');
    console.log('Custom attribute:', textElement.getAttribute('data-custom'));
    
    // Changing styles
    textElement.style.fontSize = '24px';
    
    // Class manipulation
    textElement.classList.add('highlight');
    console.log('Classes:', textElement.className);
};

// Call on load to demonstrate
console.log('DOM loaded successfully');
