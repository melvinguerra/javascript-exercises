const palindromes = function (word) {
    word = removePunctuationAndSpaces(word).toLowerCase();
    for(let i = 0, j = word.length-1; i < word.length-1; i++,j--){
        if(word[i] !== word[j]){
            return false;
        }
    }
    return true;
};

function removePunctuationAndSpaces(input) {
    return input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s']/g, "");
}

// Do not edit below this line
module.exports = palindromes;
