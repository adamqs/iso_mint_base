import React from 'react';
import styled from 'styled-components';
import ElasticToggle from '../components/ElasticToggle/ElasticToggle';

const StyledAside = styled.aside`
  display: flex;
  grid-area: aside;
  background-color: var(--iso-sidepanelBg);
  color: var(--iso-sidepanelText);
  border: none;
  padding: 0.5rem;

  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  position: ${({ show }) => (show ? 'relative' : 'absolute')};
  max-height: ${({ show }) => (show ? '300px' : 0)};
  transition: opacity 0s, max-height 0.8s ease;

  @media (min-width: 768px) {
    transition: opacity 0s, max-height 0s;
    visibility: visible;
    position: relative;
    max-height: 100%;
    opacity: 1;
  }
`;

const Aside = ({ showSearchBar, toggleState, setToggleState }) => {
  return (
    <StyledAside show={showSearchBar}>
      <ElasticToggle
        toggleState={toggleState}
        setToggleState={setToggleState}
      />
      <p>aside</p>
    </StyledAside>
  );
};

export default Aside;
