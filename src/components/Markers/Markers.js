import React from "react";
import "./Markers.css";

const Markers = () => {
  const markerArr = Array(11).fill(null);

  return (
    <div className="markers">
      {markerArr.map((el, i) => (
        <div className="marker" key={i}>
          {100 - i * 10}
        </div>
      ))}
    </div>
  );
};

export default Markers;
