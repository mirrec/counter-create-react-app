import React, { useState } from 'react';
import {Button} from './Button'

function MultiCounter() {
  const [counters, setCounters] = useState([]);

  // modifying states
  const addCounter = () => {
    setCounters([...counters, 0])
  }
  const removeCounter = () => {
    setCounters(counters.slice(0, counters.length - 1))
  }
  const updateCounterValue = (index, newValue) => {
    const newCounters = [...counters]
    newCounters[index] = newValue

    setCounters(newCounters)
  }

  const Counter = ({value, index}) => {
    const onClickPlus = () => {
      updateCounterValue(index, value + 1);
    }

    const onClickMinus = () => {
      updateCounterValue(index, value - 1);
    }

    return (
      <div>
        <div className="multi-counter">
          <p>{value}</p>
          <Button title={'+'} onClick={onClickPlus} />
          <Button title={'-'} onClick={onClickMinus} />
        </div>
      </div>
    )
  }

  return (
    <div className="multi-counter">
      {counters.map((counterValue, index) => {
        return (
          <Counter key={index} value={counterValue} index={index} />
        )
      })}
      <Button title={'Add counter'} onClick={addCounter} />
      <Button title={'Remove counter'} onClick={removeCounter} />
    </div>
  );
}

export default MultiCounter;
