import React from 'react';
import styled from 'styled-components';
import { IonCheckbox, IonToggle, IonLabel } from '@ionic/react';

const StyledAside = styled.aside`
  position: absolute;
  top: 55px;
  z-index: 108;
  display: flex;
  justify-content: space-between;
  grid-area: aside;
  background-color: var(--iso-sidepanelBg);
  color: var(--iso-sidepanelText);
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
    position: static;
    max-height: 100%;
    opacity: 1;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const StyledFacetsList = styled.ul`
  padding-left: 0px;
  overflow-y: auto;
  list-style: none;
`;

const FacetItem = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const IonCheckboxFacets = styled(IonCheckbox)`
  margin-right: 5px;
`;

const Aside = ({
  showSearchBar,
  toggleState,
  setToggleState,
  facets,
  mediumFilters = [],
  setMediumFilters,
}) => {
  const toggleFacetFilter = (e, facetVal) => {
    if (!!mediumFilters.find((element) => element === facetVal)) {
      setMediumFilters((prevState) =>
        prevState.filter((element) => element !== facetVal)
      );
    } else {
      setMediumFilters((prevState) => [facetVal, ...prevState]);
    }
  };

  // const FacetsList = ({ facets, toggleFacetFilter }) => {
  //   if (typeof facets.medium_types === 'undefined') {
  //     return null;
  //   }
  //   // console.log(JSON.stringify(facets.medium_types));
  //   return (
  //     <StyledFacetsList>
  //       {facets.medium_types.buckets.map((facet) => {
  //         return (
  //           <li key={facet.val}>
  //             <FacetItem>
  //               <IonCheckboxFacets
  //                 mode="ios"
  //                 onIonChange={(e) => toggleFacetFilter(e, facet.val)}
  //               />
  //               <IonLabel>
  //                 <span>{facet.val}: </span>
  //                 <span>{facet.count}</span>
  //               </IonLabel>
  //             </FacetItem>
  //           </li>
  //         );
  //       })}
  //     </StyledFacetsList>
  //   );
  // };

  return (
    <StyledAside show={showSearchBar}>
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
        {facets?.medium_types?.buckets ? (
          <>
            <p>Medium types</p>
            <StyledFacetsList>
              {facets.medium_types.buckets.map((facet) => {
                return (
                  <li key={facet.val}>
                    <FacetItem>
                      <IonCheckboxFacets
                        mode="ios"
                        checked={mediumFilters.includes(facet.val)}
                        onIonChange={(e) => toggleFacetFilter(e, facet.val)}
                      />
                      <IonLabel>
                        <span>{facet.val}: </span>
                        <span>{facet.count}</span>
                      </IonLabel>
                    </FacetItem>
                  </li>
                );
              })}
            </StyledFacetsList>
          </>
        ) : null}
      </div>
    </StyledAside>
  );
};

export default Aside;
