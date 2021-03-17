import React from 'react';
import logo from './logo.svg';
import './App.css';

import Timer from './Timer';

function App() {

  const name = "Justin";

  return (
    <div>
      
      <h2>Welcome to the Timer</h2>

      {/* <Timer start={Date.now()} /> */}
      <Timer hello={name} />

    </div>
  );
}

export default App;
