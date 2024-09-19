import React from "react";

const Display = ({ display }) => {
  return (
    <div className="display">
      <input type="text" value={display} readOnly />
    </div>
  );
};

export default Display;
