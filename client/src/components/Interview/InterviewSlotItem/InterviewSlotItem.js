import './InterviewSlotItem.css';


import * as notificationPlugin from '../../../utils/notificationPlugin/notificationPlugin';
import useFetch from '../../../hooks/useFetch';

const InterviewSlotItem = ({
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
        <article className="slot-container fcol a-cen j-start w-250 h-100 border mt-20 ml-20">
            <section className="slot-title ">
                <p className="rem-15 mb-10">{`Slot ${slot}`}</p>
            </section>
            <section className="interview-slot-section fcol a-start j-start ">
                {job
                    ?
                    <p>{`${job.title}`}</p>
                    :
                    null
                }
                {candidate
                    ?
                    <p>{`${candidate.firstName} ${candidate.lastName}`}</p>
                    :
                    notificationPlugin.renderLoadingBoxLocal()
                }
            </section>
        </article>

    )
}


export default InterviewSlotItem;
