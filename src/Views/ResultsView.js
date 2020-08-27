import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import Spinner from '../components/Spinner/LdsSpinner';
import { Router, Link } from '@reach/router';

import genericBookCover from './generic-book-cover.jpg';

const StyledResultsContainerRouter = styled(Router)`
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
  margin-top: 0;
  padding-left: 5px;
`;

const StyledRecord = styled.div`
  margin-bottom: 35px;
  padding: 10px 10px 10px 10px;
  border-radius: 5px;
  display: flex;
  align-content: center;
  background-color: var(--iso-recordViewBg);
`;

const StyledRecordWithCover = styled.div`
  margin-bottom: 35px;
  padding: 10px 10px 10px 10px;
  border-radius: 5px;
  display: flex;
  align-content: center;
  background-color: var(--iso-recordViewBg);
`;

const RecordDetailsWrapper = styled.div`
  padding-left: 5px;
  max-width: 1200px;
  p {
    margin-top: 0px;
    margin-bottom: 8px;
    color: var(--iso-mainTextLight);
  }

  p:last-child {
    margin-bottom: 0px;
  }

  span {
    color: var(--iso-mainText);
  }
`;

const CoverImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CoverImage = styled.img`
  max-width: 100px;
  max-height: 146px;
  height: auto;
  @media (min-width: 768px) {
    max-width: 200px;
    min-width: 200px;
    max-height: 292px;
  }
`;

const RecordView = ({ record, addDefaultSrc }) => (
  <StyledRecordWithCover>
    <CoverImageWrapper>
      <CoverImage
        src={
          'http://covers.openlibrary.org/b/isbn/' +
          record.id +
          '-M.jpg?default=false'
        }
        alt="book cover"
        onError={addDefaultSrc}
      />
    </CoverImageWrapper>
    <RecordDetailsWrapper>
      <p>
        Std No: <span>{record.id}</span>
      </p>
      <p>
        Title: <span>{record.title}</span>
      </p>
      <p>
        Authors: <span>{record.solr_author}</span>
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
  </StyledRecordWithCover>
);

const RecordsWievWithCover = ({ record, addDefaultSrc }) => (
  <StyledRecordWithCover>
    <CoverImageWrapper>
      <CoverImage
        src={
          'http://covers.openlibrary.org/b/isbn/' +
          record.id +
          '-M.jpg?default=false'
        }
        alt="book cover"
        onError={addDefaultSrc}
      />
    </CoverImageWrapper>
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
  </StyledRecordWithCover>
);

const RecordsViewSimple = ({ record }) => (
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
      <Link to={`/details/${record.id}`}>Details</Link>
    </RecordDetailsWrapper>
  </StyledRecord>
);

const RecordViewSelector = ({ record, view }) => {
  const addDefaultSrc = (ev) => {
    ev.target.src = genericBookCover;
  };

  return (
    <>
      {view ? (
        <RecordsWievWithCover record={record} addDefaultSrc={addDefaultSrc} />
      ) : (
        <RecordsViewSimple record={record} />
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

  const SearchResults = ({ results }) => (
    <ResultsWrapper>
      {results.documents.map((record) => (
        <RecordViewSelector key={record.id} record={record} view={view} />
      ))}
    </ResultsWrapper>
  );

  if (loading) return <Spinner />;
  if (!results.documents) {
    return <p>No results</p>;
  }

  return (
    <StyledResultsContainerRouter>
      <SearchResults path="/" results={results} />
    </StyledResultsContainerRouter>
  );
};

export default ResultsView;
