import React, { useState } from 'react';
import Modal from 'shared/UI/Modal/Modal';
import style from '../Footer.module.css';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';

const VersionHistory = () => {
    const [modalVersion, setModalVersion] = useState(false);

    function showModalVersion() {
        setModalVersion(true);
    }

    return (
        <>
            <OutlineButton className={style.extra} onClick={showModalVersion}>
                v 2.2.3
            </OutlineButton>
            <Modal className={style.versionModal} visible={modalVersion} setVisible={setModalVersion}>
                <span className={style.versionNumber}>v 1.0 </span>
                <p className={style.versionText}>
                    - Первая рабочая версия приложения
                </p>
                <br />
                <span className={style.versionNumber}>v 1.1 </span>
                <p className={style.versionText}>
                    - Добавлена новая тема
                    <br />
                    - Исправление мелких ошибок и багов
                </p>
                <br />
                <span className={style.versionNumber}>v 1.2 </span>
                <p className={style.versionText}>
                    - Добавлен новый режим игры
                    <br />
                    - Добавлено поле для установки собственного времени
                    <br />- Исправление мелких ошибок и багов
                </p>
                <br />
                <span className={style.versionNumber}>v 2.0 </span>
                <p className={style.versionText}>
                    - Добавлен личный кабинет и статистика
                    <br />
                    - Добавлено отображение секунд
                    <br />
                    - Исправление мелких ошибок и багов
                    <br />
                </p>
                <br />
                <span className={style.versionNumber}>v 2.1 </span>
                <p className={style.versionText}>
                    - Переезд проекта на кастомную сборку webpack
                    <br />
                    - Исправления и рефакторинг на уровне кода
                    <br />
                </p>
                <br />
                <span className={style.versionNumber}>v 2.2 </span>
                <p className={style.versionText}>
                    - Добавление модификатора одной попытки
                    <br />
                    - Добавление инструкции для новых пользователей
                    <br />
                    - Добавление горячих клавиш для быстрого начала
                    <br />
                    - Исправление мелких ошибок и багов
                    <br />
                </p>
            </Modal>
        </>
    );
};

export default VersionHistory;
