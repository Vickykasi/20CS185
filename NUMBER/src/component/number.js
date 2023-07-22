import React from 'react';

const Number = ({ sortedIntegers }) => {
  return (
    <div>
      <h2>Sorted Integers:</h2>
      <ul>
        {sortedIntegers.map((integer) => (
          <li key={integer}>{integer}</li>
        ))}
      </ul>
    </div>
  );
};

export default Number;