import './InterviewSlotItem.css';


import * as notificationPlugin from '../../../utils/notificationPlugin/notificationPlugin';
import useFetch from '../../../hooks/useFetch';

const InterviewSlotItem = ({
    id,
    candidateId,
    jobId,
    slot
}) => {

    const getCandidateUrl = 'http://localhost:5000/candidates';
    const getJobUrl = 'http://localhost:5000/jobs';

    const candidateRes = useFetch(`${getCandidateUrl}/${candidateId}`,{});
    const candidate = candidateRes.response;

    const jobRes = useFetch(`${getJobUrl}/${jobId}`,{});
    const job = jobRes.response;


    return (
        <article id={id} className="slot-container fcol a-cen j-start w-270 h-120 border mt-20 ml-20">
            <section className="slot-title  mb-5">
                <p className="rem-14">{`Slot ${slot}`}</p>
            </section>
            <section className="interview-slot-section fcol a-start j-start mb-10">
                {job
                    ?
                    <p className="mb-5 rem-11" id="job-title">{`${job.title}`}</p>
                    :
                    <p className="slot-item-empty-row"></p>
                }
                {candidate
                    ?
                    <p id="candidate-name">{`${candidate.firstName} ${candidate.lastName}`}</p>
                    :
                    notificationPlugin.renderLoadingBoxLocalSmall()
                }
            </section>
            <section className="interview-slot-details">
                <button className="btn-round-shadow-sm">INTERVIEW</button>
            </section>
        </article>

    )
}


export default InterviewSlotItem;
