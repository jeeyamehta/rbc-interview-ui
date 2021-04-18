import React, { useState } from 'react';
import axios from 'axios'
import styled from 'styled-components';

import { Header } from './App/Header';
import Dropdown from './App/dropdown';

const API_SERVER = 'http://127.0.0.1:8888';

const Container = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`;

const SubContent = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  overflow: hidden;
`;

const MainContent = styled.div`
  display: flex;
  align-content: center;
  overflow: auto;
  flex-direction: column;
`;

function App() {
  //variable object to hold dictionary of all the food.
  const [dictionaryObject, setDictionaryObject] = useState(undefined);
  // Function that gets the JSON object from the backend server and returns the array of foods
  async function getJSON() {
    const response = await axios.get(API_SERVER);
    setDictionaryObject(response.data)
    return response.data;
  }

  //When the app loads, it makes a call to the back-end
  React.useEffect(() => {
    getJSON();
  }, [])

  // variable to hold the name of the selected food item
  const [foodName, setFoodName] = useState('');

  // Function that sets a value to the food name select to be displayed in the message
  const handleSelect = (option) => {
    setFoodName(option);
  }

  // Function that filters through json array to find the selected food's food type
  const getFoodType = () => {
    let array = dictionaryObject.filter(option => option.name === foodName)
    if (array.length > 0) {
      return array[0].foodType;
    } else {
      return "";
    }
  }

  return (
    <Container>
      <Header />
      <SubContent>
        <MainContent>
          {dictionaryObject && dictionaryObject.data &&
            <>
              {/*Dropdown component*/}
              <Dropdown
                options={dictionaryObject.food}
                title={"Select a Food"}
                onSelect={handleSelect}
              />

              {/*Only display message if the food has not been selected and is not an Appetizer*/}
              {foodName !== "" && foodName !== "--" && foodName !== "Appetizer" &&
                <h4>You selected <b>{foodName}</b> which is a <b>{getFoodType()}</b></h4>
              }

              {/*Display message if the food is an Appetizer*/}
              {foodName === "Appetizer" &&
                <h4>You selected <b>{foodName}</b> which is an <b>{getFoodType()}</b></h4>
              }
            </>
          }
        </MainContent>
      </SubContent>
    </Container>
  );
}

export default App;
