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
  const tempArray = Array.isArray(remixedText) ? remixedText : remixedText.split(', ');
  tempArray.sort(() => 0.5 - Math.random()); 
  const mappedString = tempArray.join(', ');
  setRemixedText(mappedString);
};

const sortAtoZ = () => {
    const tempArray = remixedText.split(', ').sort()
    setRemixedText(tempArray.join(', '))
}
const sortZtoA = () => {
  const tempArray = remixedText.split(', ').sort().reverse()
    setRemixedText(tempArray.join(', '))
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
        clearAll={clearAll} />
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