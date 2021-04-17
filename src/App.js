import React, { useState } from 'react';
import styled from 'styled-components';

import { Header } from './App/Header';
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
  const dictObj = JSON.parse(JSON.stringify(dictionary.food));
  const [foodName, setFoodName] = useState('');
  const handleSelect = (option) => {
    setFoodName(option);
  }

  const getFoodType = () => {
    let array = dictObj.filter(option => option.name === foodName)
    if (array.length > 0) {
      return array[0].foodType;
    } else {
      return "";
    }
  }

  return (
    <Container>
      <Header />
      <MainContent>
        <Title>Select A Food</Title>
        <Dropdown
          options={dictObj}
          onSelect={handleSelect}
        />
        {foodName !== "" && foodName !== "--" && getFoodType() !== "Appetizer" &&
          <Message>You selected <b>{foodName}</b> which is a <b>{getFoodType()}</b>!</Message>
        }
        {getFoodType() === "Appetizer" &&
          <Message>You selected <b>{foodName}</b> which is an <b>{getFoodType()}</b>!</Message>
        }
      </MainContent>
    </Container>
  );
}

export default App;
