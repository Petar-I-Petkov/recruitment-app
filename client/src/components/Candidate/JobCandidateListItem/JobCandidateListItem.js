import ReactDom from 'react-dom';

import AssignInterviewModal from '../../Modals/AssignInterviewModal/AssignInterviewModal'

import './JobCandidateListItem.css';


const JobCandidateListItem = ({
    _id,
    firstName,
    lastName,
    onJobCandidateDeleteHandler,
}) => {

    const onDialogCancelClickHandler = (e) => {
        e.preventDefault();
        ReactDom.unmountComponentAtNode(document.getElementById('modal-portal'));
    }

    const onAddInterviewClickHandler = (e) => {
        e.preventDefault();
        ReactDom.render(
            <AssignInterviewModal firstName={firstName} lastName={lastName} onDialogCancelClickHandler={onDialogCancelClickHandler} />,
            document.getElementById('modal-portal')
        )
    }



    return (
        <section className="job-candidate-liItem frow a-cen j-between p-10 border mt-5" id={_id}>
            <li key={_id} >{`${firstName} ${lastName}`}</li>
            <section className="job-candidate-liItem-right">
                <button className="ml-20 btn-round-shadow-sm rem-07" onClick={onAddInterviewClickHandler}>Interview</button>
                <button className="ml-10 btn-round-shadow-sm rem-07 mr-10" onClick={onJobCandidateDeleteHandler}>X</button>
            </section>
        </section>
    )
}


export default JobCandidateListItem;