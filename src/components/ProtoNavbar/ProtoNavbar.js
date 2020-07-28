import React from 'react';
import styled from 'styled-components';
import { IonButton } from '@ionic/react';

const Header = styled.header`
  transition: color var(--iso-colorTransitionSpeed),
    background-color var(--iso-colorTransitionSpeed);
  grid-area: header;
  background-color: var(--iso-mainColour);
  color: #fbf7ef;
  border: none;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.p`
  font-size: 24px;
  margin: 0px;
  font-weight: bold;
`;

const HideInDesktopView = styled.div`
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`;

const ProtoNavbar = ({ showSearchBar, setShowSearchBar }) => (
  <Header>
    {/* <p>header</p> */}
    <Logo>Mint Search</Logo>
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
