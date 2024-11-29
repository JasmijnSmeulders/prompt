const prompt = require("prompt-sync")();
const name = prompt("What is your name?");
const location = prompt("Where were you born?");
const food = prompt("What is your favourite food?");
const summary = `You are ${name}, you were born in ${location}, your favourite food is ${food}.`;
console.log(summary);