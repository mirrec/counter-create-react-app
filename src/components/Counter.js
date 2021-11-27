import {Button} from "./Button";

const Counter = ({value, index, updateCounterValue}) => {
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

export default Counter
