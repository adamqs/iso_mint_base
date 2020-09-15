import { useState, useEffect } from 'react';
import axios from 'axios';

import mockAPI from '../../API/q_water&facet_medium.json';

const baseURL = 'http://kima19:56779/api/Search?q=';
const filterURL = '&fq=';
const startURL = '&start=1&count=';
const datasetURL = '&dataset=livedata';

const useSolrSearch = (
  searchTerm = '',
  mediumFilters = [],
  count = 10,
  mock = false
) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(false);
  const [numberFound, setNumberFound] = useState('search');
  const [hasMore, setHasmore] = useState(true);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    if (mock) return setResults(mockAPI);
    if (searchTerm === '') return;

    setLoading(true);
    axios
      .get(
        baseURL +
          searchTerm +
          filterURL +
          mediumFilters +
          startURL +
          count +
          datasetURL,
        {
          headers: { 'Access-Control-Allow-Origin': '*' },
        }
      )
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setLoading(false);
        setResults(response.data);
        setNumberFound(response.data.numberFound);
        setHasmore(numberFound > count);
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        setErrors(true);
      });
  }, [searchTerm, count, numberFound]);

  return [results, numberFound, loading, errors, hasMore];
};

export default useSolrSearch;
