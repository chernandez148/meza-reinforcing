import React from "react";
import "./VerticalLine.css";

function VerticalLine({ left, right }) {
  return (
    <div
      className="VerticalLine"
      style={{ left: `${left}px`, right: `${right}px` }}
    ></div>
  );
}

export default VerticalLine;
