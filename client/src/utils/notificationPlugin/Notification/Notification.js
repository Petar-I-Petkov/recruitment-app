import ReactDom from 'react-dom';
import './Notification.css'

const Notification = ({
    messagesObj,
    boxType
}) => {

    if(!messagesObj) {
        return null;
    }

    const onNotificationCloseBtnClickHandler = (e) => {
        e.preventDefault();
        ReactDom.unmountComponentAtNode(document.getElementById('notification-portal'));
    }

    return (
        <>
            <div
                id="notification-box"
                className={`notification ${boxType}`}
            >
                <span className="notification-text-container">{Object.keys(messagesObj).map(key => <p key={key}>{messagesObj[key]}</p>)}</span>
                <p className="btn-close" onClick={onNotificationCloseBtnClickHandler}>X</p>
            </div>
        </>
    )
}

export default Notification;


