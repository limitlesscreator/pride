import React, {useEffect} from 'react';
import s from './CustomModal.module.sass'
import Modal from 'react-modal'
import logo from '../../img/logo.svg'
import closeIcon from '../../img/close-svgrepo-com.svg'
export const CustomModal = ({isOpen, onClose, children}) => {

    if (isOpen){
        document.querySelector('body').style.overflow = 'hidden'
    } else {
        document.querySelector('body').style.overflow = 'auto'
    }
    return (
        <>
            <Modal isOpen={isOpen} overlayClassName={s.modalOverlay} className={s.modalContent}>
                <img className={s.closeBtn} onClick={() => onClose()} src={closeIcon} alt="close"/>
                <img className={s.logo} src={logo} alt="logo"/>
                <input type="text" placeholder={'Имя'}/>
                <input type="text" placeholder={'Почта'}/>
                <button className={s.startWork}>Начать работу</button>
                <a className={s.forgotPassword} href="#">Забыли пароль?</a>
                {children}
            </Modal>
        </>
    );
};
