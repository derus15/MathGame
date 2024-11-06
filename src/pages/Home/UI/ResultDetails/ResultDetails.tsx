import React, { useState } from 'react';
import Modal from 'shared/UI/Modal/Modal';
import style from './ResultDetails.module.css';
import { useSelector } from 'react-redux';
import { ExampleButton } from 'shared/UI/Button/ExampleButton/ExampleButton';
import {
    getSessionEPS,
    getSessionExampleList,
    getSessionPoints,
    getSessionTimeFlags,
    getSessionTimeMilliseconds,
} from 'entities/SessionData';
import { getExample, getExampleAnswer } from 'entities/Example';
import { findDifferencesArray } from 'shared/lib/findDifferencesArray/findDifferencesArray';
import { calculateMinMaxNumber } from 'shared/lib/calculateMinMaxNumber/calculateMinMaxNumber';
import { conversionMilliToSec } from 'shared/lib/conversionMilliToSec/conversionMilliToSec';
import { getParamsGameMode } from 'entities/SessionParams';
import { getUnexpectedEnd } from 'entities/Session';

export const ResultDetails = () => {

    const [modalExample, setModalExample] = useState(false);
    const lastUnsolvedExample = useSelector(getExample);
    const exampleList = useSelector(getSessionExampleList);
    const unexpectedEnd = useSelector(getUnexpectedEnd);
    const lastAnswer = useSelector(getExampleAnswer);
    const standardMode = useSelector(getParamsGameMode) === 'Стандарт';
    const isShowLastExample = unexpectedEnd || standardMode;
    const exampleTimeList = useSelector(getSessionTimeFlags);
    const exampleTime = findDifferencesArray(exampleTimeList);
    const sessionPoints = useSelector(getSessionPoints);
    const sessionTime = useSelector(getSessionTimeMilliseconds);
    const sessionEps = useSelector(getSessionEPS);

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
                        {isShowLastExample 
                            && (
                                <span>{lastUnsolvedExample}
                                    <span className={style.spoiler}>
                                        {lastAnswer}
                                    </span>
                                </span>
                            )}
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
                <hr className={style.separator} />
                <span title="Примеров в секунду">
                    {sessionPoints} / {sessionTime / 1000} = {sessionEps} ПВС
                </span>
            </Modal>
        </>
    );
};
