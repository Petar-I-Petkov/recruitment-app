import './JobCandidatesSection.css';
import { useState,useEffect } from 'react';

import JobCandidateListItem from '../JobCandidateListItem/JobCandidateListItem';
import SlotsContext from '../../../contexts/SlotsContext';


import * as interviewservice from '../../../services/interviewservice'
import * as notificationPlugin from '../../../utils/notificationPlugin/notificationPlugin';

const JobCandidatesSection = ({
    jobId,
    jobTitle,
}) => {
    const [availableCandidates,setAvailableCandidates] = useState([]);
    const [addedCandidates,setAddedCandidates] = useState([]);
    const [toAdd,setToAdd] = useState(null);
    const [removedFromJob,setRemovedFromJob] = useState(null);
    const [availableSlots,setAvailableSlots] = useState([]); //also feeds the state


    const fetchAddedCandidates = () => {
        return fetch(`http://localhost:5000/jobs/${jobId}/candidates`,{})
            .then(res => res.json());
    }

    const fetchAllCandidates = () => {
        return fetch(`http://localhost:5000/candidates`,{})
            .then(res => res.json());

    }

    useEffect(() => {
        Promise.all([fetchAddedCandidates(),fetchAllCandidates()])
            .then(([currentlyAdded,availableCandidates]) => {
                setAddedCandidates(currentlyAdded);

                let filteredCandidates = availableCandidates.filter(candidate => {
                    return currentlyAdded.every((f) => {
                        return f._id !== candidate._id;
                    })
                });
                setAvailableCandidates(filteredCandidates);

            },(error) => console.log(error))
    },[toAdd,removedFromJob])

    const updateAvailableSlots = () =>
        interviewservice.getAvailableSlots()
            .then(availableSlots => availableSlots ? setAvailableSlots(availableSlots) : null,
                err => console.log(err));

    useEffect(() => {
        updateAvailableSlots();
    },[])

    const onAddCandidatesSelectChangeHandler = (e) => {
        e.preventDefault();
        const dropdown = e.target;
        let candidateId = dropdown[dropdown.selectedIndex].id;
        setToAdd(candidateId);
    }

    const onCandidateAddClickHandler = (e) => {
        e.preventDefault();
        let postObj = { candidateId: toAdd.toString() };

        fetch(`http://localhost:5000/jobs/${jobId}/candidates`,{
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postObj)
        })
            .then(res => res.json())
            .then(response => {
                setToAdd(null)
            },(error) => console.log(error))
    }

    const onJobCandidateDeleteHandler = (e) => {
        e.preventDefault();
        const candidateId = e.target.parentElement.parentElement.id;

        fetch(`http://localhost:5000/jobs/${jobId}/candidates/${candidateId}`,{
            method: 'DELETE',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => setRemovedFromJob(candidateId))
    }

    return (
        <SlotsContext.Provider value={{ availableSlots,updateAvailableSlots,slotsAreAvailable: availableSlots.length > 0 }}>
            <section className="job-details-candidates frow a-start j-between">
                <section className="candidates-current pl-20">
                    <h2 className="mt-10 mb-20">
                        Candidates: {addedCandidates.length} | Slots: {availableSlots.length}
                    </h2>
                    <ul className="added-candidates-list mb-20">
                        {addedCandidates
                            ?
                            addedCandidates.length > 0
                                ? addedCandidates.map(candidate =>
                                    <JobCandidateListItem
                                        key={candidate._id}
                                        candidateId={candidate._id}
                                        firstName={candidate.firstName}
                                        lastName={candidate.lastName}
                                        onJobCandidateDeleteHandler={onJobCandidateDeleteHandler}
                                        jobTitle={jobTitle}
                                    />)
                                : <div>No candidates yet.</div>
                            : notificationPlugin.renderLoadingBoxLocal()}
                    </ul>
                </section>

                <section className="candidates-pending mt-10 fcol a-start j-start pl-20 pr-20">
                    <label className="mb-10" htmlFor="candidates-available">Available Candidates:</label>
                    <select className="w-200 mb-10 p-5" onChange={onAddCandidatesSelectChangeHandler}>
                        {availableCandidates
                            ?
                            <>
                                <option value="">Select...</option>
                                {availableCandidates.map(candidate =>
                                    <option
                                        key={candidate._id}
                                        id={candidate._id}
                                    >
                                        {`${candidate.firstName} ${candidate.lastName}`}
                                    </option>)}
                            </>
                            : notificationPlugin.renderLoadingBoxLocal()
                        }
                    </select>
                    <button className="btn-round-shadow-l" onClick={onCandidateAddClickHandler} disabled={!toAdd}>
                        Add
                    </button>
                </section>
            </section>
        </SlotsContext.Provider>
    )
}

export default JobCandidatesSection;

// 05.09.2021 removed this


    // //candidates added
    // useEffect(() => {
    //     fetch(`http://localhost:5000/jobs/${jobId}/candidates`,{})
    //         .then(res => res.json())
    //         .then(added => setAddedCandidates(added),(error) => console.log(error))
    // },[toAdd,removedFromJob])

    // // fill available candidates dropdown
    // useEffect(() => {
    //     fetch(`http://localhost:5000/candidates`,{})
    //         .then(res => res.json())
    //         .then(candidates => setAvailableCandidates(candidates),(error) => console.log(error));
    // },[toAdd])




    // function fetchCandidatesData() {
    //     return Promise.all([
    //         fetchAddedCandidates(),
    //         fetchAllCandidates()
    //     ]).then(([currentCandidates,allCandidates]) => {
    //         return { currentCandidates,allCandidates };
    //     },(error) => console.log(error))
    // }