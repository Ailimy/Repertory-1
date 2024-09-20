import { algoliasearch } from 'algoliasearch/lite';

// Remplace ces valeurs par celles de ton compte Algolia
const client = algoliasearch('LW91O8IAKB', '42c3920b086391e13c3fbef3b7ba7852');
const index = client.initIndex('movies_index'); // Remplace par le nom de ton index

// Tes données à indexer
const stories = [
    { objectID: "1", title: "Le Voyage Mystérieux", description: "Une aventure dans un monde inconnu.", author: "Jean Dupont", genre: "Aventure" },
    { objectID: "2", title: "L'Énigme du Temps", description: "Un mystère qui traverse les âges.", author: "Marie Curie", genre: "Science Fiction" },
    // Ajoute d'autres histoires ici
];

// Indexation des objets
index.saveObjects(stories)
    .then(({ objectIDs }) => {
        console.log('Histoires indexées avec succès :', objectIDs);
    })
    .catch(err => {
        console.error('Erreur lors de l’indexation :', err);
    });
