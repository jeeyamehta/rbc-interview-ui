import React from 'react';
import styled from 'styled-components';

import { Header } from './Header';
import { colours } from './colours';
import Dropdown from './dropdown';

import dictionary from './dictionary.json';

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
  flex: 1;
  flex-direction: row;
  overflow: hidden;
  background-color: ${colours.lightestGrey};
`;

const MainContent = styled.div`
  display: flex;
  align-content: center;
  flex: 4;
  overflow: auto;
  flex-direction: column;
  background-color: ${colours.lightestGrey};
`;

const Subtitle = styled.h4`
  margin-bottom: 3px;
`;

const Summary = styled.h4`
  font-weight: normal;
`;

function App() {
  const dictObj = JSON.parse(JSON.stringify(dictionary));
  console.log(dictObj);
  return (
    <Container>
      <Header />
      <SubContent>
        <MainContent>
hi
        </MainContent>
      </SubContent>
    </Container>
  );
}

export default App;
