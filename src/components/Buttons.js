function ButtonsColumn({ poem, clearAll, letterArray, setLetterArray, wordArray, setWordArray }) {

    console.log(wordArray)
    const punctuation = /[-\.,?!—();]/g;

    const getWordArray = (words) => {
        const wordArray = words.toLowerCase().
        replace(punctuation, "").
        replace(/(\r\n|\n|\r)/gm," ").
        split(" ");
        setWordArray(wordArray); 
    };

    const getLetterArray = (words) => {
        const letterArray = words.toLowerCase().
        replace(punctuation, "").
        replace(/\s/g, "").
        split("");
        setLetterArray(letterArray); 
    };
    
 

    const noWordsOrLetters = wordArray.length === 0 && letterArray.length === 0
    const noWordsButLetters = wordArray.length === 0 && letterArray.length >= 1
    const noLettersButWords = letterArray.length === 0 && wordArray.length >= 1
    return (          
            <div className="remix-buttons-column">
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
                <br />
                <button
                    id="clear-all-btn"
                    onClick={() => {clearAll()}}>
                    Clear All
                </button>
            </div>
    );
}

export default ButtonsColumn;
