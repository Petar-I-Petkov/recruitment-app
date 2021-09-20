import { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './JobEdit.css';

import * as jobservice from '../../../services/jobservice';
import * as notificationPlugin from '../../../utils/notificationPlugin/notificationPlugin';

const getAllJobsUrl = 'http://localhost:5000/jobs';

const JobEdit = ({
    match
}) => {

    const [job,setJob] = useState({});

    useEffect(() => {
        //get from db and set in state. Form will access it from there
        jobservice.getOne(match.params.jobId)
            .then(res => {
                setJob(res)
            });
    },[]);

    return (
        <article className="job-edit-container fcol w-600 center mt-20 border a-cen j-between">
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
            </section>
        </article>
    )

}

export default JobEdit;