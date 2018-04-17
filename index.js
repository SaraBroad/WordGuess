var inquirer = require('inquirer');
var Word = require("./word.js");
var words = require("./words.js");

// index.js: The file containing the logic for the course of the game, which depends on Word.js and:


// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

// var newWord = new Word(wordChoice)

var guesses = 15;
var wordChoices = ["Divided Sky", "Simple", "Squirming Coil", "The Lizards", "Tweezer", "Reba"];
var userGuess = process.argv[2];

function randomWord() {
    var findRandom = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    var nextWord = new Word(findRandom);
    console.log(nextWord);
    var logText = nextWord.wordChoice;
    console.log(logText);
}

randomWord();