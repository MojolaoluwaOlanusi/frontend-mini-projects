function demonstrateLoops() {
    const output = document.getElementById('output');
    const numbers = [1, 2, 3, 4, 5];
    
    let result = '=== Loop Types ===\n\n';
    
    // For loop
    result += '=== For Loop ===\n';
    for (let i = 0; i < numbers.length; i++) {
        result += `Index ${i}: ${numbers[i]}\n`;
    }
    result += '\n';
    
    // For...of loop
    result += '=== For...of Loop ===\n';
    for (const num of numbers) {
        result += `Number: ${num}\n`;
    }
    result += '\n';
    
    // For...in loop
    result += '=== For...in Loop ===\n';
    for (const index in numbers) {
        result += `Index ${index}: ${numbers[index]}\n`;
    }
    result += '\n';
    
    // While loop
    result += '=== While Loop ===\n';
    let i = 0;
    while (i < numbers.length) {
        result += `Number: ${numbers[i]}\n`;
        i++;
    }
    result += '\n';
    
    // Do...while loop
    result += '=== Do...while Loop ===\n';
    i = 0;
    do {
        result += `Number: ${numbers[i]}\n`;
        i++;
    } while (i < numbers.length);
    result += '\n';
    
    // Array methods as loops
    result += '=== Array Methods ===\n';
    result += 'forEach:\n';
    numbers.forEach((num, index) => {
        result += `  ${index}: ${num}\n`;
    });
    
    output.textContent = result;
}
