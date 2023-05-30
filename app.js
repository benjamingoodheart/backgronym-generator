const fs = require('fs/promises');
const words = require('./words_dictionary.json')
const four_letters = []
const axios = require('axios')
const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'


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
            return four_letters[int]
        }
    }
    
}

async function queryDict(word){
    const endpoint = `${BASE_URL}${word}`
    await axios.get(endpoint)
    .then((response)=>{
        console.log(response.data[0].meanings[0].definitions)
        return response
    })
}

async function getDefinition(word){
    await queryDict(word)
    .then((response)=>{
        console.log(response)
        return response
    })
}

function backronym(word){
    for (const w in word){
        console.log(word[w])
    }
}

filterWordList()
let term = getRandomWord()
let query = queryDict(term)
console.log(query)
backronym(term)


