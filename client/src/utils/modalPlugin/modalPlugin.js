import ReactDom from 'react-dom';


import ModalGlobalStateHoc from './ModalGlobal/ModalGlobalStateHoc/ModalGlobalStateHoc'

export function renderGlobalModal(Component) {

    if(!Component) {
        console.error('Please, add component to renderGlobalModal( -> Component)');
        return null;
    }

    ReactDom.render(
        <ModalGlobalStateHoc>
            <Component />
        </ModalGlobalStateHoc>
        ,document.getElementById('modal-portal')
    )
}