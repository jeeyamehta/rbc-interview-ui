import React from "react";

const Dropdown = ({ options, title, onSelect }) => (
  <div>
    <h2>{title}</h2>
    <select onChange={(selected) => {
      onSelect(selected.target.value);
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
