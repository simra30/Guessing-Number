#! /usr/bin/env node

import inquirer from 'inquirer';
// 1. computer will generate a random number.

//2. user input for a guessing number.

//3.user number and computer number campare
const randomNumber = Math.floor(Math.random()*10+1);
const answer = await inquirer.prompt([
    {
        message: 'please guess a number between 1 - 10: ',
        type: 'number',
        name: 'userGuessedNumber',
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log('congratulation ! You guess a right number :)')
}
else {
    console.log('You guess wrong number :(')
}