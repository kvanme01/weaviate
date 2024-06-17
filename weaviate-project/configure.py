import weaviate

# Connect to Weaviate instance
client = weaviate.Client("http://localhost:8080")

# Define the schema for your data
schema = {
    "class": "Quotes",
    "vectorizer": "text2vec-transformers",
    "properties": [
        {"name": "quote", "dataType": ["string"]},
        {"name": "author", "dataType": ["string"]},
        {"name": "tags", "dataType": ["string[]"]}
    ]
}

# Create the class in Weaviate
client.schema.create_class(schema)

print("Schema has been created successfully.")

