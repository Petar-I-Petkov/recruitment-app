import './InterviewSlotItem';

import * as notificationPlugin from '../../../utils/notificationPlugin/notificationPlugin';
import useFetch from '../../../hooks/useFetch';

const getCandidateUrl = 'http://localhost:5000/candidates';
const getJobUrl = 'http://localhost:5000/jobs';



const InterviewSlotItem = ({
    candidateId,
    jobId
}) => {

    const candidateRes = useFetch(`${getCandidateUrl}/${candidateId}`,{});
    const candidate = candidateRes.response;

    return (
        <article className="interview-slot-article w-250 h-100 border mt-20 ml-20">
            {candidate
                ?
                <h2>{candidate.firstName}</h2>
                :
                notificationPlugin.renderLoadingBoxLocal()
            }
        </article>
    )
}


export default InterviewSlotItem;