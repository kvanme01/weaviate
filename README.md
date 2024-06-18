# Quote Search with Weaviate

## Overview

This project implements a quote search functionality using Weaviate, a vector search engine. It allows users to search for quotes by entering keywords or phrases and retrieves relevant quotes along with their authors and tags using both vector and hybrid search models. This project utilizes Hugging Face's Transformers library for text vectorization. Specifically, it employs the text2vec-transformers module in Weaviate, which integrates Hugging Face's pre-trained transformer models for natural language processing.The dataset used can be found here: https://huggingface.co/datasets/Abirate/english_quotes#data-fields .

## Requirements

- Python 3.x
- Weaviate
- Docker
- npm (Node Package Manager)

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/kvanme01/weaviate.git
```

### 2. Install Dependencies

```bash
pip install transformers  # Install if not already installed
pip install datasets  # Install if not already installed
```

### 3. Start Weaviate Server

```bash

cd weaviate/weaviate-project
docker-compose -f docker-compose.yml up -d

```

### 4. Run Configuration Script

```bash
python configure.py
```

### 5. Import Data

```bash
jupyter notebook import.ipynb
```

Either run each cell in the notebook to import the dataset into Weaviate, or run the above command in terminal and open another window in terminal to execute the frontend. For the later, navigate back to the same directory, weaviate-prokject. 

### 6. Start the Frontend

```bash
cd weaviate-frontend
npm run dev  # Start the development server
```

Visit `http://localhost:3000` in your browser to access the front end.

## Usage

1. Access the front end in your browser.
2. Enter a search term in the input box and click "Search".
3. View the search results displayed below.

<img width="1469" alt="Screenshot 2024-06-09 at 11 54 33 PM" src="https://github.com/kvanme01/weaviate/assets/112578194/9af62b2f-e345-47b0-bdf3-405cd53e55fc">
<img width="1486" alt="Screenshot 2024-06-09 at 11 57 27 PM" src="https://github.com/kvanme01/weaviate/assets/112578194/f5e2689b-7b04-45da-8979-cda97a7d8ae6">


## Project Structure

- **configure.py**: Python script to configure Weaviate and create the schema.
- **import.ipynb**: Jupyter notebook for importing data into Weaviate and testing back-end. 
- **docker-compose.yaml**: Docker Compose file to start Weaviate and required services.
- **app/page.js**: Frontend page component for the quotes search.
- **components/Results.js**: React component to display search results.
- **components/SearchForm.js**: React component for the search form.
- **api/search.js**: API endpoint to handle search requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
