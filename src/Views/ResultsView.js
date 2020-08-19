import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import Spinner from '../components/Spinner/LdsSpinner';
import genericBookCover from './generic-book-cover.jpg';

const StyledResultsContainer = styled.div`
  max-width: 100%;
  max-height: 90%;
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const ResultsWrapper = styled.ul`
  height: 100%;
  overflow-y: auto;
`;

const StyledRecord = styled.div`
  margin-bottom: 35px;
  display: flex;
`;

const RecordDetailsWrapper = styled.div`
  padding-left: 1.5rem;
  max-width: 1200px;
  p {
    margin-bottom: 0px;
    color: var(--iso-mainTextLight);
  }

  span {
    color: var(--iso-mainText);
  }
`;

const CoverImage = styled.img`
  max-width: 15rem;
  min-width: 15rem;
  max-height: 25rem;
`;

const RecordWievWithCover = ({ record, addDefaultSrc }) => (
  <StyledRecord>
    <CoverImage
      src={
        'http://covers.openlibrary.org/b/isbn/' +
        record.id +
        '-L.jpg?default=false'
      }
      alt="book cover"
      onError={addDefaultSrc}
    />
    <RecordDetailsWrapper>
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
    </RecordDetailsWrapper>
  </StyledRecord>
);

const RecordViewSimple = ({ record }) => (
  <StyledRecord>
    <RecordDetailsWrapper>
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
    </RecordDetailsWrapper>
  </StyledRecord>
);

const RecordViewSelector = ({ record, view }) => {
  const addDefaultSrc = (ev) => {
    ev.target.src = genericBookCover;
    // 'https://cdn.shopify.com/s/files/1/0053/7195/3242/articles/IMG_0908_768x512.jpg?v=1572955774';
  };

  return (
    <>
      {view ? (
        <RecordWievWithCover record={record} addDefaultSrc={addDefaultSrc} />
      ) : (
        <RecordViewSimple record={record} />
      )}
    </>
  );
};

// 'http://covers.openlibrary.org/b/isbn/9780385472579-L.jpg'
const OpenCoverAPI = 'http://covers.openlibrary.org/b/isbn/';

const ResultsView = ({ results, loadMore, loading, errors, hasMore, view }) => {
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
            <RecordViewSelector key={record.id} record={record} view={view} />
          ))}
        </ResultsWrapper>
      ) : (
        <p>This display format will provide simple output</p>
      )}
      {loading ? <Spinner /> : ''}
    </StyledResultsContainer>
  );
};

export default ResultsView;
