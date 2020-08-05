import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBox from '../components/SearchBox/SearchBox';
import useSolrSearch from '../service/hooks/useSolrSearch';
import SimpleView from '../Views/SimpleView';

import mockAPIData from '../API/solrApiResponse.json';

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

const MainSectionFacet = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [count, setCount] = useState(10);
  // const [data, setData] = useState({ documents: [] });
  const [results, numberFound, loading, errors, hasMore] = useSolrSearch(
    searchTerm,
    count
  );

  const runSearch = (e) => {
    e.preventDefault();
    // reset the value controlling the number of records fetched
    setCount(10);
    // setting the search term triggers the data fetch since this variable is used
    // as a 'dependency' in useFetchSearchResults hook
    setSearchTerm(searchTerm);
  };

  return (
    <Main>
      <SearchBox
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        runSearch={runSearch}
      />
      <p>Search Results</p>
      {results ? (
        <SimpleView data={results} loading={loading} />
      ) : (
        <h3>no data</h3>
      )}
    </Main>
  );
};

export default MainSectionFacet;
