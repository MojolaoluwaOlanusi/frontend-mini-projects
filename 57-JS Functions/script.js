// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Function with default parameters
const power = (base, exponent = 2) => Math.pow(base, exponent);

// Higher-order function
const createMultiplier = (factor) => {
    return (number) => number * factor;
};

function demonstrateFunctions() {
    const output = document.getElementById('output');
    
    let result = '=== Function Types ===\n\n';
    
    // Function declaration
    result += 'Function Declaration:\n';
    result += `greet("Alice"): ${greet("Alice")}\n\n`;
    
    // Function expression
    result += 'Function Expression:\n';
    result += `add(5, 3): ${add(5, 3)}\n\n`;
    
    // Arrow function
    result += 'Arrow Function:\n';
    result += `multiply(4, 6): ${multiply(4, 6)}\n\n`;
    
    // Default parameters
    result += 'Default Parameters:\n';
    result += `power(3): ${power(3)}\n`;
    result += `power(3, 3): ${power(3, 3)}\n\n`;
    
    // Higher-order function
    result += 'Higher-Order Function:\n';
    const double = createMultiplier(2);
    const triple = createMultiplier(3);
    result += `double(5): ${double(5)}\n`;
    result += `triple(5): ${triple(5)}\n\n`;
    
    // Callback function
    result += 'Callback Function:\n';
    const processArray = (arr, callback) => {
        return arr.map(callback);
    };
    const numbers = [1, 2, 3, 4, 5];
    result += `processArray([1,2,3,4,5], x => x * 2): ${JSON.stringify(processArray(numbers, x => x * 2))}\n`;
    
    output.textContent = result;
}
