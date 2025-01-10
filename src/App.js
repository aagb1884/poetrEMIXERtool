import './App.css';
import MainContainer from './components/MainContainer';
import Modal from './components/modal';
import { useState } from 'react';

function App() {
  const [modalOpen, setModalOpen] = useState(true)

  return (
    <div className="App">
      <div className='title'>
        <p className='poetr'>poetr</p><p className='emixer'>EMIXER  </p><p className='tool'> Tool</p>
      </div>
      <aside>by <a href='https://andrewblair.co.uk/'>Andrew Blair</a></aside>
      {modalOpen && (
          <Modal
          setModalOpen={setModalOpen} />
        )}
      <MainContainer />
    </div>
  );
}

export default App;
