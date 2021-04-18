import React, { useState } from 'react';
import axios from 'axios'
import styled from 'styled-components';

import { Header } from './App/header';
import Dropdown from './App/dropdown';

// variable holds the API port
const API_SERVER = 'http://127.0.0.1:8888';

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

// Main App function
function App() {

  // Function that gets the JSON object from the backend server and returns the array of foods
  async function getJSON() {
    const response = await axios.get(API_SERVER);
    return Promise.resolve(response.data);
  }

  //variable to hold dictionary of all the foods
  const [dictionaryObject, setDictionaryObject] = useState(undefined);

  //When the app loads, it makes a call to the back-end to get the JSON of all the foods
  React.useEffect(() => {
    getJSON().then((data) => {
      setDictionaryObject(data.food)
    });
  }, [])

  // variable to hold the name of the selected food item
  const [foodName, setFoodName] = useState('');

  // Function that sets a value to the food name select to be displayed in the message
  const handleSelect = (option) => {
    setFoodName(option);
  }

  // Function that filters through json array to find the selected food's food type
  const getFoodType = () => {
    let array = dictionaryObject?.filter(option => option.name === foodName)
    if (array?.length > 0) {
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
        {/*If dictionaryObject is defined display the dropdown and message */}
        {dictionaryObject && (
          <>
            <Dropdown
              options={dictionaryObject}
              onSelect={handleSelect}
            />

            {/*Message to display only if a proper food item has been selected*/}
            {foodName !== "" && foodName !== "--" && getFoodType() !== "Appetizer" &&
              <Message>You selected <b>{foodName}</b> which is a <b><u>{getFoodType()}</u></b>!</Message>
            }
            {getFoodType() === "Appetizer" &&
              <Message>You selected <b>{foodName}</b> which is an <b><u>{getFoodType()}</u></b>!</Message>
            }
          </>
        )}
      </MainContent>
    </Container>
  );

}

export default App;
