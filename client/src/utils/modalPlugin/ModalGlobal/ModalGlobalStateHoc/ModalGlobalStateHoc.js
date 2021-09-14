import ReactDom from 'react-dom';

import './ModalGlobalStateHoc.css'
import ModalGlobalContainer from '../ModalGlobalContainer/ModalGlobalContainer'


const ModalGlobalStateHoc = ({ children,closeGlobalModal }) => {
    // cannot use state ,  or I can, but has to be new component every time with unique 
    // key and init state isOpen=true

    return (
        <ModalGlobalContainer onDialogCloseHandler={() => closeGlobalModal()}>
            {children}
        </ModalGlobalContainer>
    );

}

export default ModalGlobalStateHoc;