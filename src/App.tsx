import React from 'react';
import './App.css';
import Test from './components/test';

function App() {
  console.log(process.env.REACT_LOCAL_HOST_IMAGES_SRC);
  return (
    <div className="App">
      <header className="App-header">
        <h1>HELLO WORLD!</h1>
          <Test/>
      </header>
    </div>
  );
}

export default App;
