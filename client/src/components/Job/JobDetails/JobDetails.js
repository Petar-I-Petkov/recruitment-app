import { Link } from 'react-router-dom';
import './JobDetails.css';

import JobsMenu from '../JobsMenu/JobsMenu';
import JobCandidatesSection from '../../Candidate/JobCandidatesSection/JobCandidatesSection';

import useFetch from '../../../hooks/useFetch';
import * as notificationPlugin from '../../../utils/notificationPlugin/notificationPlugin';

const getAllJobsUrl = 'http://localhost:5000/jobs';


const JobDetails = ({
    match
}) => {
    const res = useFetch(`${getAllJobsUrl}/${match.params.jobId}`,{});
    const job = res.response;

    return (
        <main>
            <JobsMenu />
            <article className="job-details fcol w-600 center mt-20 border a-cen j-between" >
                {job
                    ?
                    <>
                        <section className="job-details-top frow a-cen j-cen">
                            <h2>{job.title}</h2>
                        </section>
                        <section className="job-details-middle-container fcol">
                            <section className="job-details-description-container fcol a-start j-start">
                                <section className="job-details-description">
                                    <p className="">Description:</p>
                                    <p className="job-details-description-text">
                                        {job.description}
                                    </p>
                                </section>
                            </section>
                            <JobCandidatesSection jobId={match.params.jobId} jobTitle={job.title} />
                        </section>

                        <section className="bottom frow w-400 j-around a-cen mb-20 ">
                            <button className="btn-round-shadow-l"><Link to={`/jobs/edit/${match.params.jobId}`}>Edit Job</Link></button>
                            <button className="btn-round-shadow-l"><Link to={`/jobs/delete/${match.params.jobId}`}>Delete Job</Link></button>
                        </section>

                    </>
                    : notificationPlugin.renderLoadingBoxLocal()
                }

            </article>

        </main>
    )

}

export default JobDetails;