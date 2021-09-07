import ReactDom from 'react-dom';


import ModalGlobalStateHoc from './ModalGlobal/ModalGlobalStateHoc/ModalGlobalStateHoc'

export function renderGlobalModal(Component) {

    ReactDom.render(
        <ModalGlobalStateHoc>
            <Component />
        </ModalGlobalStateHoc>
        ,document.getElementById('modal-portal')
    )

}