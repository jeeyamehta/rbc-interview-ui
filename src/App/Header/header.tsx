import * as React from 'react';
import styled from 'styled-components';

import { colours } from '../colours';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colours.accent};
  height: 120px;
  padding: 10px 100px 10px 100px;
`;

const Title = styled.h1`
  color: ${colours.black};
  font-size: 35px;
  margin: 10px 0 15px 0;
  align-self: center;
  font-weight: 600;
  width: 100%;
`;

const Subtitle = styled.h4`
  color: ${colours.darkGrey};
  font-weight: lighter;
  margin: 0 0 5px 0;
  font-size: 35px;
  width: 100%;
`;

const SubtitleSmall = styled(Subtitle)`
  font-size: 25px;
  display: flex;
  margin: 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

const TitleContainer = styled.div`
  flex-direction: row;
`;


export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Row>
        <TitleContainer>
          <Title>Jeeya Mehta</Title>
          <SubtitleSmall>RBC interview API program</SubtitleSmall>
        </TitleContainer>
      </Row>
    </HeaderContainer>
  )
};
