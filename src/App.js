import React, { useState } from 'react';
import { IonApp, IonButton } from '@ionic/react';
import styled from 'styled-components';
import { ThemesSelector } from './components/Themes/';

import Navbar from './components/Navbar/Navbar';
import ProtoNavbar from './components/ProtoNavbar/ProtoNavbar';

import ElasticToggle from './components/ElasticToggle/ElasticToggle';

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

const Aside = styled.aside`
  display: flex;
  grid-area: aside;
  background-color: var(--iso-sidepanelBg);
  color: var(--iso-sidepanelText);
  border: none;
  padding: 0.5rem;

  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  position: ${({ show }) => (show ? 'relative' : 'absolute')}; ;
  max-height: ${({ show }) => (show ? '300px' : 0)}; 
  /* opacity: ${({ show }) => (show ? 1 : 0)}; */
  transition: opacity 0s, max-height 0.8s ease;

  @media (min-width: 768px) {
    transition: opacity 0s, max-height 0s;
    visibility: visible;
    position: relative;
    max-height: 100%;
    opacity: 1;
  }
`;

const Main = styled.main`
  flex: 1;
  grid-area: main;
  background-color: var(--iso-mainBg);
  color: var(--iso-mainText);
  border: none;
  padding: 0.5rem;
`;

function App() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [toggleState, setToggleState] = useState(true);

  return (
    <IonAppStyled>
      <ThemesSelector theme={toggleState ? 'default' : 'iso'} />
      <ProtoNavbar
        showSearchBar={showSearchBar}
        setShowSearchBar={setShowSearchBar}
      />
      {/* <Navbar
        showSearchBar={showSearchBar}
        setShowSearchBar={setShowSearchBar}
      /> */}
      <Aside show={showSearchBar}>
        <ElasticToggle
          toggleState={toggleState}
          setToggleState={setToggleState}
        />
        <p>aside</p>
      </Aside>
      <Main>
        <p>main</p>
      </Main>
    </IonAppStyled>
  );
}

export default App;
