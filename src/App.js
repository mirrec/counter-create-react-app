import React, { useState } from 'react';
import './App.css';
import {Button} from './components/Button'

function App() {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  }

  const onClickMinus = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <p>{count}</p>
      <Button title={'+'} onClick={onClickPlus} />
      <Button title={'-'} onClick={onClickMinus} />
    </div>
  );
}

export default App;
