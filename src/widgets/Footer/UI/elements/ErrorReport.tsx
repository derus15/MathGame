import React, { useState } from 'react';
import Modal from 'shared/UI/Modal/Modal';
import style from '../Footer.module.css';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';
import { copyTextToClipboard } from 'shared/lib/copyTextToClipboard/copyTextToClipboard';
import { toast } from 'react-toastify';

const ErrorReport = () => {

    const [modalError, setModalError] = useState(false);
    const email = 'mathgame.problem@gmail.com';

    function showModalError() {
        setModalError(true);
    }

    const handleCopyToClipboard = () => {
        copyTextToClipboard(email);
        toast.error('Адрес скопирован');
    };

    return (
        <>
            <OutlineButton
                onClick={showModalError}
                className={style.element}
            >
                Сообщить об ошибке
            </OutlineButton>
            <Modal visible={modalError} setVisible={setModalError}>
                Если вы нашли ошибку, то пишите на почту
                <span
                    className={style.errorEmail}
                    onClick={handleCopyToClipboard}
                >
                    {email}
                </span>
            </Modal>
        </>
    );
};

export default ErrorReport;
