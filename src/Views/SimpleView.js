import React from 'react';
import styled from 'styled-components';
import Spinner from '../components/Spinner/LdsSpinner';

const StyledResultsWrapper = styled.div`
  max-width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledRecord = styled.div`
  margin-bottom: 25px;

  li {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0px;
    color: #7c7bbf;
  }

  span {
    color: #45446b;
  }
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

const SimpleView = ({ results, loading }) => {
  return (
    <StyledResultsWrapper>
      {results.documents ? (
        <ul>
          {results.documents.map((record) => (
            <SimpleViewRecord key={record.id} record={record} />
          ))}
        </ul>
      ) : (
        <p>This display format will provide simple output</p>
      )}
      {loading ? <Spinner /> : ''}
    </StyledResultsWrapper>
  );
};

export default SimpleView;
