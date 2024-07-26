import React, { useState } from 'react';
import Modal from 'shared/UI/Modal/Modal';
import style from './ExampleModal.module.css';
import { useSelector } from 'react-redux';
import { ExampleButton } from 'shared/UI/Button/ExampleButton/ExampleButton';
import { getSessionExampleList } from 'entities/SessionData/model/selectors/getSessionExampleList';
import { getExample } from 'entities/Example';
import { getInterfaceGameMode } from 'widgets/Interface';
import { findDifferencesArray } from 'shared/lib/findDifferencesArray/findDifferencesArray';
import { getUnexpectedEnd } from 'entities/Session/model/selectors/getUnexpectedEnd';
import { calculateMinMaxNumber } from 'shared/lib/calculateMinMaxNumber/calculateMinMaxNumber';
import { getSessionTimeFlags } from 'entities/SessionData';
import { conversionMilliToSec } from 'shared/lib/conversionMilliToSec/conversionMilliToSec';

export const ExampleModal = () => {

    const [modalExample, setModalExample] = useState(false);
    const lastUnsolvedExample = useSelector(getExample);
    const exampleList = useSelector(getSessionExampleList);
    const unexpectedEnd = useSelector(getUnexpectedEnd);
    const standardMode = useSelector(getInterfaceGameMode) === 'Стандарт';
    const isShowLastExample = unexpectedEnd || standardMode;
    const exampleTimeList = useSelector(getSessionTimeFlags);
    const exampleTime = findDifferencesArray(exampleTimeList);

    const worstResult = calculateMinMaxNumber(exampleTime, 'max', isShowLastExample);
    const bestResult = calculateMinMaxNumber(exampleTime, 'min', isShowLastExample);

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
                        {exampleList.map((example, i) => <span key={i}>{example}</span>)}
                        {isShowLastExample && <span>{lastUnsolvedExample} __</span>}
                    </div>
                    <div className={style.timeContainer}>
                        <span className={style.timeTitle}>Время</span>
                        {exampleTime.map((time, i) => (

                            <div className={style.exampleTimeContainer} key={i}>
                                <span className={style.exampleTime}>
                                    ~ {conversionMilliToSec(time)}
                                </span>
                                {time === bestResult && <span className={style.exampleArrow}>↑</span>}
                                {time === worstResult && time !== bestResult
                                    && <span className={style.exampleArrow}>↓</span>}
                            </div>

                        ))}
                    </div>
                </div>
            </Modal>
        </>
    );
};
