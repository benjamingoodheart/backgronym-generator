
const fs = require('fs/promises');
const words = require('./words_dictionary.json')


function getRandomInt(){
    return Math.ceil(Math.random()*100000)
}

function matches(int, i){
    return int === i ? true : false;
}

function getRandomWord(){
    let int = getRandomInt()
    let i = 0


    for (const word in words){
        if (int === i){
            console.log(int)
            console.log(word)
            break;
        }
        i++
    }

}
console.log(getRandomWord())

