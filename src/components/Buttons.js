function ButtonsColumn({ poem, clearAll, letterArray, setLetterArray, wordArray, 
    setWordArray, reverseAllWords, reverseLines, punctuationWord, reverseSentences,
    poeticRedundancy, makePalindrome, randomiseLines, randomiseSentences, randomiseWords, 
    reverseWords, removeWords, verbValues, nounValues, adjValues}) {
    
    const punctuationLetter = /[-\.,?!—();:' ’]/g;

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
    
    const noWordsOrLetters = wordArray.length === 0 && letterArray.length === 0
    const noWordsButLetters = wordArray.length === 0 && letterArray.length >= 1
    const noLettersButWords = letterArray.length === 0 && wordArray.length >= 1
    return (          
            <div className="remix-buttons-column">
                <div className="split-btns">
                {noWordsOrLetters && (
                    <>
                <button
                    id="word-array-btn"
                    onClick={() => getWordArray(poem)}
                >
                    Split into words
                </button>
                <button
                    id="letter-array-btn"
                    onClick={() => getLetterArray(poem)}
                >
                    Split into letters
                </button>
                </>
                )}
                {noWordsButLetters && (
                    <>
                <button
                    id="word-array-btn"
                    disabled
                >
                    Split into words
                </button>
                <button
                    id="letter-array-btn"
                    onClick={() => getLetterArray(poem)}
                >
                    Split into letters
                </button>
                </>
                )}
                {noLettersButWords && (
                    <>
                <button
                    id="word-array-btn"
                    onClick={() => getWordArray(poem)}
                >
                    Split into words
                </button>
                <button
                    id="letter-array-btn"
                    disabled
                >
                    Split into letters
                </button>
                </>
                )}
                </div>
                
                <div className="reverse-btns">
                 <button
                id="reverse-word-order"
                onClick={() => {reverseAllWords()}}>
                Reverse Word Order
                </button>
                <button
                id="reverse-line-order"
                onClick={() => {reverseLines()}}>
                Reverse Line Order
                </button>
                <button
                id="reverse-sentence-order"
                onClick={() => {reverseSentences()}}>
                Reverse Sentence Order
                </button>
                </div>

                <div className="randomise-btns">
                <button
                id="random-lines-btn"
                onClick={() => {randomiseLines()}}>
                Randomise Lines
                </button> 
                <button
                id="random-sentences-btn"
                onClick={() => {randomiseSentences()}}>
                Randomise Sentences
                </button> 
                </div>

                <div className="misc-btns">
                <button
                id="poetic-redundancy-btn"
                onClick={() => {poeticRedundancy()}}>
                Poetic Redundancy
                </button>
                <button 
                id="make-palindrome-btn"
                onClick={() => {makePalindrome()}}>
                Make Palindrome
                </button>
                </div>

                <div className="word-types">
                <div className="verbs">
                <button 
                id="randomise-verbs-btn"
                onClick={() => {randomiseWords(verbValues)}}>
                Randomise Verbs
                </button>  
                <button 
                id="reverse-verbs-btn"
                onClick={() => {reverseWords(verbValues)}}>
                Reverse Verbs
                </button>  
                <button 
                id="remove-verbs-btn"
                onClick={() => {removeWords(verbValues)}}>
                Remove Verbs
                </button>  
                </div>

                <div className="nouns">
                <button 
                id="randomise-nouns-btn"
                onClick={() => {randomiseWords(nounValues)}}>
                Randomise Nouns
                </button>  
                <button 
                id="reverse-nouns-btn"
                onClick={() => {reverseWords(nounValues)}}>
                Reverse Nouns
                </button>  
                <button 
                id="remove-nouns-btn"
                onClick={() => {removeWords(nounValues)}}>
                Remove Nouns
                </button>  
                </div>

                <div className="adj">
                <button 
                id="randomise-adj-btn"
                onClick={() => {randomiseWords(adjValues)}}>
                Randomise Adjectives
                </button>  
                <button 
                id="reverse-adj-btn"
                onClick={() => {reverseWords(adjValues)}}>
                Reverse Adjectives
                </button>  
                <button 
                id="remove-adj-btn"
                onClick={() => {removeWords(adjValues)}}>
                Remove Adjectives
                </button>  
                </div>
                </div>
                
                <button
                    id="clear-all-btn"
                    onClick={() => {clearAll()}}>
                    Clear All
                </button>
            </div>
    );
}

export default ButtonsColumn;
