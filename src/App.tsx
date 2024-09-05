import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <button className="big-button" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

export default App;
