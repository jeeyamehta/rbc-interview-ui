import React from "react";

const Dropdown = ({ options, title }) => (
  <div>
    <h1>{title}</h1>
    <select>
      {options.map(option => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);

export default Dropdown;
