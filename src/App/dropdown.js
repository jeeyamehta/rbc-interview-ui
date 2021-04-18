import React from "react";

// Dropdown function that you can select any of the 20 foods from
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
