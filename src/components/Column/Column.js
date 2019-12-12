import React from "react";
import "./Column.css";

const Column = ({ left, height, color, width }) => {
  return (
    <div
      className="column"
      style={{
        left: `${left}%`,
        height: `${height}%`,
        backgroundColor: color,
        width: `${width}%`
      }}
    >
      <span>{height}</span>
    </div>
  );
};

export default Column;
