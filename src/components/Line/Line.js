import React from "react";
import "./Line.css";

const Line = ({ top }) => {
  return <div className="line" style={{ top: `${top}%` }} />;
};

export default Line;
