import { useState } from 'react';
import './BookInterview.css';

import useFetch from '../../../hooks/useFetch';
import * as modalPlugin from '../../../utils/modalPlugin/modalPlugin'
import * as notificationPlugin from '../../../utils/notificationPlugin/notificationPlugin'


const BookInterview = ({
    candidateId,
    firstName,
    lastName,
    jobId,
    jobTitle,
    slotsContext
}) => {

    const [slot,setSlot] = useState(null);

    const onSlotSelectHandler = (e) => {
        e.preventDefault();
        e.target.classList.add('slot-selected');
        setSlot(Number(e.target.id));
    }

    const onBookInterviewClickHandler = (e) => {
        e.preventDefault();

        const body = JSON.stringify({
            jobId,
            candidateId,
            slot,
        })

        fetch('http://localhost:5000/interviews',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body,

        }).then(response => {
            setSlot(null);
            notificationPlugin.renderInfo({ message: "Interview Added!" })
            slotsContext.updateAvailableSlots();
            modalPlugin.closeGlobalModal();
        },(error) => console.log(error));

    }

    return (

        <section className="book-interview-container fcol a-cen j-cen">
            <p className="mb-10 rem-12">Interview Booking</p>
            <section className="book-interview-top frow a-start j-cen border mb-20">
                <section className="book-interview-job-details fcol a-cen ">
                    <p className="mr-10 mb-5">Job:</p>
                    <h2>{jobTitle}</h2>
                </section>
                <section className="book-interview-candidate-details fcol a-cen">
                    <p className="mr-10 mb-5">Candidate:</p>
                    <p className="rem-11 mr-10">{`${firstName} ${lastName}`}</p>

                </section>

            </section>
            <section className="slots-select-container fcol a-start j-cen border">
                <p className="mb-10">Slots Available:</p>
                <section className="slots-select fcol j-around a-cen">
                    <section className="available-slots-buttons">
                        {slotsContext.availableSlots
                            ?
                            slotsContext.availableSlots.map(slot =>
                                <button
                                    key={slot}
                                    className="slot-select btn-round-sm ml-15 mr-15"
                                    id={slot}
                                    onClick={onSlotSelectHandler}
                                >
                                    SLOT {slot}
                                </button>)
                            : <div>No slots available...</div>
                        }
                    </section>
                </section>

            </section>

            <section className="book-section frow a-cen j-cen mt-30">
                <button className="btn-round-shadow-l" disabled={!slot} onClick={onBookInterviewClickHandler}>Book Interview</button>
            </section>

        </section>
    )
}

export default BookInterview;