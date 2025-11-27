function fibonacciGenerator(n) {
    // Create an empty array to store the sequence
    var output = [];

    // Handle the base case where n is 1: return only the first number [0]
    if (n === 1) {
        output = [0];
    }
    // Handle the base case where n is 2: return the first two numbers [0, 1]
    else if (n === 2) {
        output = [0, 1];
    }
    // For n > 2, generate the rest of the sequence
    else {
        output = [0, 1];

        // Loop starting from the 3rd number (index 2) up to n
        // Calculate the next number by summing the previous two numbers
        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }

    // Return the completed Fibonacci sequence
    return output;
}

console.log(fibonacciGenerator(11))