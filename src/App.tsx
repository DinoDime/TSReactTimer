import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HexColorPicker } from "react-colorful";
import "react-colorful/dist/index.css";

import Timer from './Timer';

function App() {

  const name = "Justin";

  return (
    <div>
      
      <h2>Welcome to the Timer</h2>

      <Timer hello={name} />

    </div>
  );
}

let Color = () => {
  const [color, setColor] = React.useState("#aabbcc");
  return <HexColorPicker color={color} onChange={setColor} />;
};

export default App;
