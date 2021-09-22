import React from 'react';
import ReactDom from 'react-dom';


import DelayedDisplayHoc from './DelayedDisplayHoc/DelayedDisplayHoc';
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
                onBtnCloseClickHandler={emptyMainNotificationPortal}
            />
            ,document.getElementById('notification-portal')
        )
        : console.error({ error: `[notificationPlugin.js] container with id 'notification-portal' not found!`,message: messagesObj })
}

const emptyMainNotificationPortal = (e) => {
    e.preventDefault();
    ReactDom.unmountComponentAtNode(document.getElementById('notification-portal'));
}

const renderMultilineNotifications = (messagesObj,boxType) => {

    const notificationPortal = document.getElementById('notification-portal');

    if(!notificationPortal) {
        console.error({ error: `[notificationPlugin.js] container with id 'notification-portal' not found!`,message: messagesObj })
        return;
    }

    Object.keys(messagesObj).forEach((key,index) => {
        //create new notification container
        const notificationContainer = document.createElement('div');
        notificationContainer.setAttribute('id',`${key}-${index}`);

        //append it to notification-portal
        notificationPortal.appendChild(notificationContainer);

        const emptyCurrentPortal = () => {
            ReactDom.unmountComponentAtNode(document.getElementById(`${key}-${index}`));
            const toRemoveElement = document.getElementById(`${key}-${index}`);
            toRemoveElement.parentElement.removeChild(toRemoveElement);
        }

        //use React to mount element there
        ReactDom.render(
            <DelayedDisplayHoc key={key} delay={index * 700}>
                <Notification
                    messagesObj={{ key: messagesObj[key] }}
                    boxType={boxType}
                    onBtnCloseClickHandler={emptyCurrentPortal}
                />
            </DelayedDisplayHoc>

            ,notificationContainer);

    })
}

export function renderErrors(errorMessagesObj) {
    renderInNotificationPortal(errorMessagesObj,'errorBox')
}

export function renderMultilineErrors(errorMessagesObj) {
    renderMultilineNotifications(errorMessagesObj,'errorBox');
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

