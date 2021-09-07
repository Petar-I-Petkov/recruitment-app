
import './TestModal.css'

const TestModal = ({
    open,
    children,
    onCloseHandler
}) => {

    if(!open) {
        return null;
    }

    return (
        <div>
            <div className="test-modal-gray-overlay"></div>
            <div className="test-modal">
                <button className="btn-round-shadow-l" onClick={onCloseHandler}>Close Modal</button>
            </div>
            {children}
        </div>
    )


}
export default TestModal;