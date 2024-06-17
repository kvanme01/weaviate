// app/page.js

'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic

// Import SearchForm and Results 
import SearchForm from '../components/SearchForm';
import Results from '../components/Results';

export default function Home() {
  const [results, setResults] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for user's preferred color scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  const performSearch = async (query) => {
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }

      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error('Error performing search:', error);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <button
        className="absolute top-4 left-4 p-2 border rounded"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        Toggle Dark Mode
      </button>
      <h1 className="text-4xl font-bold mt-8">Quotes Search</h1>
      <SearchForm onSearch={performSearch} />
      <Results results={results} />
    </div>
  );
}



