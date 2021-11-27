import React, { useState } from 'react';
import {Button} from './Button'

function SimpleCounter() {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  }

  const onClickMinus = () => {
    setCount(count - 1);
  }

  return (
    <div className="simple-counter">
      <p>{count}</p>
      <Button title={'+'} onClick={onClickPlus} />
      <Button title={'-'} onClick={onClickMinus} />
    </div>
  );
}

export default SimpleCounter;
