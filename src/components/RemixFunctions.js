import { useEffect } from "react";

function RemixFunctions({wordArray, letterArray, remixedText, setRemixedText}) {


  useEffect(() => {
    if (wordArray.length > 0 && letterArray.length === 0) {
      const mappedWords = wordArray.map(word => `${word} `);
      setRemixedText(mappedWords.join(''));
    } else if (letterArray.length > 0 && wordArray.length === 0) {
      const mappedLetters = letterArray.map(letter => `${letter} `);
      setRemixedText(mappedLetters.join(''));
    }
  }, [wordArray, letterArray]);

  const placeholderText = remixedText.length === 0 
  ? <span className="placeholder-style">Split words or letters will appear here.</span> 
  : remixedText;

  
  return (
    <div className="remix-functions">
   
            <div className="remixed-poem">
            {placeholderText}
            </div>
    </div>
  );
}

export default RemixFunctions;
