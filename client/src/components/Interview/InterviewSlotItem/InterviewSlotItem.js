import './InterviewSlotItem.css';


import * as notificationPlugin from '../../../utils/notificationPlugin/notificationPlugin';
import useFetch from '../../../hooks/useFetch';

const InterviewSlotItem = ({
    candidateId,
    jobId
}) => {

    const getCandidateUrl = 'http://localhost:5000/candidates';
    const getJobUrl = 'http://localhost:5000/jobs';

    const candidateRes = useFetch(`${getCandidateUrl}/${candidateId}`,{});
    const candidate = candidateRes.response;

    const jobRes = useFetch(`${getJobUrl}/${jobId}`,{});
    const job = jobRes.response;

    return (
        <article className="interview-slot-article fcol a-start j-start w-250 h-100 border mt-20 ml-20">
            {job
                ?
                <p>{`${job.title}`}</p>
                :
                notificationPlugin.renderLoadingBoxLocal()
            }
            {candidate
                ?
                <p>{`${candidate.firstName} ${candidate.lastName}`}</p>
                :
                notificationPlugin.renderLoadingBoxLocal()
            }
        </article>
    )
}


export default InterviewSlotItem;
