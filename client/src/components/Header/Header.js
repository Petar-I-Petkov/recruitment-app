import { Component } from "react";
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import './Header.css';

import TestModal from '../Modals/TestModal/TestModal'

// import * as userService from '../../services/userService'
// import AuthContext from '../../contexts/AuthContext'
// import { renderInfo } from '../../utils/notificationPlugin/notificationPlugin'




class Header extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    setIsOpen(isOpen) {
        this.setState(() => ({ isOpen,}))
    }


    render() {

        return (
            <>
                <header className="frow a-cen j-between vw-90 center border-s p-20">
                    <section className="frow a-cen j-around w-300">
                        <section className="logo-container">
                            <img src="" alt="logo" />
                        </section>
                        <section className="header-greeting">
                            Welcome, GUEST
                        </section>
                    </section>
                    <nav className="frow">
                        <ul className="frow">
                            <li className="header-nav-li-item"><Link to="/home">Home</Link></li>
                            <li className="header-nav-li-item"><Link to="/interviews/all">Interviews</Link></li>
                            <li className="header-nav-li-item"><Link to="/jobs/all">Jobs</Link></li>
                            <li className="header-nav-li-item"><Link to="/candidates/all">Candidates</Link></li>
                        </ul>
                        <div className="blue-circle-container ml-10" >
                            <p className="blue-circle">HR</p>
                        </div>
                    </nav>
                </header>

                <section className="frow center a-cen j-cen mt-50">
                    <button className="btn-round-shadow-l" onClick={() => this.setIsOpen(true)}>Open Modal</button>
                    <TestModal open={this.state.isOpen} onCloseHandler={() => this.setIsOpen(false)} />
                </section>

            </>

        )
    }
}

export default withRouter(Header);