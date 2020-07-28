import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBox from '../components/SearchBox/SearchBox';

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

const DataDisplay = ({ data }) => (
  <div>
    {data.documents.map((record) => (
      <ul key={record.id}>
        <li>{record.title}</li>
      </ul>
    ))}
  </div>
);

const MainSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState({ documents: [] });

  const runSearch = (e) => {
    setData(mockAPIData);
  };

  return (
    <Main>
      <SearchBox
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        runSearch={runSearch}
      />
      <p>Search Results</p>
      {data ? <DataDisplay data={data} /> : <h3>no data</h3>}
    </Main>
  );
};

export default MainSection;
