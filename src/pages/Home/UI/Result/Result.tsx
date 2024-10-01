import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './Result.module.css';
import { ExampleButton } from 'shared/UI/Button/ExampleButton/ExampleButton';
import { getUnexpectedEndText, sessionActions } from 'entities/Session';
import { useSendSessionData } from 'entities/SessionData';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks/reduxHooks';
import { InviteRegister } from '../InviteRegister/InviteRegister';
import { exampleActions } from 'entities/Example';
import { ResultStat } from '../ResultStat/ResultStat';
import { SessionDataComparison, useSavePreviousSessionData } from 'features/SessionDataComparison';
import { useCalculateEPS } from 'shared/lib/hooks/useCalculateEPS';
import { useCalculateTime } from 'features/GameMods/hooks/useCalculateTime';
import { ResultDetails } from '../ResultDetails/ResultDetails';

export const Result = () => {

    const dispatch = useAppDispatch();
    const { saveSessionTime } = useCalculateTime();
    saveSessionTime();
    useCalculateEPS();
    const { sendSessionData } = useSendSessionData();
    const { savePreviousSessionData } = useSavePreviousSessionData();
    const sessionTextEnd = useSelector(getUnexpectedEndText);

    const closeResultHandle = useCallback(() => {
        dispatch(sessionActions.closeResultPage());
        dispatch(exampleActions.notRetrySession());
    }, []);

    const retrySessionHandle = useCallback(() => {
        dispatch(sessionActions.closeResultPage());
        dispatch(exampleActions.retrySession());
        savePreviousSessionData();
    }, []);
    
    useEffect(() => {
        sendSessionData();
        return () => {
            dispatch(sessionActions.closeResultPage());
        };
    }, []);

    return (
        <div className={style.resultContainer}>
            <h3 className={style.resultTitle}>{sessionTextEnd}</h3>
            <div className={style.result}>
                <div className={style.resultStatContainer}>
                    <ResultStat />
                    <SessionDataComparison />
                </div>
                <div className={style.buttonContainer}>
                    <ResultDetails />
                    <ExampleButton onClick={retrySessionHandle}>Повторить</ExampleButton>
                    <ExampleButton onClick={closeResultHandle} random />
                </div>
            </div>
            <InviteRegister />
        </div>
    );
};
