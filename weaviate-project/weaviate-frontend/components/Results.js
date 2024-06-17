// components/Results.js

'use client';

export default function Results({ results }) {
  return (
    <div className="mt-8">
      {results.length > 0 ? (
        <ul className="space-y-4">
          {results.map((result, index) => (
            <li key={index} className="p-4 border rounded">
              <p className="text-lg font-semibold">{result.quote}</p>
              <p className="text-sm text-gray-600">- {result.author}</p>
              {result.tags && (
                <p className="text-xs text-gray-500">
                  Tags: {result.tags.join(', ')}
                </p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600">No results found.</p>
      )}
    </div>
  );
}
