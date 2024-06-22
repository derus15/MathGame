import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './Result.module.css';
import { ExampleButton } from 'shared/UI/Button/ExampleButton/ExampleButton';
import { getUnexpectedEndText, sessionActions } from 'entities/Session';
import {
    getSessionPoints, getSessionTime,
    sessionDataActions, useSendSessionData,
} from 'entities/SessionData';
import { getIsAuth } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks/reduxHooks';
import { calculateEPS } from 'shared/lib/calculateEPS/calculateEPS';
import ExampleModal from './ExampleModal/ExampleModal';
import { PageLayout } from 'shared/UI/PageLayout/PageLayout';
import { ResultItem } from './ResultItem/ResultItem';
import { InviteRegister } from './InviteRegister/InviteRegister';
import { getInterfaceGameMode } from 'widgets/Interface';
import { getCurrentRound, hungerModeActions } from 'features/GameMods/HungerMode';
import { exampleActions } from 'entities/Example/model/slice/exampleSlice';
import { getInitialSeed, getIsRetrySession } from 'entities/Example';
import { toast } from 'react-toastify';

export const Result = () => {

    const isAuth = useSelector(getIsAuth);
    const gameMode = useSelector(getInterfaceGameMode);
    const numberResult = useSelector(getSessionPoints);
    const sessionTime = useSelector(getSessionTime);
    const round = useSelector(getCurrentRound);
    const sessionTextEnd = useSelector(getUnexpectedEndText);
    const isRetry = useSelector(getIsRetrySession);
    const seed = useSelector(getInitialSeed);

    const dispatch = useAppDispatch();
    const { sendSessionData } = useSendSessionData();
    const eps = calculateEPS(numberResult, sessionTime);

    const closeResultHandle = useCallback(() => {
        dispatch(sessionActions.closeResultPage());
        dispatch(exampleActions.notRetrySession());
    }, []);

    const retrySessionHandle = useCallback(() => {
        dispatch(sessionActions.closeResultPage());
        dispatch(exampleActions.retrySession());
    }, []);
    
    useEffect(() => {
        dispatch(sessionDataActions.saveEPS(eps));
        if (isAuth && !isRetry) {
            sendSessionData(eps);
        }
        if (isAuth && isRetry) {
            toast.error('Повторные сессии не сохраняются');
        }
        // saveSessionDataInLocalStorage();
        return () => {
            dispatch(sessionActions.closeResultPage());
            dispatch(sessionDataActions.resetExampleList());
            dispatch(hungerModeActions.setRounds(0));
            dispatch(sessionDataActions.resetSessionTimeFlags());
            dispatch(sessionActions.unexpectedEnd(null));
        };
    }, []);

    return (
        <PageLayout>
            <div className={style.resultContainer}>
                <h3 className={style.title}>{sessionTextEnd}</h3>
                <div className={style.result}>
                    <ResultItem title="Примеров решено:" value={numberResult} />
                    {gameMode === 'Голод' && <ResultItem title="Раундов завершено:" value={round} />}
                    <ResultItem title="Ваше время:" value={sessionTime} isTime />
                    <ResultItem title="ПВС:" value={eps} description="Примеров в секунду" isEPS />
                    <ResultItem title="Сид:" value={seed} />
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
