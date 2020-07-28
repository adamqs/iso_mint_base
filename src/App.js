import React, { useState } from 'react';
import { IonApp, IonButton } from '@ionic/react';
import styled from 'styled-components';
import { ThemesSelector } from './components/Themes/';

import ProtoNavbar from './components/ProtoNavbar/ProtoNavbar';
import Aside from './Aside/Aside';
import MainSection from './MainSection/MainSection';

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
      <Aside
        showSearchBar={showSearchBar}
        toggleState={toggleState}
        setToggleState={setToggleState}
      />
      <MainSection />
    </IonAppStyled>
  );
}

export default App;
