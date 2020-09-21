import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBox from '../components/SearchBox/SearchBox';
import useSolrSearch from '../service/hooks/useSolrSearch';
import SearchContainer from '../SearchContainer/SearchContainer';
import RecordView from '../Views/RecordView';
import { IonCheckbox } from '@ionic/react';
import { Router } from '@reach/router';
import * as ROUTES from '../constants/Routes';
import Aside from '../Aside/Aside';

const Main = styled.main`
  transition: color var(--iso-colorTransitionSpeed),
    background-color var(--iso-colorTransitionSpeed);
  /* flex: 1 1 80%; */
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 91%;
  grid-area: main;
  background-color: var(--iso-mainBg);
  color: var(--iso-mainText);
  border: none;
  padding: 0.5rem 0.5rem 0.5rem 0.2rem;
`;

const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const StyledResultsContainerRouter = styled(Router)`
  max-width: 100%;
  max-height: 89%;
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const TogglesContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const ToggleWrapper = styled.div`
  padding-left: 10px;
`;

const MainSectionFacet = ({ showSearchBar, toggleState, setToggleState }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [mediumFilters, setMediumFilters] = useState([]);
  const [count, setCount] = useState(10);
  const [searchBoxString, setSearchBoxString] = useState('');
  const [mock, setMock] = useState(false);
  const [view, setView] = useState(false);
  const [results, loading, errors, hasMore] = useSolrSearch(
    searchTerm,
    mediumFilters,
    count,
    mock
  );

  const runSearch = (e) => {
    e.preventDefault();
    // reset the value controlling the number of records fetched
    setCount(10);
    // setting the search term triggers the data fetch since this variable is used
    // as a 'dependency' in useFetchSearchResults hook
    setSearchTerm(searchBoxString);
  };

  const toggleMock = () => {
    setSearchBoxString(mock ? '' : 'Water');
    setMock((prevState) => !prevState);
  };

  const loadMore = () => {
    setCount(count + 10);
  };

  return (
    <>
      <Aside
        showSearchBar={showSearchBar}
        toggleState={toggleState}
        setToggleState={setToggleState}
        facets={results?.facets}
        mediumFilters={mediumFilters}
        setMediumFilters={setMediumFilters}
      />
      <Main>
        <SearchBoxWrapper>
          <SearchBox
            searchBoxString={searchBoxString}
            setSearchBoxString={setSearchBoxString}
            runSearch={runSearch}
          />
          <TogglesContainer>
            <ToggleWrapper>
              <IonCheckbox
                id="mockData"
                value={mock}
                onIonChange={toggleMock}
              />
              <label htmlFor="mockData">Mock data</label>
            </ToggleWrapper>
            <ToggleWrapper>
              <IonCheckbox
                id="view"
                value={view}
                onIonChange={() => {
                  setView((prevState) => !prevState);
                }}
              />
              <label htmlFor="view">Detailed View</label>
            </ToggleWrapper>
          </TogglesContainer>
        </SearchBoxWrapper>
        <StyledResultsContainerRouter>
          <SearchContainer
            results={results}
            loading={loading}
            hasMore={hasMore}
            loadMore={loadMore}
            errors={errors}
            view={view}
            path={ROUTES.SEARCH_PAGE}
          />
          <RecordView path="/details/:bookId" results={results} />
        </StyledResultsContainerRouter>
      </Main>
    </>
  );
};

export default MainSectionFacet;
