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
