// Write a function that will reverse a string
function reverseString(input){
    if(typeof input === 'string'){
        return input.split("").reverse().join("");
    }
}

//Write a function that takes in a string and returns the most common vowel in the string
function mostCommonVowel(str){
    let wordArr = str.split("");
    let newWordArr = wordArr.filter(char => char === 'a' || char === 'e' || char === 'i' || char === 'u')
    return newWordArr.length
}

// console.log(reverseString('kaylah'));