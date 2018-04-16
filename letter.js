//have a bank of words
//var guessesRemaining = 10; var guessesRemaining==
//underscores for the letters in the words
//prompt to guess a letter
//if letter is correct, input into correct spot and show CORRECT!!!
//if letter letter is incorrect, say INCORRECT!!! and number of guesses remaining
//show next word after all guessesRemaining = 0


var Letter = function (char) {
    // this.underscore = "_";
    this.char = char;
    this.isGuessed = false;
}

Letter.prototype.toString = function() {

    if (this.isGuessed === true) {
        return this.char

    } else {
        return "_";
    }
}


Letter.prototype.checker = function(userChar) {
    
    // A function that takes a character as an argument and checks it against the underlying character, 
    // updating the stored boolean value to true if it was guessed correctly
    if (this.char === userChar) {
        this.isGuessed = true;
    } 
        return this.isGuessed;
}

module.exports = Letter;


