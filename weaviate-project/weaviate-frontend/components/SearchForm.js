import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8"> {/* Adding top margin to the form */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border rounded w-80 text-black m-4" // Adding margin around the input box
        placeholder="Enter a search term"
      />
      <button
        type="submit"
        className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;





