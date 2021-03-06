
import './InterviewsAll.css';

import InterviewSlotItem from '../InterviewSlotItem/InterviewSlotItem';

import * as notificationPlugin from '../../../utils/notificationPlugin/notificationPlugin';
import useFetch from '../../../hooks/useFetch';

const getAllInterviewsUrl = 'http://localhost:5000/interviews';



const InterviewsAll = () => {

    const res = useFetch(getAllInterviewsUrl,{});
    const interviews = res.response;

    return (

        <main>
            <section className="slots-container fcol a-cen j-start vw-80 h-600 border-s p-20 center  mt-50">

                <h1 className="mb-20">INTERVIEWS</h1>

                <section className="slots-wrapper frow j-around">
                    {interviews
                        ?
                        interviews.length > 0
                            ?
                            interviews
                                .sort((i1,i2) => Number(i1.slot) - Number(i2.slot))
                                .map(interview =>
                                    <InterviewSlotItem
                                        key={interview._id}
                                        id={`slot-${interview.slot}`}
                                        candidateId={interview.candidateId}
                                        jobId={interview.jobId}
                                        slot={interview.slot}
                                    />)
                            : <p>No Interviews found...</p>
                        : notificationPlugin.renderLoadingBoxLocal()
                    }
                </section>


            </section>
        </main>

    )


}

export default InterviewsAll;
