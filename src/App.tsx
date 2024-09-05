import React, { useState } from 'react';
import './App.css';

function App() {
  const [isGreen, setIsGreen] = useState(true);

  const handleClick = () => {
    setIsGreen(!isGreen);
  };

  return (
    <div className="App">
      <button 
        className={`big-button ${isGreen ? 'green' : 'blue'}`} 
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
