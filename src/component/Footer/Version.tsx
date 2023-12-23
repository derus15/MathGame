import React, { useState } from 'react';
import Modal from '../../UI/Modal/Modal';

const Version = () => {
    const [modalVersion, setModalVersion] = useState(false);

    function showModalVersion() {
        setModalVersion(true);
    }

    return (
        <div>
            <div className="extra" onClick={showModalVersion}>
                v 2.1.28
            </div>
            {modalVersion && (
                <Modal visible={modalVersion} setVisible={setModalVersion}>
                    <span className="versionNumber">v 1.0 </span>
                    <p className="versionText">
                        - Первая рабочая версия приложения
                    </p>
                    <br />
                    <span className="versionNumber">v 1.1 </span>
                    <p className="versionText">
                        - Добавлена новая тема
                        <br />- Исправление мелких ошибок и багов
                    </p>
                    <br />
                    <span className="versionNumber">v 1.2 </span>
                    <p className="versionText">
                        - Добавлен новый режим игры
                        <br />
                        - Добавлено поле для установки собственного времени
                        <br />- Исправление мелких ошибок и багов
                    </p>
                    <br />
                    <span className="versionNumber">v 2.0 </span>
                    <p className="versionText">
                        - Добавлен личный кабинет и статистика
                        <br />
                        - Добавлено отображение секунд
                        <br />
                        - Исправление мелких ошибок и багов
                        <br />
                    </p>
                    <br />
                    <span className="versionNumber">v 2.1 </span>
                    <p className="versionText">
                        - Переезд проекта на кастомную сборку webpack
                        <br />
                        - Исправления и рефакторинг на уровне кода
                        <br />
                    </p>
                </Modal>
            )}
        </div>
    );
};

export default Version;
