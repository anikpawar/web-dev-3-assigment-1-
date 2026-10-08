const crypto = require("crypto");

console.log("Dice Simulator Started");

function rollDice() {

    const randomNumber = crypto.randomInt(1, 7);

    return randomNumber;
}

const numberOfRolls = 5;

for (let i = 1; i <= numberOfRolls; i++) {

    const diceValue = rollDice();

    console.log(`Roll ${i}: Dice Rolled: ${diceValue}`);
}

console.log("Dice Simulator Finished");