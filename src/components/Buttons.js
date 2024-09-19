import React from "react";

const Buttons = ({ handleClick, handleOperatorClick, handleEqualsClick, clearInput }) => {
  return (
    <div className="buttons">
      <button onClick={() => handleClick("1")}>1</button>
      <button onClick={() => handleClick("2")}>2</button>
      <button onClick={() => handleClick("3")}>3</button>
      <button onClick={() => handleOperatorClick("+")}>+</button>
      <button onClick={() => handleClick("4")}>4</button>
      <button onClick={() => handleClick("5")}>5</button>
      <button onClick={() => handleClick("6")}>6</button>
      <button onClick={() => handleOperatorClick("-")}>-</button>
      <button onClick={() => handleClick("7")}>7</button>
      <button onClick={() => handleClick("8")}>8</button>
      <button onClick={() => handleClick("9")}>9</button>
      <button onClick={() => handleOperatorClick("*")}>*</button>
      <button onClick={() => handleClick("0")}>0</button>
      <button onClick={() => handleClick(".")}>.</button>
      <button onClick={handleEqualsClick}>=</button>
      <button onClick={() => handleOperatorClick("/")}>/</button>
      <button onClick={clearInput}>C</button>
    </div>
  );
};

export default Buttons;
