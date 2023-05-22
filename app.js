
const fs = require('fs/promises');
const words = require('./words_dictionary.json')
const four_letters = []

function filterWordList(){
    for (const word in words){
        if (word.length === 4) {
            four_letters.push(word)
        }
    }
}

function getRandomInt(){
    return Math.floor(Math.random()*1000)
}

function matches(int, i){
    return int === i ? true : false;
}

function getRandomWord(){
    let int = getRandomInt()
    console.log(int)
    /**
    for (let i = 0; i < four_letters.length; i++) {
        console.log(four_letters[i])
    } */


    

}

filterWordList()
getRandomWord()
