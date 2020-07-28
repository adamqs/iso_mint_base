import React, { useState } from 'react';
import { IonApp, IonButton } from '@ionic/react';
import styled from 'styled-components';
import { ThemesSelector } from './components/Themes/';

import Navbar from './components/Navbar/Navbar';
import ProtoNavbar from './components/ProtoNavbar/ProtoNavbar';

import Aside from './Aside/Aside';

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
      <Aside
        showSearchBar={showSearchBar}
        toggleState={toggleState}
        setToggleState={setToggleState}
      />
      <Main>
        <p>main</p>
      </Main>
    </IonAppStyled>
  );
}

export default App;
