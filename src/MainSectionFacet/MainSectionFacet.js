import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBox from '../components/SearchBox/SearchBox';
import useSolrSearch from '../service/hooks/useSolrSearch';
import SimpleView from '../Views/SimpleView';
import { IonCheckbox } from '@ionic/react';

const Main = styled.main`
  transition: color var(--iso-colorTransitionSpeed),
    background-color var(--iso-colorTransitionSpeed);
  flex: 1;
  grid-area: main;
  background-color: var(--iso-mainBg);
  color: var(--iso-mainText);
  border: none;
  padding: 0.5rem;
`;

const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MockToggleWrapper = styled.div`
  padding-left: 10px;
`;

const MainSectionFacet = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [count, setCount] = useState(10);
  const [searchBoxString, setSearchBoxString] = useState('');
  // const [data, setData] = useState({ documents: [] });
  const [mock, setMock] = useState(false);
  const [results, numberFound, loading, errors, hasMore] = useSolrSearch(
    searchTerm,
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

  return (
    <Main>
      <SearchBoxWrapper>
        <SearchBox
          searchBoxString={searchBoxString}
          setSearchBoxString={setSearchBoxString}
          runSearch={runSearch}
        />
        <MockToggleWrapper>
          <IonCheckbox id="mockData" value={mock} onIonChange={toggleMock} />
          <label htmlFor="mockData">Mock data</label>
        </MockToggleWrapper>
      </SearchBoxWrapper>
      {/* <div>
        <h3>Diagnostics</h3>
        <p>mock: {mock ? 'true' : 'false'}</p>
        <p>searchTerm: {searchTerm} </p>
        <p>searchBox: {searchBoxString}</p>
        <p>results: {results ? 'there is something' : 'nope, nothing yet'} </p>
      </div> */}
      <p>Search Results</p>
      {results ? (
        <SimpleView results={results} loading={loading} />
      ) : (
        <h2>no data</h2>
      )}
    </Main>
  );
};

export default MainSectionFacet;
