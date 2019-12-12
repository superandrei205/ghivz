import React from "react";
import "./Column.css";

const Column = ({ height, color, width }) => {
  return (
    <div
      className="column"
      style={{
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
