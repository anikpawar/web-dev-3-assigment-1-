// CLI Calculator using process.argv

console.log("Calculator Started");

const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

console.log("Operation:", operation);
console.log("Number 1:", num1);
console.log("Number 2:", num2);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Please enter valid numbers.");
} 
else {
    switch (operation) {

        case "add":
            console.log("Result:", num1 + num2);
            break;

        case "subtract":
            console.log("Result:", num1 - num2);
            break;

        case "multiply":
            console.log("Result:", num1 * num2);
            break;

        case "divide":
            if (num2 === 0) {
                console.log("Error: Cannot divide by zero.");
            } else {
                console.log("Result:", num1 / num2);
            }
            break;

        default:
            console.log("Invalid operation.");
            console.log("Use: add, subtract, multiply or divide");
    }
}

console.log("Calculator Finished");