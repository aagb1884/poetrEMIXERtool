import './App.css';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className="App">
      <div className='title'>
        <p className='poetr'>poetr</p><p className='emixer'>EMIXER  </p><p className='tool'> Tool</p>
      </div>
      <aside>by <a href='https://andrewblair.co.uk/'>Andrew Blair</a></aside>
      <MainContainer />
    </div>
  );
}

export default App;
