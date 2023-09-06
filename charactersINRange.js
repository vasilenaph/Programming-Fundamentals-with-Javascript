function characterInRange(firstChar, secondChar) {

    let startChar = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let endChar = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
    
    let charArray = [];

    for(let currentChar = startChar + 1; currentChar <= endChar - 1; currentChar++){
        charArray.push(String.fromCharCode(currentChar));
    }

    return charArray.join(' ')

}

console.log(characterInRange('a','d'))