import { useState } from 'react';
import './BookInterview.css';


import * as modalPlugin from '../../../utils/modalPlugin/modalPlugin'
import * as notificationPlugin from '../../../utils/notificationPlugin/notificationPlugin'


const BookInterview = ({
    candidateId,
    jobId,
    slotsContext
}) => {
    const [slot,setSlot] = useState(null);

    const onSlotSelectHandler = (e) => {
        e.preventDefault();
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

        <section className="book-interview fcol a-cen j-around">


            <section className="slots-select col j-around a-cen">
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

                <section className="book-section frow a-cen j-cen mt-50">
                    <button className="btn-round-shadow-l" onClick={onBookInterviewClickHandler}>Book Interview</button>
                </section>
            </section>

        </section>
    )




}

export default BookInterview;