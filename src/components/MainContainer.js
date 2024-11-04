import { useState } from "react";
import RemixFunctions from "./RemixFunctions";
import ButtonsColumn from "./Buttons";
import RemixButtons from "./RemixButtons";

function MainContainer() {
const [poem, setPoem] = useState('');
const [wordArray, setWordArray] = useState([]);
const [letterArray, setLetterArray] = useState([]);
const [remixedText, setRemixedText] = useState('');

const posTagger = require('wink-pos-tagger');
const tagger = posTagger();

const taggedText = tagger.tagSentence(poem)
const mappedTaggedText = taggedText.map((word) => word)

console.log(mappedTaggedText)

const verbValues = ['VB', 'VBN', 'VBG', 'VBZ', 'VBD'];
const nounValues = ['NN', 'NNP', 'NNS', 'MD'];
const adjValues = ['JJ'];

function getWords(wordTypeArray) {
  return mappedTaggedText
    .filter((word) => wordTypeArray.includes(word.pos)) 
    .map((word) => word.value);  
}
const wordIndexArr =[];

function getWordIndexes(wordTypeArray) {
 
  mappedTaggedText.forEach((word, index) => {
      if (wordTypeArray.includes(word.pos)) {
        wordIndexArr.push(index);
      }
    });
return wordIndexArr;
}

const shuffleWords = (wordArray) => {
  const shuffled = [...getWords(wordArray)].sort(() => 0.5 - Math.random()); 
  return shuffled; 
};

const randomiseWords = (wordArray) => {
  getWordIndexes(wordArray);
  const shuffledWords = shuffleWords(wordArray);
  wordIndexArr.forEach((index, i) => {
    mappedTaggedText.splice(index, 1, shuffledWords[i]); 
  });
const joinedText = mappedTaggedText
      .map(item => typeof item === 'string' ? item : item.value)
      .join(' '); 
    setRemixedText(joinedText)
};

const reverseWords = (wordArray) => {
  getWordIndexes(wordArray)
  const reversedWords = getWords(wordArray).reverse()
  wordIndexArr.forEach((index, i) => {
    mappedTaggedText.splice(index, 1, reversedWords[i]); 
  });

const joinedText = mappedTaggedText
      .map(item => typeof item === 'string' ? item : item.value)
      .join(' '); 
    setRemixedText(joinedText)
}

const removeWords = (wordArray) => {
  getWordIndexes(wordArray)
for (var i = wordIndexArr.length -1; i >= 0; i--)
mappedTaggedText.splice(wordIndexArr[i],1);
const joinedText = mappedTaggedText
.map(item => item.value)
.join(' '); 
setRemixedText(joinedText)
}

const handlePoemChange = (e) => {
    setPoem(e.target.value);
  };

  const clearRemix = () => {
    setRemixedText('');
    setWordArray([]);
    setLetterArray([]);
  }

  const handleCopyClick = async () => {
    try {
        await window.navigator.clipboard.writeText(remixedText);
        alert("Copied to clipboard!");
    } catch (err) {
        console.error(
            "Unable to copy to clipboard.",
            err
        );
        alert("Copy to clipboard failed.");
    }
};

const shuffleArray = () => {
  // Ensure remixedText is converted to a string before splitting
  const tempArray = Array.isArray(remixedText) ? remixedText : remixedText.split(' ');
  tempArray.sort(() => 0.5 - Math.random()); 
  const mappedString = tempArray.join(' ');
  setRemixedText(mappedString);
};

const sortAtoZ = () => {
    const tempArray = remixedText.split(' ').sort()
    setRemixedText(tempArray.join(' '))
}
const sortZtoA = () => {
  const tempArray = remixedText.split(' ').sort().reverse()
    setRemixedText(tempArray.join(' '))
}

const punctuationWord = /[-\.,?!—();:]/g;

const reverseAllWords = () => {
  setRemixedText(poem.toLowerCase().
  replace(punctuationWord, "").
  split(" ").
  reverse()
  .join(" "))
}

const reverseLines = () => {
  setRemixedText(poem.split("\n").reverse().join("\n"))
}

const sentenceEndings = /[.?!]/g;
const reverseSentences = () => {
  setRemixedText(poem.replace(/^\s+|\s+$/gm,'').
  split(sentenceEndings).
  reverse().
  join("\n").replace(/^\s+|\s+$/gm,''))
}

const randomiseLines = () => {
  const makeArray = poem.split("\n");
  makeArray.sort(() => 0.5 - Math.random()); 
  const mappedString = makeArray.join('\n').replace(/^\s+|\s+$/gm,'');
  setRemixedText(mappedString);
}

const randomiseSentences = () => {
  const makeArray = poem.replace(/^\s+|\s+$/gm,'').split(sentenceEndings)
  makeArray.sort(() => 0.5 - Math.random()); 
  const mappedString = makeArray
  setRemixedText(mappedString);
}

const redundancyPunctuation = /[,;.!?]/g;
const poeticRedundancy = () => {
  const newArray = poem.replace(redundancyPunctuation, "").split("\n");
  const removeEmptyLines = newArray.filter(line => line.trim() !== "")
  const n = removeEmptyLines.map(line => line.split(" "))
  const listEndWords = n.map(word => `${word[word.length - 1]} `)
  setRemixedText(listEndWords.join("\n"))
 }

const makePalindrome = () => {
   const reversedPoem = poem.split(" ").reverse().join(" ")
  setRemixedText(`${poem}\n\n${reversedPoem}`)
}

const clearAll = () => {
  setPoem('');
  setWordArray([]);
  setLetterArray([]);
  setRemixedText('');
}

    return (
      <section className="main-container">
        <div className="column1">
        <textarea id="poem-input" name="poem-input" 
        value={poem} onChange={handlePoemChange}
        placeholder="Copy and paste a poem here"/>
               </div>
        <div className="column2">
        <ButtonsColumn 
        poem={poem} 
        wordArray={wordArray}
        setWordArray={setWordArray} 
        letterArray={letterArray}
        setLetterArray={setLetterArray}
        clearAll={clearAll} 
        reverseLines={reverseLines}
        reverseAllWords={reverseAllWords}
        punctuationWord={punctuationWord}
        reverseSentences={reverseSentences} 
        poeticRedundancy={poeticRedundancy}
        makePalindrome={makePalindrome}
        randomiseLines={randomiseLines}
        randomiseSentences={randomiseSentences}
        randomiseWords={randomiseWords}
        reverseWords={reverseWords}
        removeWords={removeWords}
        verbValues={verbValues}
        nounValues={nounValues}
        adjValues={adjValues}
        />
        </div>
        <div className="column3">
          <RemixFunctions 
          wordArray={wordArray}
          letterArray={letterArray}
          remixedText={remixedText}
          setRemixedText={setRemixedText}
         />
        </div>
        <div className="column4">
          <RemixButtons 
          clearRemix={clearRemix}
          handleCopyClick={handleCopyClick}
          shuffleArray={shuffleArray}
          sortAtoZ={sortAtoZ}
          sortZtoA={sortZtoA}
          />
        </div>
      </section>
    );
  }
  
  export default MainContainer;