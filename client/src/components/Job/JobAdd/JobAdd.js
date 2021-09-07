
import { useHistory } from 'react-router-dom';

import JobsMenu from '../JobsMenu/JobsMenu';

import * as jobservice from '../../services/jobservice';
import * as notificationPlugin from '../../utils/notificationPlugin/notificationPlugin'




const JobAdd = () => {

    const history = useHistory();


    const onJobSubmitClickHandler = (e) => {
        e.preventDefault();

        jobservice.addJob({
            title: e.target.title.value,
            description: e.target.description.value,

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

            <section className="form-container-global">
                <form className="form-global" onSubmit={onJobSubmitClickHandler}>
                    <h1>Add Job</h1>
                    <div className="flex-column">
                        <label htmlFor="title">Job Title:</label>
                        <input type="text" name="title" placeholder="Job title" />
                    </div>
                    <div className="flex-column">
                        <label htmlFor="description">Job Description:</label>
                        <textarea name="description" placeholder="Description" ></textarea>
                    </div>

                    <button className="button-round-shadow-no" type="submit">Submit</button>
                </form>
            </section>

        </main>)
}

export default JobAdd;