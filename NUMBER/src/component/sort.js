import React from 'react';

const SortedIntegersDisplay = ({ sortedIntegers }) => {
  return (
    <div>
      <h2 className='url'>URL CONTAINS</h2>
      <h3 className='values'>
        {sortedIntegers.map((integer) => (
          <p key={integer}>{integer}</p>
        ))}
      </h3>
    </div>
  );
};

export default SortedIntegersDisplay;