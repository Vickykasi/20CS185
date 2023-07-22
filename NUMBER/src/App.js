import React, { useState } from 'react';
import axios from 'axios';
import Number from './component/number'
import SortedIntegersDisplay from './component/sort'; 

function App() {
  const [userInput, setUserInput] = useState('');
  const [sortedIntegers, setSortedIntegers] = useState([]);

  
  async function fetchData(url) {
    try {
      const response = await axios.get(url);
      const data = response.data; 
      const numbers = data?.numbers || []; 
      return numbers;
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error.message);
      return []; 
    }
  }

  async function fetchAndCollectData() {
    try {

      const urls = userInput.split(',');

      const responses = await Promise.all(urls.map(url => fetchData(url)));


      const allIntegers = responses.reduce((acc, numbers) => [...acc, ...numbers], []);


      const uniqueSortedIntegers = [...new Set(allIntegers)].sort((a, b) => a - b);

      setSortedIntegers(uniqueSortedIntegers);
    } catch (error) {
      console.error('Error fetching and collecting data:', error.message);
    }
  }


  function handleSubmit(e) {
    e.preventDefault();
    fetchAndCollectData();
  }

  return (
    <div className="App">
      <h1>NUMBER RETRIVER FROM URL</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter URLs:
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </label>
        <button type="submit">Fetch and Sort Integers</button>
      </form>
      {sortedIntegers.length > 0 && (
        <>
          <SortedIntegersDisplay sortedIntegers={sortedIntegers} />
        </>
      )}
    </div>
  );
}

export default App;

