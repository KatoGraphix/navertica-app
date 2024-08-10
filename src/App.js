import React from 'react';
import './App.css';

function App() {
  const numbers = [];
  
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numbers.push("NAVERTICA");
    } else if (i % 3 === 0) {
      numbers.push("NAV");
    } else if (i % 5 === 0) {
      numbers.push("ERTICA");
    } else {
      numbers.push(i);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>NAVERTICA Numbers</h1>
        <div className="number-grid">
          {numbers.map((number, index) => (
            <div key={index} className={`number-box ${number}`}>
              {number}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
