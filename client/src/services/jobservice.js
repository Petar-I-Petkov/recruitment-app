//todo - export in config files
const addJobUrl = 'http://localhost:5000/jobs'
const getAllJobsUrl = 'http://localhost:5000/jobs'
const deleteJobUrl = 'http://localhost:5000/jobs'
const getOneJobUrl = 'http://localhost:5000/jobs'
const updateJobUrl = 'http://localhost:5000/jobs'


export async function addJob(jobData) {

    let { title,description,} = jobData;

    let registerValidate = { errors: {} };

    if(title.length < 3) {
        registerValidate.errors.title = 'Title must be at least 3 characters long!';
    }

    if(description.length < 3) {
        registerValidate.errors.description = 'Description must be at least 3 characters long!';
    }



    //exit end return object, describing the errors
    if(Object.keys(registerValidate.errors).length > 0) {
        return registerValidate;
    }

    //all ok, continue with the request to server
    const body = JSON.stringify({
        title,
        description,
    })

    const addResponse = (await fetch(addJobUrl,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
    })).json();

    return addResponse;
}



//resolve here , because i don't control the error and messaging at app level (yet!) 
export function getOne(jobId) {

    return fetch(`${getOneJobUrl}/${jobId}`)
        .then(response => response.json())
        .catch(err => console.error(err));
};

export function deleteById(jobId) {

    return fetch(`${deleteJobUrl}/${jobId}`,{
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => response.json())
        .catch(err => console.error(err));
}

export function update(jobData) {
    //TODO: validate client side and return error
    let { title,description } = jobData;

    return fetch(`${updateJobUrl}/${jobData._id}`,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title,description })
    })
        .then(response => response.json())
        .catch(err => console.error(err));
}

