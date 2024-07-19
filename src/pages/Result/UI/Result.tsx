import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './Result.module.css';
import { ExampleButton } from 'shared/UI/Button/ExampleButton/ExampleButton';
import { getUnexpectedEndText, sessionActions } from 'entities/Session';
import {
    sessionDataActions, useSendSessionData,
} from 'entities/SessionData';
import { getIsAuth } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks/reduxHooks';
import { ExampleModal } from './ExampleModal/ExampleModal';
import { PageLayout } from 'shared/UI/PageLayout/PageLayout';
import { InviteRegister } from './InviteRegister/InviteRegister';
import { exampleActions, getIsPersonalSeed, getIsRetrySession } from 'entities/Example';
import { toast } from 'react-toastify';
import { ResultStat } from 'pages/Result/UI/ResultStat/ResultStat';

export const Result = () => {

    const isAuth = useSelector(getIsAuth);
    const sessionTextEnd = useSelector(getUnexpectedEndText);
    const isRetry = useSelector(getIsRetrySession);
    const isPersonalSeed = useSelector(getIsPersonalSeed);

    const dispatch = useAppDispatch();
    const { sendSessionData } = useSendSessionData();
    const isCustomSession = isPersonalSeed || isRetry;

    const closeResultHandle = useCallback(() => {
        dispatch(sessionActions.closeResultPage());
        dispatch(exampleActions.notRetrySession());
    }, []);

    const retrySessionHandle = useCallback(() => {
        dispatch(sessionActions.closeResultPage());
        dispatch(exampleActions.retrySession());
    }, []);
    
    useEffect(() => {
        if (isAuth && isCustomSession) {
            toast.error('Повторные сессии не сохраняются');
        } else if (isAuth) {
            sendSessionData();
        }
        return () => {
            dispatch(sessionActions.closeResultPage());
            dispatch(sessionDataActions.resetExampleList());
            dispatch(sessionDataActions.resetSessionTimeFlags());
            dispatch(sessionDataActions.resetSessionHungerRounds());
            dispatch(sessionActions.unexpectedEnd(null));
        };
    }, []);

    return (
        <PageLayout>
            <div className={style.resultContainer}>
                <h3 className={style.title}>{sessionTextEnd}</h3>
                <div className={style.result}>
                    <ResultStat />
                    <div className={style.buttonContainer}>
                        <ExampleModal />
                        <ExampleButton onClick={retrySessionHandle}>Повторить</ExampleButton>
                        <ExampleButton onClick={closeResultHandle} random />
                    </div>
                    <InviteRegister />
                </div>
            </div>
        </PageLayout>
    );
};
