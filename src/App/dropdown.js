import React from "react";
import styled from 'styled-components';

const StyledSelect = styled.div`
  justify-content: center;
`;

const Dropdown = ({ options, title, label }) => (
  <div>
    <h2>{title}</h2>
    <StyledSelect>
    <select>
      {options.map(option => (
        <option>{label}</option>
      ))}
    </select>
    </StyledSelect>
  </div>
);

export default Dropdown;
