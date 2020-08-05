import { useState, useEffect } from 'react';
import axios from 'axios';

const begURL = 'http://kima19:56779/api/Search?q=';
const midURL = '&start=1&count=';
const endURL = '&dataset=livedata';

const useSolrSearch = (searchTerm = '', count = 10) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(false);
  const [numberFound, setNumberFound] = useState('search');
  const [hasMore, setHasmore] = useState(true);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    if (searchTerm === '') {
      return;
    }
    setLoading(true);
    axios
      .get(begURL + searchTerm + midURL + count + endURL, {
        headers: { 'Access-Control-Allow-Origin': '*' },
      })
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
