// weaviate-frontend/App.js
import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import Result from './components/Result';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: searchQuery }),
      });

      if (response.ok) {
        const data = await response.json();
        setResults(data.results);
      } else {
        console.error('Failed to fetch search results');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <Result results={results} />
    </div>
  );
}

export default App;
