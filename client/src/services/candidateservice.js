const getAllCandidates = 'http://localhost:5000/candidates'


export async function findAll() {

    return fetch(getAllCandidates)
        .then(response => response.json())
        .catch(err => console.error(err));

}
