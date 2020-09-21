import React from 'react';
import styled from 'styled-components';
import { IonButton } from '@ionic/react';
import { Link } from '@reach/router';
import * as ROUTES from '../../constants/Routes';

const Header = styled.header`
  height: 55px;
  position: fixed;
  width: 100%;
  transition: color var(--iso-colorTransitionSpeed),
    background-color var(--iso-colorTransitionSpeed);
  background-color: var(--iso-mainColour);
  color: var(--iso-navTextLight);
  border: none;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    /* settings for grid */
    position: static;
    grid-area: header;
    height: auto;
  }
`;

const Logo = styled(Link)`
  font-size: 24px;
  margin: 0px;
  font-weight: bold;
  color: var(--iso-navTextLight);
  text-decoration: none;
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
    <Logo to={ROUTES.SEARCH_PAGE}>Mint Search</Logo>
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
