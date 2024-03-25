import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './Result.module.css';
import { ExampleButton } from 'shared/UI/Button/ExampleButton/ExampleButton';
import { Link } from 'react-router-dom';
import { sessionActions } from 'entities/Session';
import {
    getSessionPoints, getSessionTime,
    saveSessionDataInLocalStorage, sendSessionData, sessionDataActions,
} from 'entities/SessionData';
import { getIsAuth } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks/reduxHooks';
import { calculateEPS } from 'shared/lib/calculateEPS/calculateEPS';
import { getUnexpectedEnd } from 'entities/Session/model/selectors/getUnexpectedEnd';
import ExampleModal from 'pages/Result/UI/ExampleModal/ExampleModal';

export const Result = () => {

    const isAuth = useSelector(getIsAuth);
    const dispatch = useAppDispatch();
    
    const numberResult = useSelector(getSessionPoints);
    const timeResult = useSelector(getSessionTime);
    const eps = calculateEPS(numberResult, timeResult);
    const unexpectedEnd = useSelector(getUnexpectedEnd);

    const closeResultHandle = () => {
        dispatch(sessionActions.closeResultPage());
    };

    useEffect(() => {
        dispatch(sessionDataActions.saveEPS(eps));
        if (isAuth) {
            dispatch(sendSessionData(null));
        }
        saveSessionDataInLocalStorage();
        return () => {
            closeResultHandle();
            dispatch(sessionDataActions.resetExampleList());
        };
    }, []);

    return (
        <div className={style.resultContainer}>
            <h3 className={style.title}>{unexpectedEnd ? 'Допущена ошибка' : 'Результаты сессии'}</h3>
            <div className={style.result}>
                <div className={style.epsContainer}>
                    <span>Ваше время:</span>
                    <span className={style.epsValue}>{timeResult}</span>
                </div>
                <div className={style.epsContainer}>
                    <span>Примеров решено:</span>
                    <span className={style.epsValue}>{numberResult}</span>
                </div>
                <div className={style.epsContainer}>
                    <span title="Примеров в секунду">ПВС:</span>
                    <span className={style.epsValue}>{eps}</span>
                </div>
                <div className={style.buttonContainer}>
                    <ExampleModal />
                    <ExampleButton onClick={closeResultHandle} random />
                </div>
                {!isAuth && (
                    <div className={style.instruction}>
                        <Link to="/auth" className={style.instructionLink}>
                            Создайте аккаунт,
                        </Link>
                        чтобы сохранять результаты
                    </div>
                )}

            </div>
        </div>
    );
};
