import React from "react";

const Dropdown = ({ options, title, value }) => (
  <div>
    <h2>{title}</h2>
    <select>
      {options.map(option => (
        <option>{option.name}</option>
      ))}
    </select>
    {options.map(option => (
    <h3>{option.foodType}</h3>
    ))}
  </div>
);

export default Dropdown;
