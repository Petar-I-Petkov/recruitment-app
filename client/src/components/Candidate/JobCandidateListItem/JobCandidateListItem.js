import { useContext } from 'react';
import './JobCandidateListItem.css';

import BookInterview from '../../Interview/BookInterview/BookInterview'
import SlotsContext from '../../../contexts/SlotsContext'


import * as modalPlugin from '../../../utils/modalPlugin/modalPlugin'


const JobCandidateListItem = ({
    candidateId,
    jobId,
    firstName,
    lastName,
    onJobCandidateDeleteHandler,
}) => {

    const slotsContext = useContext(SlotsContext);

    const onAddInterviewClickHandler = (e) => {
        e.preventDefault();
        modalPlugin.renderGlobalModal(BookInterview,{ candidateId,jobId,slotsContext });
    }


    return (
        <section className="job-candidate-liItem frow a-cen j-between p-10 border mt-5" id={candidateId}>
            <li key={candidateId} >{`${firstName} ${lastName}`}</li>
            <section className="job-candidate-liItem-right">
                <button
                    className="ml-20 btn-round-shadow-sm rem-07"
                    onClick={onAddInterviewClickHandler}
                    disabled={!slotsContext.slotsAreAvailable}
                >
                    Interview
                </button>
                <button className="ml-10 btn-round-shadow-sm rem-07 mr-10" onClick={onJobCandidateDeleteHandler}>X</button>
            </section>
        </section>
    )
}


export default JobCandidateListItem;