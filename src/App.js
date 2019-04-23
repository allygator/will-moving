import React from 'react';
import './App.css';

function App() {
    let today = new Date();
    let moving = new Date(2019,4,5);
    let diff;
    if(today.getMonth()!==moving.getMonth()) {
        diff = (30*(moving.getMonth()-today.getMonth())) -today.getDate()+moving.getDate();
    } else {
        diff = (today.getDate() - moving.getDate());
    }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{diff} days until Will moves to Florida</h1>
      </header>
    </div>
  );
}

export default App;
