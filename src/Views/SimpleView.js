import React from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import Spinner from '../components/Spinner/LdsSpinner';

const StyledResultsContainer = styled.div`
  max-width: 100%;
  max-height: 90%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
`;

const StyledRecord = styled.div`
  margin-bottom: 35px;

  p {
    margin-bottom: 0px;
    color: var(--iso-mainTextLight);
  }

  span {
    color: var(--iso-mainText);
  }
`;

const ResultsWrapper = styled.ul`
  overflow-y: auto;
`;

const SimpleViewRecord = ({ record }) => (
  <StyledRecord>
    <p>
      Std No: <span>{record.id}</span>
    </p>
    <p>
      Title: <span>{record.title}</span>
    </p>

    <p>
      Medium: <span>{record.medium}</span>
    </p>
    <p>
      Series: <span>{record.series}</span>
    </p>
    <p>
      Year of publication: <span>{record.year}</span>
    </p>
    <p>
      Keywords:{' '}
      <span>
        {record.keywords
          ? record.keywords.map((keyword) => keyword + '; ')
          : 'no keywords'}
      </span>
    </p>
  </StyledRecord>
);

const SimpleView = ({ results, loadMore, loading, errors, hasMore }) => {
  window.onscroll = debounce(() => {
    if (errors || loading || !hasMore) return;

    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      console.log('fetching data...');
      loadMore();
    }
  }, 100);

  return (
    <StyledResultsContainer>
      {results.documents ? (
        <ResultsWrapper>
          {results.documents.map((record) => (
            <SimpleViewRecord key={record.id} record={record} />
          ))}
        </ResultsWrapper>
      ) : (
        <p>This display format will provide simple output</p>
      )}
      {loading ? <Spinner /> : ''}
    </StyledResultsContainer>
  );
};

export default SimpleView;
