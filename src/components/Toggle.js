import React from "react";
import "../components/css/toggle.css";

const Toggles = ({ checked, onChange }) => {
  return (
    <div className="toggle">
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Toggles;
