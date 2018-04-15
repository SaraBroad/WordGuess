//have a bank of words
//var guessesRemaining = 10; var guessesRemaining==
//underscores for the letters in the words
//prompt to guess a letter
//if letter is correct, input into correct spot and show CORRECT!!!
//if letter letter is incorrect, say INCORRECT!!! and number of guesses remaining
//show next word after all guessesRemaining = 0
//

var Letter = function() {
    this.underscore = "";
    this.guessed = false;
    this.underlyingChar = function() {
        //if letter has been guessed
        //return letter into placeholder space
        //else
        //if letter has not been guessed
        //return underscore placeholder
    }
    this.checker = function(char) {

    }

}

module.exports = Letter;