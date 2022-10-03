import React from 'react';

const Pagination = ({ goToPrevPage, goToNextPage }) => {
  return (
    <div>
      {goToPrevPage && <button onClick={goToPrevPage}>Previous</button>}
      {goToNextPage && <button onClick={goToNextPage}>Next</button>}
    </div>
  );
};

export default Pagination;
