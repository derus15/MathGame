import React, { useState } from 'react';
import Modal from '../../../../UI/Modal/Modal';
import style from '../Footer.module.css';
import { OutlineButton } from '../../../../UI/Button/OutlineButton/OutlineButton';

const ErrorReport = () => {
    const [modalError, setModalError] = useState(false);

    function showModalError() {
        setModalError(true);
    }

    return (
        <>
            <OutlineButton onClick={showModalError} className={style.extra}>Сообщить об ошибке</OutlineButton>
            <Modal visible={modalError} setVisible={setModalError}>
                Если вы нашли ошибку, то пишите на почту
                <span className={style.errorEmail}> mathgame.problem@gmail.com</span>
            </Modal>
        </>
    );
};

export default ErrorReport;
