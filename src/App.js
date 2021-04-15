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
  const dictObj = JSON.parse(JSON.stringify(dictionary.food));
  const [value, setValue] = useState('');
  const handleSelect = (e) => {
    console.log(e);
    setValue(e)
  }
  return (
    <Container>
      <Header />
      <SubContent>
        <MainContent>
          <Dropdown
            options={dictObj}
            title={"Select a Food"}
            name={dictObj.name}
            onSelect={handleSelect}
          />

          <h4>You selected {value}</h4>
        </MainContent>
      </SubContent>
    </Container>
  );
}

export default App;
