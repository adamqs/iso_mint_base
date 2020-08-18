import React, { useState } from 'react';
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
    <img
      src={'http://covers.openlibrary.org/b/isbn/' + record.id + '-L.jpg'}
      alt="book cover"
    />
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

// 'http://covers.openlibrary.org/b/isbn/9780385472579-L.jpg'
const OpenCoverAPI = 'http://covers.openlibrary.org/b/isbn/';

const OpenCover = () => {
  const [imageUrl, setImageUrl] = useState(
    'https://cdn.shopify.com/s/files/1/0053/7195/3242/articles/IMG_0908_768x512.jpg?v=1572955774'
  );

  const fetchCover = () => {
    fetch(OpenCoverAPI)
      .then((response) => {
        console.log(response);
        // setImageUrl(response.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>cover image</p>
      <button
        onClick={() => {
          fetchCover();
        }}
      >
        fetch cover
      </button>
      <img src={imageUrl} alt="dog" />
    </div>
  );
};

const SimpleViewCover = ({ results, loadMore, loading, errors, hasMore }) => {
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

export default SimpleViewCover;