// Write a function that will reverse a string
function reverseString(input){
    if(typeof input === 'string'){
        return input.split("").reverse().join("");
    }
}

// console.log(reverseString('kaylah'));