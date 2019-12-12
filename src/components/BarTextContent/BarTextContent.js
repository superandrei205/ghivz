import React from "react";
import "./BarTextContent.css";

const BarTextContent = props => {
  const currencies = Array(props.columnCounter).fill("TEXT");
  return (
    <div className="bar-text-content">
      {currencies.map((currency, i) => (
        <div
          style={{ width: `${100 / props.columnCounter}%` }}
          key={i}
          className="text"
        >
          {currency}
        </div>
      ))}
    </div>
  );
};

export default BarTextContent;
