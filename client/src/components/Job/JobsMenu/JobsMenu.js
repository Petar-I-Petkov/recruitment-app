import { Link } from 'react-router-dom'



const JobAdd = () => {


    return (
        <section className="frow j-cen vw-90 center mt-10 mb-10 border p-20">
            <nav className="horizontal-nav-list">
                <button className="btn-round-shadow-l mr-20" ><Link to="/jobs/add">Add new Job</Link></button>
                <button className="btn-round-shadow-l" ><Link to="/jobs/all">View All</Link></button>
            </nav>
        </section>
    )
}

export default JobAdd;