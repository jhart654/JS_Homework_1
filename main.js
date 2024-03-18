// Exercise #1

let dog_string = 'Hello Max, my name is Dog, and I have purple eyes!'
let dog_names = ['Max', 'HAS', 'PuRple', 'dog']

function findWords() {
    for(names of dog_names){
        if(dog_string.includes(names)) {
            console.log(`Matched dog_name`)
        } else {
            console.log(`No Matches`)
        }
    }
}

console.log(findWords())

// Exercise #2
arr = ['Max', 'Baseball', 'Reboot', 'Goku', 'Trucks', 'Rodger']

function replaceEvens(arr) {
    for(let i = 0; i < arr.length; i++){
        if (i % 2 === 0){
            arr.splice(i, 1, 'even index')
        }
    }
    console.log(arr)
}

console.log(replaceEvens(arr))

// Codewars #1
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(a){
    if(a === Number(a)){
        return (a * 50) + 6;
    } else {
        return "Error";
    }
}       

console.log(problem(4))

// Codewars #2
// Implement a function which convert the given boolean value into its string representation.

function booleanToString(b) {
    if (b === 'True'){
        return true
    } else if (b === 'False') {
        return false
    }
}

console.log(booleanToString('False'))

// Codewars #3
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

function greet(name) {
    console.log(`Hello ${name}, how are you doing today?`)
}

console.log(greet('Jordan'))

// Codewars #4
// Write a function to split a string and convert it into an array of words.

function stringToArray(s) {
    let list = s.split(' ')
    console.log(list)
}

console.log(stringToArray("I love arrays"))