import React, { useState } from 'react';
import { IonApp, IonButton } from '@ionic/react';
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
  display: flex;
  justify-content: space-between;
`;

const Aside = styled.aside`
  display: flex;
  grid-area: aside;
  background-color: #c6dabf;
  color: #fbf7ef;
  border: none;
  padding: 0.5rem;

  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  position:${({ show }) => (show ? 'relative' : 'absolute')}; ;
  max-height: ${({ show }) => (show ? '300px' : 0)}; 
  /* opacity: ${({ show }) => (show ? 1 : 0)}; */
  transition: opacity 0s, max-height 0.8s ease;

  @media (min-width: 768px) {
    visibility: visible;
    position: relative;
    max-height: 100%;
    opacity: 1;
  }
`;

const Main = styled.main`
  flex: 1;
  grid-area: main;
  background-color: #fbf7ef;
  color: #1a936f;
  border: none;
  padding: 0.5rem;
`;

const HideInDesktopView = styled.div`
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`;

function App() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <IonAppStyled>
      <Header>
        <p>header</p>
        <HideInDesktopView>
          <IonButton
            color="light"
            fill="outline"
            onClick={() => {
              setShowSearchBar(!showSearchBar);
            }}
          >
            {showSearchBar ? 'Hide Settings' : 'Show Settings'}
          </IonButton>
        </HideInDesktopView>
      </Header>
      <Aside show={showSearchBar}>
        <p>aside</p>
      </Aside>
      <Main>
        <p>main</p>
      </Main>
    </IonAppStyled>
  );
}

export default App;
