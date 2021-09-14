import ReactDom from 'react-dom';


import ModalGlobalStateHoc from './ModalGlobal/ModalGlobalStateHoc/ModalGlobalStateHoc'

export function renderGlobalModal(Component,props) {

    if(!Component) {
        console.error('Please, add component to renderGlobalModal( -> Component)');
        return null;
    }
    ReactDom.render(
        <ModalGlobalStateHoc closeGlobalModal={closeGlobalModal}>
            <Component {...props} />
        </ModalGlobalStateHoc>
        ,document.getElementById('modal-portal')
    )
}

export function closeGlobalModal() {
    ReactDom.unmountComponentAtNode(document.getElementById('modal-portal'));
}