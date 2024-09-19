import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import { shuntingYard, evaluatePostfix } from "../utils";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const handleOperatorClick = (op) => {
    setDisplay((prev) => prev + op);
  };

  const handleEqualsClick = () => {
    const postfix = shuntingYard(display);
    const result = evaluatePostfix(postfix);
    setDisplay(result.toString());
  };

  const clearInput = () => {
    setDisplay("");
  };

  return (
    <div className="calculator">
      <Display display={display} />
      <Buttons
        handleClick={handleClick}
        handleOperatorClick={handleOperatorClick}
        handleEqualsClick={handleEqualsClick}
        clearInput={clearInput}
      />
    </div>
  );
};

export default Calculator;
