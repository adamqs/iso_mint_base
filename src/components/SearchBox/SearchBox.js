import React from 'react';
import styled from 'styled-components';

const SearchForm = styled.form`
  display: flex;
  align-items: stretch;
`;

const Btn = styled.button`
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const SearchButton = styled(Btn)`
  border-radius: 0px;
  border-color: var(--iso-searchButtonBorder);
  color: var(--iso-searchButtonText);
  :hover {
    color: var(--iso-searchButtonHoverText);
    background-color: var(--iso-searchButtonHoverColor);
  }
`;

const SearchBox = ({ searchTerm, setSearchTerm, runSearch }) => {
  return (
    <SearchForm
      onSubmit={(e) => {
        e.preventDefault();
        runSearch(e);
      }}
    >
      <label htmlFor="input_search" style={{ display: 'none' }}>
        Enter search term
      </label>
      <input
        id="input_search"
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <SearchButton
        className="btn btn-outline-primary"
        id="search_button"
        type="submit"
      >
        Search
      </SearchButton>
    </SearchForm>
  );
};

export default SearchBox;
