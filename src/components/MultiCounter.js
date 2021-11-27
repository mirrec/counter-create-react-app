import React, { useState } from 'react';
import {Button} from './Button'
import Counter from './Counter'

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

  return (
    <div className="multi-counter">
      <Button title={'Add counter'} onClick={addCounter} />
      <Button title={'Remove counter'} onClick={removeCounter} />
      {counters.map((counterValue, index) => {
        return (
          <Counter key={index} value={counterValue} index={index} updateCounterValue={updateCounterValue} />
        )
      })}
    </div>
  );
}

export default MultiCounter;
