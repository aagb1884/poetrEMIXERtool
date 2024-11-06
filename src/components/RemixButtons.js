function RemixButtons({handleCopyClick, clearRemix, shuffleArray, sortAtoZ, 
  sortZtoA, remixedText, poeticRedundancy, randomiseWords,
  reverseWords, removeWords, verbValues, nounValues, adjValues, makePalindrome, 
  mappedTaggedRemixedText, showRemixButtons, setShowRemixButtons, handleClick}) {
 
    const showHide = !showRemixButtons ? `Show Buttons ↑` : `Hide Buttons ↓`;

  return (
    <div className="remix-buttons">   
    <p className="hide-show-btn" 
                onClick={() => handleClick(showRemixButtons, setShowRemixButtons)}>
                {showHide}</p> 
    {showRemixButtons && (     
      <>      
    <button
          disabled={remixedText ? false : true}
          id="copy-btn"
          onClick={() => {handleCopyClick()}}>
          Copy Text
      </button> 
        <button
          disabled={remixedText ? false : true}
          id="randomise-btn"
          onClick={() => {shuffleArray(remixedText)}}>
          Randomise
      </button>
      <button
          disabled={remixedText ? false : true}
          id="palindrome-btn"
          onClick={() => {makePalindrome(remixedText)}}>
          Palindrome
      </button>
      <button
          disabled={remixedText ? false : true}
          id="redundancy-btn"
          onClick={() => {poeticRedundancy(remixedText)}}>
          Poetic Redundancy
      </button>
      <div className="sort-btns">
        <button
          disabled={remixedText ? false : true}
          id="sort-btn"
          onClick={() => {sortAtoZ()}}>
          Sort A-Z
      </button>
      <button
          disabled={remixedText ? false : true}
          id="sort-btn"
          onClick={() => {sortZtoA()}}>
          Sort Z-A
      </button>   
      </div>
      <div className="word-types">
                <div className="verbs">
                <button 
                disabled={remixedText ? false : true}
                id="randomise-verbs-btn"
                onClick={() => {randomiseWords(verbValues, mappedTaggedRemixedText)}}>
                Randomise Verbs
                </button>  
                <button 
                disabled={remixedText ? false : true}
                id="reverse-verbs-btn"
                onClick={() => {reverseWords(verbValues, mappedTaggedRemixedText)}}>
                Reverse Verbs
                </button>  
                <button 
                disabled={remixedText ? false : true}
                id="remove-verbs-btn"
                onClick={() => {removeWords(verbValues, mappedTaggedRemixedText)}}>
                Remove Verbs
                </button>  
                </div>

                <div className="nouns">
                <button 
                disabled={remixedText ? false : true}
                id="randomise-nouns-btn"
                onClick={() => {randomiseWords(nounValues, mappedTaggedRemixedText)}}>
                Randomise Nouns
                </button>  
                <button 
                disabled={remixedText ? false : true}
                id="reverse-nouns-btn"
                onClick={() => {reverseWords(nounValues, mappedTaggedRemixedText)}}>
                Reverse Nouns
                </button>  
                <button 
                disabled={remixedText ? false : true}
                id="remove-nouns-btn"
                onClick={() => {removeWords(nounValues, mappedTaggedRemixedText)}}>
                Remove Nouns
                </button>  
                </div>

                <div className="adj">
                <button 
                disabled={remixedText ? false : true}
                id="randomise-adj-btn"
                onClick={() => {randomiseWords(adjValues, mappedTaggedRemixedText)}}>
                Randomise Adjectives
                </button>  
                <button 
                disabled={remixedText ? false : true}
                id="reverse-adj-btn"
                onClick={() => {reverseWords(adjValues, mappedTaggedRemixedText)}}>
                Reverse Adjectives
                </button>  
                <button 
                disabled={remixedText ? false : true}
                id="remove-adj-btn"
                onClick={() => {removeWords(adjValues, mappedTaggedRemixedText)}}>
                Remove Adjectives
                </button>  
                </div>
                </div>
      <br />
      <button
          disabled={remixedText ? false : true}
          id="clear-remix-btn"
          onClick={() => {clearRemix()}}>
          Clear Remix
      </button>
      </>
      )} 
    </div>
  );
}

export default RemixButtons;
