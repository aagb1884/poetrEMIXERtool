function RemixButtons({handleCopyClick, clearRemix, shuffleArray, sortAtoZ, 
  sortZtoA}) {
 
  return (
    <div className="remix-buttons">     
        <button
          id="randomise-btn"
          onClick={() => {shuffleArray()}}>
          Randomise
      </button>
      <div className="sort-btns">
        <button
          id="sort-btn"
          onClick={() => {sortAtoZ()}}>
          Sort A-Z
      </button>
        <button
          id="sort-btn"
          onClick={() => {sortZtoA()}}>
          Sort Z-A
      </button>   
      </div>
      <button
          id="copy-btn"
          onClick={() => {handleCopyClick()}}>
          Copy Text
      </button>
      <br />
      <button
          id="clear-remix-btn"
          onClick={() => {clearRemix()}}>
          Clear Remix
      </button>
    </div>
  );
}

export default RemixButtons;
