import React from 'react';
import styled from 'styled-components';
import { IonButton } from '@ionic/react';

const Header = styled.header`
  grid-area: header;
  background-color: #88d498;
  color: #fbf7ef;
  border: none;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

const HideInDesktopView = styled.div`
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`;

const ProtoNavbar = ({ showSearchBar, setShowSearchBar }) => (
  <Header>
    <p>header</p>
    <HideInDesktopView>
      <IonButton
        color="light"
        fill="outline"
        onClick={() => {
          setShowSearchBar((showSearchBar) => !showSearchBar);
        }}
      >
        {showSearchBar ? 'Hide Settings' : 'Show Settings'}
      </IonButton>
    </HideInDesktopView>
  </Header>
);

export default ProtoNavbar;
