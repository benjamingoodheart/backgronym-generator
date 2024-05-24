const fs = require("fs/promises");
const words = require("./words_dictionary.json");
const axios = require("axios");
const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const fetched = false;
const fl = filterByLength(getRandomInt(4, 8));
const term = getRandomWord(fl);

function backgronym(word) {
  for (const w in word) {
    let letter = word[w];
    let temp = filterByFirstLetter(letter);

    console.log(getRandomWord(temp));
  }
  return `\n~~~~~~~~~~~ ⍞⍠ 🆒🆒 ⍠⍞ ~~~~~~~~~~`;
}

const definitionsResults = async () => {
  return getDefinitions(term);
};

function filterByFirstLetter(letter) {
  const filteredList = [];
  for (let word in words) {
    if (word[0] != letter) {
    } else {
      filteredList.push(word);
    }
  }
  return filteredList;
}

function filterByLength(x) {
  const four_letters = [];

  for (const word in words) {
    if (word.length === x) {
      four_letters.push(word);
    }
  }
  return four_letters;
}

function filterByPrefix(prefix) {
  const filteredList = [];
  const regex = new RegExp(`${prefix}*`);

  //TODO: Implement filter

  return regex;
}

async function getDefinitions(word) {
  const endpoint = `${BASE_URL}${word}`;

  try{
    await axios.get(endpoint).then((response) => {

      const definitions = Object.freeze(
        response.data[0].meanings[0].definitions
      );
      console.log(definitions);
      return definitions;
    });
  } catch (err){

    console.log(`😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵`);
    console.log(`Looks like we cant find a def for: ${word.toUpperCase()}`);
    console.log(
      `It's now up to you to guide the word ${word.toUpperCase()} toward meaning...Or just consult another dictionary.`
    ); 
  }
      
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomWord(wordArr) {
  let int = getRandomInt(1, wordArr.length);
  for (let i = 0; i < wordArr.length; i++) {
    if (matches(int, i)) {
      return wordArr[int];
    }
  }
}

function mainDriver() {
  console.log("The term is...");
  console.log(term);
  console.log(`And a backgronym for ${term.toUpperCase()} is...`);
  console.log(backgronym(term));
  console.log(`-------__⁉🙉_W A I T_🙉⁉__-------`);
  console.log(``);
  console.log(`What the heck does ${term.toUpperCase()} mean?`);
  console.log(definitionsResults());
}

function matches(int, i) {
  return int === i ? true : false;
}



mainDriver();
