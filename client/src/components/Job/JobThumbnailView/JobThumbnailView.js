import { Link } from 'react-router-dom';
// import { useState,useEffect } from 'react';

import './JobThumbnailView.css'


const JobThumbnailView = ({
    _id,
    title,
    description,
}) => {

    return (
        <article className="job-thumbnail frow a-cen j-between h-70 mb-5 ">
            <section className="left ">
                <p className="job-title">
                    {title}
                </p>
                <p className="job-description">
                    {description}
                </p>
            </section>
            <section className="right">
                <button className="btn-round-shadow-l"><Link to={`/jobs/details/${_id}`}>View</Link></button>
            </section>
        </article>
    )


}


export default JobThumbnailView;