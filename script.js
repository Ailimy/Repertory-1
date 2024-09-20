import { algoliasearch } from 'algoliasearch/lite';

const client = algoliasearch('LW91O8IAKB', 'a12a993fdf2b30cba2b22f1aaab1653d');
const index = client.initIndex('movies_index');

// Fonction pour indexer les objets (ajoute à l'index)
const processRecords = async () => {
    const datasetRequest = await fetch('https://dashboard.algolia.com/sample_datasets/movie.json');
    const objects = await datasetRequest.json();
    const recordsWithIDs = objects.map(object => ({
        ...object,
        objectID: object.id, 
    }));
    return index.saveObjects(recordsWithIDs);
};

processRecords()
    .then(() => console.log('Successfully indexed objects!'))
    .catch((err) => console.error(err));

// Code de recherche
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');

searchInput.addEventListener('input', async function() {
    const query = searchInput.value;
    if (query) {
        const { hits } = await index.search(query);
        displayResults(hits);
    } else {
        resultsContainer.innerHTML = '';
    }
});

function displayResults(hits) {
    resultsContainer.innerHTML = hits.map(hit => `
        <div>
            <h3>${hit.title}</h3>
            <p>${hit.description}</p>
        </div>
    `).join('');
}
