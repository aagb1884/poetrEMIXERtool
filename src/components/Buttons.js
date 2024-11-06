function ButtonsColumn({ poem, clearAll, letterArray, setLetterArray, wordArray, 
    setWordArray, reverseAllWords, reverseLines, punctuationWord, reverseSentences,
    poeticRedundancy, makePalindrome, randomiseLines, randomiseSentences, randomiseWords, 
    reverseWords, removeWords, verbValues, nounValues, adjValues, mappedTaggedText,
    handleClick, showButtons, setShowButtons}) {
    
    const punctuationLetter = /[-.,?!—();:' ’]/g;

    const getWordArray = (words) => {
        const wordArray = words.toLowerCase().
        replace(punctuationWord, "").
        replace(/(\r\n|\n|\r)/gm," ").
        split(" ");
        setWordArray(wordArray);  
    };

    const getLetterArray = (words) => {
        const letterArray = words.toLowerCase().
        replace(punctuationLetter, "").
        replace(/\s/g, "").
        split("");
        setLetterArray(letterArray); 
    };
    
    const noWordsButLetters = wordArray.length === 0 && letterArray.length >= 1
    const noLettersButWords = letterArray.length === 0 && wordArray.length >= 1

    const showHide = showButtons ? `Show Buttons ↑` : `Hide Buttons ↓`;

    return (          
            <div className="remix-buttons-column">
                <p className="hide-show-btn" 
                onClick={() => handleClick(showButtons, setShowButtons)}>
                {showHide}</p>
                {!showButtons && (
                    <>
                
                <div className="split-btns">
                <button
                    disabled={noWordsButLetters ? true : false}
                    id="word-array-btn"
                    onClick={() => getWordArray(poem)}
                >
                    Split into words
                </button>
                <button
                    disabled={noLettersButWords ? true : false}
                    id="letter-array-btn"
                    onClick={() => getLetterArray(poem)}
                >
                    Split into letters
                </button>
                </div>
                
                <div className="reverse-btns">
                 <button
                id="reverse-word-order"
                onClick={() => {reverseAllWords(poem)}}>
                Reverse Word Order
                </button>
                <button
                id="reverse-line-order"
                onClick={() => {reverseLines(poem)}}>
                Reverse Line Order
                </button>
                <button
                id="reverse-sentence-order"
                onClick={() => {reverseSentences(poem)}}>
                Reverse Sentence Order
                </button>
                </div>

                <div className="randomise-btns">
                <button
                id="random-lines-btn"
                onClick={() => {randomiseLines(poem)}}>
                Randomise Lines
                </button> 
                <button
                id="random-sentences-btn"
                onClick={() => {randomiseSentences(poem)}}>
                Randomise Sentences
                </button> 
                </div>

                <div className="misc-btns">
                <button
                id="poetic-redundancy-btn"
                onClick={() => {poeticRedundancy(poem)}}>
                Poetic Redundancy
                </button>
                <button 
                id="make-palindrome-btn"
                onClick={() => {makePalindrome(poem)}}>
                Make Palindrome
                </button>
                </div>

                <div className="word-types">
                <div className="verbs">
                <button 
                id="randomise-verbs-btn"
                onClick={() => {randomiseWords(verbValues, mappedTaggedText)}}>
                Randomise Verbs
                </button>  
                <button 
                id="reverse-verbs-btn"
                onClick={() => {reverseWords(verbValues, mappedTaggedText)}}>
                Reverse Verbs
                </button>  
                <button 
                id="remove-verbs-btn"
                onClick={() => {removeWords(verbValues, mappedTaggedText)}}>
                Remove Verbs
                </button>  
                </div>

                <div className="nouns">
                <button 
                id="randomise-nouns-btn"
                onClick={() => {randomiseWords(nounValues, mappedTaggedText)}}>
                Randomise Nouns
                </button>  
                <button 
                id="reverse-nouns-btn"
                onClick={() => {reverseWords(nounValues, mappedTaggedText)}}>
                Reverse Nouns
                </button>  
                <button 
                id="remove-nouns-btn"
                onClick={() => {removeWords(nounValues, mappedTaggedText)}}>
                Remove Nouns
                </button>  
                </div>

                <div className="adj">
                <button 
                id="randomise-adj-btn"
                onClick={() => {randomiseWords(adjValues, mappedTaggedText)}}>
                Randomise Adjectives
                </button>  
                <button 
                id="reverse-adj-btn"
                onClick={() => {reverseWords(adjValues, mappedTaggedText)}}>
                Reverse Adjectives
                </button>  
                <button 
                id="remove-adj-btn"
                onClick={() => {removeWords(adjValues, mappedTaggedText)}}>
                Remove Adjectives
                </button>  
                </div>
                </div>
                
                <button
                    id="clear-all-btn"
                    onClick={() => {clearAll()}}>
                    Clear All
                </button>
                </>
                )}
            </div>
    );
}

export default ButtonsColumn;