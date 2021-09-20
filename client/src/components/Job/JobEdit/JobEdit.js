import { useState,useEffect } from 'react';
import { Link,useHistory } from 'react-router-dom';

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
        <article className="job-edit-container fcol center mt-20 border a-cen j-between">
            <section className="job-edit-top frow a-cen j-cen">
                <p>Edit Job: </p>
                <p>{job.title}</p>
            </section>
            <section className="job-edit-middle-container fcol a-start j-cen">
                <section className="job-edit-title-container fcol a-start j-start">
                    <section className="job-edit-title mb-20">
                        <p className="mb-10 job-edit-title-label">Title:</p>
                        <input className="job-edit-title-input" value={job.title || 'N/A'}>
                        </input>
                    </section>
                </section>
                <section className="job-edit-description-container fcol a-start j-start">
                    <section className="job-edit-description">
                        <p className="mb-10 job-edit-description-label">Description:</p>
                        <textarea className="job-edit-description-input mb-20" value={job.description || 'N/A'}>
                        </textarea>
                    </section>
                </section>
            </section>
            <section className="job-edit-buttons-container mb-20">
                <button className="btn-round-shadow-l">Save</button>
                <button className="btn-round-shadow-l ml-20">Cancel</button>

            </section>
        </article>
    )

}

export default JobEdit;