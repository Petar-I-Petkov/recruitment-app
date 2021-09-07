import { ReactDOM } from 'react';

import './AssignInterviewModal.css'

const AssignInterviewModal = ({
    firstName,
    lastName,
    onDialogCancelClickHandler,
}) => {

    return (
        <div>
            <section className="dialog-filler"></section>
            <section className="assign-interview-dialog fcol a-cen j-between w-300 h-150 ">

                <section className=" fcol a-cen j-cen mt-10">
                    <p>Assign Interview Slot:</p>
                    <p className="dialog-title">{`${firstName} ${lastName}`}</p>
                </section>
                <button className="btn-round-sm" onClick={onDialogCancelClickHandler}>Cancel</button>
            </section>
        </div>
    )

}


export default AssignInterviewModal;