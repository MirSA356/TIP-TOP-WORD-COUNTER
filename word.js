#! /usr/bin/env node
import inquirer from "inquirer";
const userInput = await inquirer.prompt({
    type: "input",
    name: "paragraph",
    message: "Enter your paragraph to count words"
});
const paraInput = userInput.paragraph;
// FOR COUNTING LETTERS IN PARAGRAPH
const letterWithoutSpace = paraInput.replace(/\s/g, "");
const letterCount = letterWithoutSpace.length;
// console.log(letterCount);
// for counting words
const wordsArray = paraInput.split(" ");
const wordsCount = wordsArray.length;
console.log(`Total letters in your paragraph are ${letterCount} and total words are ${wordsCount}`);
