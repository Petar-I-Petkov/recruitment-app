import { useState } from 'react';

import './Home.css'

import TestModal from '../Modals/TestModal/TestModal'


const Home = () => {

    const [isOpen,setIsOpen] = useState(false);

    return (
        <section className="frow center a-cen j-cen mt-50">
            <button className="btn-round-shadow-l" onClick={() => setIsOpen(true)}>Open Modal</button>
            <TestModal open={isOpen} onCloseHandler={() => setIsOpen(false)} />
        </section>
    );


}


export default Home;