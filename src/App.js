import React, { useState } from 'react';
import styled from 'styled-components';

import { Header } from './App/Header/header';
import Dropdown from './App/dropdown';

import dictionary from './App/dictionary.json';

const Container = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  display: flex;
  align-content: center;
  overflow: auto;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h2`
  margin: 15px 0 10px 0;
`;

const Message = styled.h1`
  margin-top: 30px;
  font-weight: 600;
`;

function App() {

  // 1. Reading key value key pairs from the JSON file into the dictionaryObj
  const dictionaryObj = JSON.parse(JSON.stringify(dictionary.food));

  // 2. Store selected Food into the foodName object
  const [foodName, setFoodName] = useState('');
  const handleSelect = (option) => {
    setFoodName(option);
  }

  // 3. Get the foodtype for the selected Food
  const getFoodType = () => {
    let array = dictionaryObj.filter(option => option.name === foodName)
    if (array.length > 0) {
      return array[0].foodType;
    }

    return "";
  }

  // User Interface (UI) Markup Code
  return (
    <Container>
      <Header />
      <MainContent>
        <Title>Select A Food</Title>
        <Dropdown
          options={dictionaryObj}
          onSelect={handleSelect}
        />
        {foodName !== "" && foodName !== "--" && getFoodType() !== "Appetizer" &&
          <Message>You selected <b>{foodName}</b> which is a <b><u>{getFoodType()}</u></b>!</Message>
        }
        {getFoodType() === "Appetizer" &&
          <Message>You selected <b>{foodName}</b> which is an <b><u>{getFoodType()}</u></b>!</Message>
        }
      </MainContent>
    </Container>
  );

}

export default App;
