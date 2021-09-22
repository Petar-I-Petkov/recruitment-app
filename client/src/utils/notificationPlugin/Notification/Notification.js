import ReactDom from 'react-dom';
import './Notification.css'

const Notification = ({
    messagesObj,
    boxType,
    onBtnCloseClickHandler
}) => {

    if(!messagesObj) {
        return null;
    }

    return (
        <>
            <div
                id="notification-box"
                className={`notification ${boxType}`}
            >
                <span className="notification-text-container">{Object.keys(messagesObj).map(key => <p key={key}>{messagesObj[key]}</p>)}</span>
                <p className="btn-close" onClick={onBtnCloseClickHandler}>X</p>
            </div>
        </>
    )
}

export default Notification;


