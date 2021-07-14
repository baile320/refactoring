const invoices = require('./invoices.json');
const plays = require('./plays.json');
const { statement } = require('./statement.js');

// total output is formatted correctly
const correct_output = `Statement for BigCo\n\tHamlet: $650.00 (55 seats)\n\tAs You Like It: $580.00 (35 seats)\n\tOthello: $500.00 (40 seats)\n\tAmount owed is $1,730.00\nYou earned 47 credits\n`
let test_output = statement(invoices[0], plays)
console.log("Does the output match?", test_output == correct_output);
console.log(test_output);
