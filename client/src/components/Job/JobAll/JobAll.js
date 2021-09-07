
import JobsMenu from '../JobsMenu/JobsMenu';
import JobsThumbnailView from '../JobThumbnailView/JobThumbnailView';

import * as notificationPlugin from '../../../utils/notificationPlugin/notificationPlugin';
import useFetch from '../../../hooks/useFetch';

const getAllJobsUrl = 'http://localhost:5000/jobs';


const JobAdd = () => {

    const res = useFetch(getAllJobsUrl,{});
    const jobs = res.response;

    return (
        <main>
            <JobsMenu />
            <section className="jobs-container fcol a-cen j-start vw-80 h-600 border-s p-20 center scroll-y">
                <h1 className="mb-20">All Jobs List:</h1>
                {jobs
                    ?
                    jobs.map(job =>
                        <JobsThumbnailView
                            key={job._id}
                            _id={job._id}
                            title={job.title}
                            description={job.description}
                        />)
                    :
                    notificationPlugin.renderLoadingBoxLocal()
                }

            </section>
        </main>
    )








}

export default JobAdd;