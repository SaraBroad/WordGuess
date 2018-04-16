var inquirer = require('inquirer');
var Word = require("./word.js");
var words = require("./words.js");


var newWord = new Word("dog");
console.log(newWord.displayWord());
newWord.guesser("s");
console.log(newWord.displayWord());
newWord.guesser("d");
console.log(newWord.displayWord());