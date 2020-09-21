import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemesSelector } from './components/Themes/';

import ProtoNavbar from './components/ProtoNavbar/Navbar';
import MainSection from './MainSectionFacet/MainSection';

const IonAppStyled = styled.div`
  height: 100vh;
  @media (min-width: 768px) {
    display: grid;
    grid-template-areas:
      'header header'
      'aside main';
    grid-template-columns: 220px 1fr;
    grid-template-rows: 4rem 100%;
  }
`;

function App() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [toggleState, setToggleState] = useState(true);

  return (
    <IonAppStyled>
      <ThemesSelector theme={toggleState ? 'iso' : 'default'} />
      <ProtoNavbar
        showSearchBar={showSearchBar}
        setShowSearchBar={setShowSearchBar}
      />

      <MainSection
        showSearchBar={showSearchBar}
        toggleState={toggleState}
        setToggleState={setToggleState}
      />
    </IonAppStyled>
  );
}

export default App;
