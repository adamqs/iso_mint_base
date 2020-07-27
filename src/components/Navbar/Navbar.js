import React from 'react';
import { Link } from '@reach/router';
// import 'styled-components/macro'
import styled from 'styled-components';

const Bar = styled.nav`
  overflow: hidden;
  position: fixed;
  top: 0;
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

const Logo = styled.p`
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

const Navbar = () => (
  <Bar>
    <NavigationModule>
      <Logo>SOLR Search</Logo>
      <NavLinks>
        <NavElement>
          <StyledLink to="/">Simple Search</StyledLink>
        </NavElement>
        <NavElement>
          <StyledLink to="/json_view">JSON view</StyledLink>
        </NavElement>
      </NavLinks>
    </NavigationModule>
  </Bar>
);

export default Navbar;
