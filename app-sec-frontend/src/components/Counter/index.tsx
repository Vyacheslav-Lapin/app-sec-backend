import React from "react";

export default ({decreaseCount, increaseCount, countValue}: {
  decreaseCount: () => void
  increaseCount: () => void
  countValue: number
}) => <div className="container">
  <button className="buttons" onClick={decreaseCount}>-</button>
  <span>{countValue}</span>
  <button className="buttons" onClick={increaseCount}>+</button>
</div>
