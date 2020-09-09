import React from 'react';
import styled from 'styled-components';
import { IonButton } from '@ionic/react';
import { Link } from '@reach/router';
// import 'styled-components/macro'

const Header = styled.header`
  grid-area: header;
  overflow: hidden;
  /* consider how to solve scrolling content in the main window */
  /* position: fixed; 
  top: 0; */
  width: 100%;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 5px 20px -10px #000;
`;

const NavigationModule = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  padding: 10px 15px 10px 50px;
`;

const Logo = styled(Link)`
  font-size: 24px;
  margin: 0px;
  font-weight: bold;
  color: #7c7bbf;
`;

const StyledLink = styled(Link)`
  color: #7c7bbf;
  text-transform: uppercase;
  letter-spacing: 3.5px;
  font-weight: 200;
  &:hover {
    text-decoration: none;
    color: #a4a3ff;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 16px;
`;

const NavElement = styled.li`
  margin: 0 10px;
  list-style: none;
`;

const HideInDesktopView = styled.div`
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ showSearchBar, setShowSearchBar }) => (
  <Header>
    <NavigationModule>
      <Logo to="/">Mint Search</Logo>
      <NavLinks>
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
        <NavElement>
          <StyledLink to="/">Simple Search</StyledLink>
        </NavElement>
        <NavElement>
          <StyledLink to="/json_view">JSON view</StyledLink>
        </NavElement>
      </NavLinks>
    </NavigationModule>
  </Header>
);

export default Navbar;
