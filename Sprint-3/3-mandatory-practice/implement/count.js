function countChar(stringOfCharacters, findCharacter) {
    //return 5

    return stringOfCharacters.split(findCharacter).length - 1;
}

module.exports = countChar;