const slots = [1,2,3,4,5]

export async function getAllInterviews() {
    return await (await fetch('http://localhost:5000/interviews')).json();
}

export function getAvailableSlots() {

    return getAllInterviews()
        .then(response => {
            const takenSlots = response.map(interview => interview.slot);
            const availableSlots = slots.filter(slot => {
                return takenSlots.every(s => s !== slot)
            })

            return availableSlots;
        })
        .catch(err => console.error(err));
}