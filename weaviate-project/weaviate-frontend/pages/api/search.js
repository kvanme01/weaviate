import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { query } = req.body;

  console.log('Received query:', query);

  const vectorSearchQuery = {
    query: `
      {
        Get {
          Quotes(nearText: {concepts: ["${query}"]}, limit: 5) {
            quote
            author
            tags
          }
        }
      }
    `
  };

  try {
    const response = await fetch('http://localhost:8080/v1/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vectorSearchQuery),
    });

    console.log('Weaviate response status:', response.status);
    console.log('Weaviate response statusText:', response.statusText);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to fetch search results:', errorText);
      throw new Error(`Failed to fetch search results: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Weaviate response data:', data);

    if (data.errors) {
      console.error('GraphQL errors:', data.errors);
      return res.status(500).json({ error: data.errors });
    }

    res.status(200).json({ results: data.data.Get.Quotes });
  } catch (error) {
    console.error('Error fetching data from Weaviate:', error);
    res.status(500).json({ error: 'Error fetching data from Weaviate' });
  }
}




