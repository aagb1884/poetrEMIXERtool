import { useState } from "react";
import RemixFunctions from "./RemixFunctions";
import ButtonsColumn from "./Buttons";
import RemixButtons from "./RemixButtons";

function MainContainer() {
const [poem, setPoem] = useState('');
const [wordArray, setWordArray] = useState([]);
const [letterArray, setLetterArray] = useState([]);
const [remixedText, setRemixedText] = useState('');

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

const reverseWords = () => {
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
        reverseWords={reverseWords}
        punctuationWord={punctuationWord}
        reverseSentences={reverseSentences} 
        poeticRedundancy={poeticRedundancy}
        makePalindrome={makePalindrome}
        randomiseLines={randomiseLines}
        randomiseSentences={randomiseSentences}
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