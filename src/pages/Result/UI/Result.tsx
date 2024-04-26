import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './Result.module.css';
import { ExampleButton } from 'shared/UI/Button/ExampleButton/ExampleButton';
import { sessionActions } from 'entities/Session';
import {
    getSessionPoints, getSessionTime,
    saveSessionDataInLocalStorage, sendSessionData, sessionDataActions,
} from 'entities/SessionData';
import { getIsAuth } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks/reduxHooks';
import { calculateEPS } from 'shared/lib/calculateEPS/calculateEPS';
import { getUnexpectedEnd } from 'entities/Session/model/selectors/getUnexpectedEnd';
import ExampleModal from './ExampleModal/ExampleModal';
import { PageLayout } from 'shared/UI/PageLayout/PageLayout';
import { timeNormalization } from 'shared/lib/timeNormalization/timeNormalization';
import { ResultItem } from './ResultItem/ResultItem';
import { InviteRegister } from './InviteRegister/InviteRegister';

export const Result = () => {

    const isAuth = useSelector(getIsAuth);
    const dispatch = useAppDispatch();
    
    const numberResult = useSelector(getSessionPoints);
    const sessionTime = useSelector(getSessionTime);
    const timeResult = timeNormalization(sessionTime, sessionTime >= 3600);
    const eps = calculateEPS(numberResult, sessionTime);
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
        <PageLayout>
            <div className={style.resultContainer}>
                <h3 className={style.title}>{unexpectedEnd ? 'Допущена ошибка' : 'Результаты сессии'}</h3>
                <div className={style.result}>
                    <ResultItem title="Примеров решено:" value={numberResult} />
                    <ResultItem title="Ваше время:" value={timeResult} />
                    <ResultItem title="ПВС:" value={eps} description="Примеров в секунду" />
                    <div className={style.buttonContainer}>
                        <ExampleModal />
                        <ExampleButton onClick={closeResultHandle} random />
                    </div>
                    <InviteRegister />
                </div>
            </div>
        </PageLayout>
    );
};
