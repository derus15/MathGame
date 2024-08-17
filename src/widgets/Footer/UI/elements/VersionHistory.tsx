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
        versionNumber: 'v 1.0.0',
        versionText: [
            ' - Первая рабочая версия приложения',
        ],
    },
    2: {
        versionNumber: 'v 1.1.0',
        versionText: [
            '- Добавлена новая тема',
            '- Исправлены мелкие ошибки и баги',
        ],
    },
    3: {
        versionNumber: 'v 1.2.0',
        versionText: [
            '- Добавлен новый режим игры',
            '- Добавлено поле для кастомных параметров сессии',
            '- Исправлены мелкие ошибки и баги',
        ],
    },
    4: {
        versionNumber: 'v 2.0.0',
        versionText: [
            '- Добавлен личный кабинет и статистика',
            '- Добавлено отображение миллисекунд',
            '- Исправлены мелкие ошибки и баги',
        ],
    },
    5: {
        versionNumber: 'v 2.1.0',
        versionText: [
            '- Переезд проекта на кастомную сборку webpack',
            '- Исправлены мелкие ошибки и баги',
        ],
    },
    6: {
        versionNumber: 'v 2.2.0',
        versionText: [
            '- Добавлен модификатор одной попытки',
            '- Добавлены инструкции для новых пользователей',
            '- Добавлены горячие клавиши для быстрого начала',
            '- Исправлены мелкие ошибки и баги',
        ],
    },

    7: {
        versionNumber: 'v 2.3.0',
        versionText: [
            '- Добавлен виджет для отображенения рекордов в личном кабинете',
            '- Переработано окно результата сессии',
            '- Добавлен новый режим игры',
            '- Добавлены новые инструкции для режимов игры',
            '- Добавлена новая тема',
            '- Исправлены мелкие ошибки и баги',
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
                v 2.3.68
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
