import React from "react";

// Dropdown function used to select a food item
const Dropdown = ({ options, onSelect }) => (
  <div>
    <select onChange={(e) => {
      onSelect(e.target.value);
    }}>
      <option>--</option>
      {options.map((option, i) => (
        <option key={`${option}-${i}`}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
