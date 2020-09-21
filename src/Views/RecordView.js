import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import * as ROUTES from '../constants/Routes';
import { genericBookCover } from '../components/genericBookCover/genericBookCover';

const RecordViewWrapper = styled.div`
  margin-bottom: 35px;
  padding: 10px 10px 10px 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: var(--iso-recordViewBg);
`;

const CoverAndBasicData = styled.div`
  display: flex;
`;

//duplicated in search container
const CoverImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

//duplicated in search container
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

const BasicRecordData = styled.div`
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

const DetailsRecordData = styled.div`
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

// this is a viev component for the single record detailed view. Not to be used in the search results
const RecordView = ({ results, bookId }) => {
  const [loading, setLoading] = useState(true);
  const [record, setRecord] = useState({ poop: 'kupka' });

  useState(() => {
    if (!results.documents) {
      return;
    }
    setLoading(true);
    setRecord(results.documents.find((item) => item.id === bookId));
    setLoading(false);
  }, [results]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <Link to={ROUTES.SEARCH_PAGE}>back to search</Link>
      <RecordViewWrapper>
        <CoverAndBasicData>
          <CoverImageWrapper>
            <CoverImage
              src={
                'http://covers.openlibrary.org/b/isbn/' +
                record.id +
                '-M.jpg?default=false'
              }
              alt="book cover"
              onError={genericBookCover}
            />
          </CoverImageWrapper>
          <BasicRecordData>
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
          </BasicRecordData>
        </CoverAndBasicData>

        <DetailsRecordData>
          <p>
            Year of publication: <span>{record.year}</span>
          </p>
          <p>
            Place of publication: <span>{record.place}</span>
          </p>
          <p>
            Keywords:{' '}
            <span>
              {record.keywords
                ? record.keywords.map((keyword) => keyword + '; ')
                : 'no keywords'}
            </span>
          </p>
          {/* create a component which will encapsulate the 'p' tag with null check */}
          {record.series ? (
            <p>
              Series: <span>{record.series}</span>
            </p>
          ) : null}
        </DetailsRecordData>
      </RecordViewWrapper>
    </div>
  );
};

export default RecordView;
