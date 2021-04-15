import React from "react";

const Dropdown = ({ options, title }) => (
  <div>
    <h2>{title}</h2>
    <select>
      {options.map(option => (
        <option>{option.name}</option>
      ))}
    </select>
  </div>
);

export default Dropdown;
