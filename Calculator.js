
import React, { useState } from "react";


function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleClick = (value) => {
    setIsTyping(true);
    if (result !== "") {
      setInput(result + value);
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
    setIsTyping(false);
  };

  const handleCalculate = () => {
    try {
      const evalResult = Function(`"use strict"; return (${input})`)();
      setResult(evalResult);
    } catch {
      setResult("Error");
    }
    setIsTyping(false);
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
    setIsTyping(true);
  };

  const getInputFontSize = () => {
    if (input.length > 10) return "1rem";
    if (input.length > 5) return "1.2rem";
    return "1.5rem";
  };

  return (
    <div className="calculator">
      <h3>Calculator</h3>
      <div className="calculator-display">
        <div
          className="input-text"
          style={{ fontSize: isTyping ? getInputFontSize() : "1.5rem" }}
        >
          {input || "0"}
        </div>
        <div className="result-text">
          {result !== "" ? result : ""}
        </div>
      </div>

      <div className="buttons-grid">
        <button className="btn-clear" onClick={handleClear}>C</button>
        <button className="btn-back" onClick={handleBackspace}>←</button>
        <button className="btn-percent" onClick={() => handleClick("%")}>%</button>
        <button className="btn-op" onClick={() => handleClick("/")}>÷</button>

        <button className="btn-num" onClick={() => handleClick("7")}>7</button>
        <button className="btn-num" onClick={() => handleClick("8")}>8</button>
        <button className="btn-num" onClick={() => handleClick("9")}>9</button>
        <button className="btn-op" onClick={() => handleClick("*")}>×</button>

        <button className="btn-num" onClick={() => handleClick("4")}>4</button>
        <button className="btn-num" onClick={() => handleClick("5")}>5</button>
        <button className="btn-num" onClick={() => handleClick("6")}>6</button>
        <button className="btn-op" onClick={() => handleClick("-")}>−</button>

        <button className="btn-num" onClick={() => handleClick("1")}>1</button>
        <button className="btn-num" onClick={() => handleClick("2")}>2</button>
        <button className="btn-num" onClick={() => handleClick("3")}>3</button>
        <button className="btn-op" onClick={() => handleClick("+")}>+</button>

        <button className="btn-num btn-zero" onClick={() => handleClick("0")}>0</button>
        <button className="btn-num" onClick={() => handleClick(".")}>.</button>
        <button className="btn-equal" onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
