
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

function getRandomInt(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random()* (max- min) + min);
}

function matches(int, i){
    return int === i ? true : false;
}

function getRandomWord(){
    let int = getRandomInt(1, four_letters.length)
    console.log(int)
    for (let i = 0; i < four_letters.length; i++) {
        if(matches(int, i)){
            console.log(four_letters[int])
        }
    }
    
}

filterWordList()
getRandomWord()
