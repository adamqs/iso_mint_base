import React from 'react';
import styled from 'styled-components';
import { IonItem, IonToggle, IonLabel } from '@ionic/react';

const StyledAside = styled.aside`
  display: flex;
  justify-content: space-between;
  grid-area: aside;
  background-color: var(--iso-sidepanelBg);
  color: var(--iso-sidepanelText);
  /* The below is only necessary if we use IonItem instead of div */
  /* --ion-background-color: transparent;
  --ion-text-color: var(--iso-sidepanelText); */
  border: none;
  padding: 0.5rem;

  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  position: ${({ show }) => (show ? 'relative' : 'absolute')};
  max-height: ${({ show }) => (show ? 'auto' : 0)};
  /* the animations might be pain in the ... to implement since they dont inclute the element's children */
  /* transition: opacity 0s, max-height 0.8s ease; */
  transition: color var(--iso-colorTransitionSpeed),
    background-color var(--iso-colorTransitionSpeed);

  @media (min-width: 768px) {
    transition: opacity 0s, max-height 0s, color var(--iso-colorTransitionSpeed),
      background-color var(--iso-colorTransitionSpeed);
    visibility: visible;
    position: relative;
    max-height: 100%;
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const FacetsWrapper = styled.div`
  overflow-y: auto;
`;
const isOdd = (number) => number % 2;

const Aside = ({
  showSearchBar,
  toggleState,
  setToggleState,
  facets = { fields: { medium: [] } },
}) => {
  return (
    <StyledAside show={showSearchBar}>
      <div>
        <p>aside</p>
      </div>
      <div>
        <IonToggle
          checked={toggleState}
          onIonChange={() => setToggleState((prevState) => !prevState)}
          color="light"
          mode="ios"
        />
        <IonLabel>Change theme</IonLabel>
      </div>
      <div>
        <p>Facets</p>
        <ul>
          {facets.fields.medium.map((item) => {
            const oddRecord = isOdd(facets.fields.medium.indexOf(item));
            const element = oddRecord ? (
              <>
                <span>{item}</span>
                <br />
              </>
            ) : (
              <span>{item} : </span>
            );
            return element;
          })}
        </ul>
      </div>
    </StyledAside>
  );
};

export default Aside;
