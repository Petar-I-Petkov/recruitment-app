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

    console.log(job);




    return (
        <h1>Job Edit Component</h1>
    )

}

export default JobEdit;