import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

const ListNames = () => {
  const [name, setName] = useState();
  const [currPage, setCurrPage] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currPage, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPage(res.data.next);
        setPrevPage(res.data.previous);
        setName(res.data.results.map((n) => n.name));
      });
    return () => cancel();
  }, [currPage]);

  const goToNextPage = () => {
    setCurrPage(nextPage);
  };

  const goToPrevPage = () => {
    setCurrPage(prevPage);
  };

  if (loading) return 'Loading...';

  return (
    <>
      <div>
        {name.map((n) => (
          <div key={n}>{n}</div>
        ))}
      </div>
      <Pagination
        goToNextPage={nextPage ? goToNextPage : null}
        goToPrevPage={prevPage ? goToPrevPage : null}
      />
    </>
  );
};

export default ListNames;
