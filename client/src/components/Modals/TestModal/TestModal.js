import ReactDOM from 'react-dom';


import './TestModal.css'

const TestModal = ({
    open,
    children,
    onCloseHandler
}) => {

    if(!open) {
        return null;
    }

    return ReactDOM.createPortal(
        <div>
            <div className="test-modal-gray-overlay"></div>
            <div className="test-modal">
                <button className="btn-round-shadow-l" onClick={onCloseHandler}>Close Modal</button>
            </div>
            {children}
        </div>
        ,document.getElementById('modal-portal')

    )


}
export default TestModal;