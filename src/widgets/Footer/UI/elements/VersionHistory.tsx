import React, { useState } from 'react';
import Modal from 'shared/UI/Modal/Modal';
import style from '../Footer.module.css';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';

interface Version {
    versionNumber: string;
    versionText: string[];
}

interface VersionsObj {
    [key: string]: Version;
}

const versionsObj: VersionsObj = {
    1: {
        versionNumber: 'v 1.0',
        versionText: [
            ' - Первая рабочая версия приложения',
        ],
    },
    2: {
        versionNumber: 'v 1.1',
        versionText: [
            '- Добавлена новая тема',
            '- Исправление мелких ошибок и багов',
        ],
    },
    3: {
        versionNumber: 'v 1.2',
        versionText: [
            '- Добавлен новый режим игры',
            '- Добавлено поле для установки собственного времени',
            '- Исправление мелких ошибок и багов',
        ],
    },
    4: {
        versionNumber: 'v 2.0',
        versionText: [
            '- Добавлен личный кабинет и статистика',
            '- Добавлено отображение секунд',
            '- Исправление мелких ошибок и багов',
        ],
    },
    5: {
        versionNumber: 'v 2.1',
        versionText: [
            '- Переезд проекта на кастомную сборку webpack',
            '- Исправления и рефакторинг на уровне кода',
        ],
    },
    6: {
        versionNumber: 'v 2.2',
        versionText: [
            '- Добавление модификатора одной попытки',
            '- Добавление инструкции для новых пользователей',
            '- Добавление горячих клавиш для быстрого начала',
            '- Исправление мелких ошибок и багов',
        ],
    },
};

const VersionHistory = () => {
    const [modalVersion, setModalVersion] = useState(false);

    function showModalVersion() {
        setModalVersion(true);
    }

    return (
        <>
            <OutlineButton className={style.extra} onClick={showModalVersion}>
                v 2.2.32
            </OutlineButton>
            <Modal className={style.versionModal} visible={modalVersion} setVisible={setModalVersion}>
                {Object.keys(versionsObj).map((key) => (
                    <div key={key} className={style.versionContainer}>

                        <span className={style.versionNumber}>{versionsObj[key].versionNumber}</span>
                        <p className={style.versionText}>
                            {versionsObj[key].versionText.map((text: string) => (
                                <div key={text + Math.random()}>
                                    {text}
                                </div>
                            ))}
                        </p>

                    </div>
                ))}
            </Modal>
        </>
    );
};

export default VersionHistory;
