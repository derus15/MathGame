import React, { useState } from 'react';
import Modal from '../../UI/Modal/Modal';

const Error = () => {
    const [modalError, setModalError] = useState(false);

    function showModalError() {
        setModalError(true);
    }

    return (
        <div>
            <div onClick={showModalError} className="extra">Сообщить об ошибке</div>
            {modalError
                && (
                    <Modal visible={modalError} setVisible={setModalError}>
                        Если вы нашли ошибку, то пишите на почту
                        <span className="errorEmail"> mathgame.problem@gmail.com</span>
                    </Modal>
                )}
        </div>
    );
};

export default Error;
