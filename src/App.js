import React from 'react';
import logo from './logo.svg';
import { IonApp } from '@ionic/react';
import styled from 'styled-components';

const IonAppStyled = styled(IonApp)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media (min-width: 768px) {
    display: grid;
    grid-template-areas:
      'header header'
      'aside main';
    grid-template-columns: 220px 1fr;
    grid-template-rows: 4rem auto;
  }
`;

const Header = styled.header`
  grid-area: header;
  background-color: #88d498;
  color: #fbf7ef;
  border: none;
  padding: 0.5rem;
`;

const Aside = styled.aside`
  grid-area: aside;
  background-color: #c6dabf;
  color: #fbf7ef;
  border: none;
  padding: 0.5rem;
`;

const Main = styled.main`
  flex: 1;
  grid-area: main;
  background-color: #fbf7ef;
  color: #1a936f;
  border: none;
  padding: 0.5rem;
`;

function App() {
  return (
    <IonAppStyled>
      <Header>
        <p>header</p>
      </Header>
      <Aside>
        <p>aside</p>
      </Aside>
      <Main>
        <p>main</p>
      </Main>
    </IonAppStyled>
  );
}

export default App;
