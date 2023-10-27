import React, { useState } from 'react';
import MyModal from '../../UI/Modal/MyModal';

function Error() {
    const [modalError, setModalError] = useState(false);

    function showModalError() {
        setModalError(true);
    }

    return (
        <div>
            <div onClick={showModalError} className="extra">Сообщить об ошибке</div>
            {modalError
                && (
                    <MyModal visible={modalError} setVisible={setModalError}>
                        Если вы нашли ошибку, то пишите на почту
                        <span className="errorEmail"> mathgame.problem@gmail.com</span>
                    </MyModal>
                )}
        </div>
    );
}

export default Error;
