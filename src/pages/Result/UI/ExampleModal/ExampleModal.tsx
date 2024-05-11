import React, { useState } from 'react';
import Modal from 'shared/UI/Modal/Modal';
import style from './ExampleModal.module.css';
import { useSelector } from 'react-redux';
import { ExampleButton } from 'shared/UI/Button/ExampleButton/ExampleButton';
import { getSessionExampleList } from 'entities/SessionData/model/selectors/getSessionExampleList';
import { getExample } from 'entities/Example';
import { getInterfaceGameMode } from 'widgets/Interface';
import { StateSchema } from 'app/Providers/Store/types';
import { findDifferencesArray } from 'shared/lib/findDifferencesArray/findDifferencesArray';

const ExampleModal = () => {

    const [modalExample, setModalExample] = useState(false);
    const lastExample = useSelector(getExample);
    const exampleList = useSelector(getSessionExampleList);
    const sprintMode = useSelector(getInterfaceGameMode) === 'Спринт';
    const exampleTimeList = useSelector((state: StateSchema) => state.sessionData.sessionIdealTimeFlags);
    const exampleTime = findDifferencesArray(exampleTimeList);

    const showModalExample = () => {
        setModalExample(true);
    };

    return (
        <>
            <ExampleButton onClick={showModalExample}>Подробнее</ExampleButton>
            <Modal visible={modalExample} setVisible={setModalExample} className={style.exampleModal}>
                <div className={style.mainContainer}>
                    <div className={style.exampleContainer}>
                        <span className={style.exampleTitle}>Примеры</span>
                        {exampleList.map((example) => (<span key={Math.random()}>{example}</span>))}
                        {!sprintMode && <span>{lastExample} __</span>}
                        {!exampleList.length && sprintMode && <div>Нет Данных</div>}
                    </div>
                    <div className={style.timeContainer}>
                        <span className={style.timeTitle}>Время</span>
                        {exampleTime.map((time) => (

                            <span key={Math.random()}>
                                {time < 1000
                                    ? `~ 0,${time}`
                                    : `~ ${Math.floor(time / 1000)},${(time % 1000)
                                        .toString().padStart(3, '0')}`}
                            </span>

                        ))}
                    </div>
                </div>
            </Modal>
        </>

    );
};

export default ExampleModal;
