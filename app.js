const fs = require('fs/promises');
const words = require('./words_dictionary.json')
const axios = require('axios')
const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'


function filterByFourLetters(){
    const four_letters = []

    for (const word in words){
        if (word.length === 4) {
            four_letters.push(word)
        }
    }
    return four_letters
}

function getRandomInt(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random()* (max- min) + min);
}

function matches(int, i){
    return int === i ? true : false;
}

function getRandomWord(wordArr){
    let int = getRandomInt(1, wordArr.length)
    console.log(int)
    for (let i = 0; i < wordArr.length; i++) {
        if(matches(int, i)){
            console.log(wordArr[int])
            return wordArr[int]
        }
    }
    
}

async function queryDict(word){
    const endpoint = `${BASE_URL}${word}`
    try{
    await axios.get(endpoint)
    .then((response)=>{
        console.log(response.data[0].meanings[0].definitions)
        return response
    })
    } catch (err) {
        console.log("Whoops - No definitions, let's try again")

    }
}

async function getDefinitions(word){
    let definitions = []
    await queryDict(word)
    .then((response)=>{
        console.log(typeof(response))
        return response
    })
}

function filterByFirstLetter(letter){
    const filteredList = []
    for (const word in words){
        if (word[0]!=letter){
        } else {
            filteredList.push(word)
        }
    }
    return filteredList
}

function backronym(word){
    
    for (const w in word){
        let letter = word[w]
        let temp = filterByFirstLetter(letter)
        getRandomWord(temp)
    }
}

const fl = filterByFourLetters()
let term = getRandomWord(fl)
let list = getDefinitions(term)
console.log(list)
backronym(term)


