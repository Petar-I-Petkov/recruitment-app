
import { useHistory } from 'react-router-dom';

import JobsMenu from '../JobsMenu/JobsMenu';

import * as jobservice from '../../../services/jobservice';
import * as notificationPlugin from '../../../utils/notificationPlugin/notificationPlugin'


const JobAdd = () => {

    const history = useHistory();

    const onJobSubmitClickHandler = (e) => {
        e.preventDefault();

        jobservice.addJob({
            title: e.target.title.value,
            description: document.querySelector("textarea[name='description']").value,

        }).then(response => {

            if(response._id) {
                history.push('/jobs/all');
                notificationPlugin.renderInfo({ message: `Resource created successfully!` })
            } else {
                notificationPlugin.renderErrors(response.errors);
            }
        })
    }


    return (
        <main>
            <JobsMenu />

            <section className="jobs-add-container fcol a-cen j-start vw-60 h-300 border-s p-20 center mt-20">
                <form id="form" onSubmit={onJobSubmitClickHandler}>
                    <div className="fcol a-cen j-cen mb-20">
                        <h1 className="rem-14">Add New Job</h1>
                    </div>
                    <div className="fcol mb-20">
                        <label className="mb-10 rem-11" htmlFor="title">Job Title:</label>
                        <input className="p-5" type="text" name="title" placeholder="Job title" />
                    </div>
                    <div className="fcol mb-20">
                        <label className="mb-10 rem-11" htmlFor="description">Job Description:</label>
                        <textarea className="p-5" name="description" placeholder="Description" ></textarea>
                    </div>
                    <div className="fcol a-cen j-cen mb-20">
                        <button className="btn-round-shadow-l" type="submit">Submit</button>
                    </div>

                </form>
            </section>

        </main >)
}

export default JobAdd;