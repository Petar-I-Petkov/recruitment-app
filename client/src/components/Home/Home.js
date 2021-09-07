import { useEffect } from 'react';

import './Home.css';

import TestModal from '../Modals/TestModal/TestModal';
import * as modalPlugin from '../../utils/modalPlugin/modalPlugin'


const Home = () => {

    useEffect(() => {
        modalPlugin.renderGlobalModal(TestModal);
    },[])



    return (
        <section className="frow center a-cen j-cen mt-50">
            <button
                className="btn-round-shadow-l"
                onClick={() => modalPlugin.renderGlobalModal(TestModal)}
            >
                Open Modal
            </button>
        </section>
    );


}


export default Home;