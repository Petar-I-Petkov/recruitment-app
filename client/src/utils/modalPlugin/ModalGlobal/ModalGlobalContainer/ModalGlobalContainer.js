import ReactDOM from 'react-dom';

import './ModalGlobalContainer.css'

const ModalGlobalContainer = ({
    onDialogCloseHandler,
    children,
}) => {
    return ReactDOM.createPortal(
        <>
            <div className="test-modal-gray-overlay"></div>
            <div className="test-modal">
                {children}
                <button className="btn-round-shadow-l" onClick={onDialogCloseHandler}>Close Modal</button>
            </div>
        </>
        ,document.getElementById('modal-portal')
    )
}
export default ModalGlobalContainer;