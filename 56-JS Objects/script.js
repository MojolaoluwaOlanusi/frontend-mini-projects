function demonstrateObjects() {
    const output = document.getElementById('output');
    
    // Creating objects
    const person = {
        name: 'John Doe',
        age: 30,
        city: 'New York',
        skills: ['JavaScript', 'Python', 'CSS']
    };
    
    let result = '=== Object Operations ===\n\n';
    
    // Basic object operations
    result += 'Object: ' + JSON.stringify(person, null, 2) + '\n\n';
    result += 'Access name: ' + person.name + '\n';
    result += 'Access age: ' + person.age + '\n';
    result += 'Access skills: ' + JSON.stringify(person.skills) + '\n\n';
    
    // Object methods
    result += '=== Object Methods ===\n\n';
    result += 'Object.keys(): ' + JSON.stringify(Object.keys(person)) + '\n';
    result += 'Object.values(): ' + JSON.stringify(Object.values(person)) + '\n';
    result += 'Object.entries(): ' + JSON.stringify(Object.entries(person)) + '\n\n';
    
    // Adding/modifying properties
    person.email = 'john@example.com';
    result += 'Added email: ' + person.email + '\n';
    
    person.age = 31;
    result += 'Modified age: ' + person.age + '\n';
    
    delete person.city;
    result += 'Deleted city\n\n';
    
    // Object iteration
    result += '=== Iteration ===\n';
    for (const [key, value] of Object.entries(person)) {
        result += `${key}: ${value}\n`;
    }
    
    output.textContent = result;
}
