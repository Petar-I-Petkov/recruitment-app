import ReactDom from 'react-dom';

import Notification from './Notification/Notification';
import LoadingBoxGlobal from './LoadingBoxGlobal/LoadingBoxGlobal';
import LoadingBoxLocal from './LoadingBoxLocal/LoadingBoxLocal';
import LoadingBoxLocalSmall from './LoadingBoxLocalSmall/LoadingBoxLocalSmall';

const renderInNotificationPortal = (messagesObj,boxType) => {
    document.getElementById('notification-portal')
        ?
        ReactDom.render(
            <Notification
                messagesObj={messagesObj}
                boxType={boxType}
            />
            ,document.getElementById('notification-portal')
        )
        : console.error({ error: `[notificationPlugin.js] container with id 'notification-portal' not found!`,message: messagesObj })
}

export function renderErrors(errorMessagesObj) {
    renderInNotificationPortal(errorMessagesObj,'errorBox')
}

export function renderInfo(infoMessagesObj) {
    renderInNotificationPortal(infoMessagesObj,'infoBox')
}

export function renderLoadingBoxGlobal() {
    document.getElementById('notification-portal')
        ?
        ReactDom.render(
            <LoadingBoxGlobal />
            ,document.getElementById('notification-portal')
        )
        : console.error({ error: `[notificationPlugin.js] container with id 'notification-portal' not found!` })
}

export function renderLoadingBoxLocal() {
    return <LoadingBoxLocal />
}

export function renderLoadingBoxLocalSmall() {
    return <LoadingBoxLocalSmall />
}

export function clearNotificationPortal() {
    ReactDom.unmountComponentAtNode(document.getElementById('notification-portal'));
}

