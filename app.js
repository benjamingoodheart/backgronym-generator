const fs = require("fs/promises");
const words = require("./words_dictionary.json");
const axios = require("axios");
const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const fetched = false


function filterByLength(x) {
  const four_letters = [];

  for (const word in words) {
    if (word.length === x) {
      four_letters.push(word);
    }
  }
  return four_letters;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}

function matches(int, i) {
  return int === i ? true : false;
}

function getRandomWord(wordArr) {
  let int = getRandomInt(1, wordArr.length);
  for (let i = 0; i < wordArr.length; i++) {
    if (matches(int, i)) {
      return wordArr[int];
    }
  }
}

async function getDefinitions(word) {
  
  const endpoint = `${BASE_URL}${word}`;
  try {
    await axios.get(endpoint).then((response) => {
      const definitions = Object.freeze(response.data[0].meanings[0].definitions);
      console.log(definitions);
      return definitions;
    });
  } catch (err) {
    console.log(`Looks like we cant find a def for: ${word}` )
    return err;
  }
}
function filterByPrefix(prefix){
  const filteredList = []
  const regex = new RegExp(`${prefix}*`)

  console.log(regex.test("baser"))
  //TODO: IMplemenet filter

 return regex
}

function filterByFirstLetter(letter) {
  const filteredList = [];
  for (const word in words) {
    if (word[0] != letter) {
    } else {
      filteredList.push(word);
    }
  }
  return filteredList;
}


function backgronym(word) {
  for (const w in word) {
    let letter = word[w];
    let temp = filterByFirstLetter(letter);
    console.log(getRandomWord(temp));
  }
}

const fl = filterByLength(4);
const term = getRandomWord(fl);
const definitionsResults = ( async ()=>{
  return getDefinitions(term)
})

function mainDriver(){
  console.log("The term is...")
  console.log(term)
  console.log(`And a backgronym for ${term} is...`)
  console.log(backgronym(term))
  console.log(`-------- Wait --------`)
  console.log(`What the hell does ${term} mean?`)
  console.log(definitionsResults())
}



mainDriver();