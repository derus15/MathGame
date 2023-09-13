import React, { useState } from 'react';
import MyModal from '../../UI/Modal/MyModal';

const Version = () => {

    const [modalVersion, setModalVersion] = useState(false);

    function showModalVersion() {
        setModalVersion(true);
    }

    return (
        <div>
            <div className={'extra'} onClick={showModalVersion}>v 2.0.6</div>
            {modalVersion &&
                <MyModal
                    visible={modalVersion} setVisible={setModalVersion}>
                    <span style={{ fontSize: '25px', backgroundColor: 'var(--modal-color)' }}>v 1.0 </span>
                    <p style={{ color: 'white', backgroundColor: 'var(--modal-color)' }}>- Первая рабочая версия
                        приложения</p>
                    <br />
                    <span style={{ fontSize: '25px', backgroundColor: 'var(--modal-color)' }}>v 1.1 </span>
                    <p style={{ color: 'white', backgroundColor: 'var(--modal-color)' }}>
                        - Добавлена новая тема <br />
                        - Исправление мелких ошибок и багов
                    </p>
                    <br />
                    <span style={{ fontSize: '25px', backgroundColor: 'var(--modal-color)' }}>v 1.2 </span>
                    <p style={{ color: 'white', backgroundColor: 'var(--modal-color)' }}>
                        - Добавлен новый режим игры <br />
                        - Добавлено поле для установки собственного времени<br />
                        - Исправление мелких ошибок и багов
                    </p>
                    <br />
                    <span style={{ fontSize: '25px', backgroundColor: 'var(--modal-color)' }}>v 2.0 </span>
                    <p style={{ color: 'white', backgroundColor: 'var(--modal-color)' }}>
                        - Добавлен личный кабинет и статистика <br />
                        - Добавлено отображение секунд<br />
                        - Исправление мелких ошибок и багов<br />
                    </p>
                </MyModal>
            }
        </div>
    );
};

export default Version;