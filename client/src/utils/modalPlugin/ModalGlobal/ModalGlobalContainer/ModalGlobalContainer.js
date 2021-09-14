import ReactDOM from 'react-dom';

import './ModalGlobalContainer.css'

const ModalGlobalContainer = ({
    onDialogCloseHandler,
    children,
}) => {
    return ReactDOM.createPortal(
        <>
            <div className="global-modal-gray-overlay"></div>
            <div className="global-modal fcol j-between a-cen">
                {children}
                <button className="btn-round-shadow-l" onClick={onDialogCloseHandler}>Close</button>
            </div>
        </>
        ,document.getElementById('modal-portal')
    )
}
export default ModalGlobalContainer;