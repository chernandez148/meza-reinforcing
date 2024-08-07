import React from "react";
import "./HorizontalLine.css";

function HorizontalLine({ top, bottom }) {
  return (
    <div
      className="HorizontalLine"
      style={{ top: `${top}px`, bottom: `${bottom}px` }}
    ></div>
  );
}

export default HorizontalLine;
