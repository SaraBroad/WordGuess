var Letter = require("./letter.js");


var Word = function(wordChoice) {
    this.wordChoice = wordChoice;
    this.letters = [new Letter("d"), new Letter("o"), new Letter("g")];

}

Word.prototype.displayWord = function() {
    return this.letters.join(" ");
}

// A function that takes a character as an argument 
// and calls the guess function on each letter object (the second function defined in Letter.js)

Word.prototype.guesser = function(char) {
    var isCorrect = false
    for (var i = 0; i < this.letters.length; i++) {
        var letter = this.letters[i];
        if (letter.checker(char)) {
            isCorrect = true;
        }
    }
    return isCorrect;
}

module.exports = Word;