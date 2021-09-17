
import './InterviewsAll.css';

import * as notificationPlugin from '../../../utils/notificationPlugin/notificationPlugin';
import useFetch from '../../../hooks/useFetch';

const getAllInterviewsUrl = 'http://localhost:5000/interviews';



const InterviewsAll = () => {

    const res = useFetch(getAllInterviewsUrl,{});
    const interviews = res.response;
    console.log(interviews);

    return (

        <h1>TODO: All Interviews List...</h1>

    )


}

export default InterviewsAll;