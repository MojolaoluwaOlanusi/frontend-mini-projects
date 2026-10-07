function demonstrateArrays() {
    const output = document.getElementById('output');
    
    // Creating arrays
    const fruits = ['apple', 'banana', 'orange', 'grape'];
    const numbers = [1, 2, 3, 4, 5];
    
    let result = '=== Array Operations ===\n\n';
    
    // Basic array operations
    result += 'Original array: ' + JSON.stringify(fruits) + '\n';
    result += 'Array length: ' + fruits.length + '\n';
    result += 'First element: ' + fruits[0] + '\n';
    result += 'Last element: ' + fruits[fruits.length - 1] + '\n\n';
    
    // Array methods
    result += '=== Array Methods ===\n\n';
    result += 'push("mango"): ' + JSON.stringify([...fruits, 'mango']) + '\n';
    result += 'pop(): ' + JSON.stringify(fruits.slice(0, -1)) + '\n';
    result += 'shift(): ' + JSON.stringify(fruits.slice(1)) + '\n';
    result += 'unshift("pear"): ' + JSON.stringify(['pear', ...fruits]) + '\n';
    result += 'slice(1, 3): ' + JSON.stringify(fruits.slice(1, 3)) + '\n';
    result += 'splice(1, 2): ' + JSON.stringify(fruits.filter((_, i) => i < 1 || i >= 3)) + '\n\n';
    
    // Array iteration
    result += '=== Iteration ===\n\n';
    result += 'forEach:\n';
    fruits.forEach((fruit, index) => {
        result += `  ${index}: ${fruit}\n`;
    });
    
    result += '\nmap (x2): ' + JSON.stringify(numbers.map(n => n * 2)) + '\n';
    result += 'filter (even): ' + JSON.stringify(numbers.filter(n => n % 2 === 0)) + '\n';
    result += 'reduce (sum): ' + numbers.reduce((sum, n) => sum + n, 0) + '\n';
    
    output.textContent = result;
}
