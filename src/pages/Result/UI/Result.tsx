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
import { timeNormalization } from 'shared/lib/timeNormalization/timeNormalization';
import { ResultItem } from './ResultItem/ResultItem';
import { InviteRegister } from './InviteRegister/InviteRegister';
import { getInterfaceGameMode } from 'widgets/Interface';
import { getCurrentRound, hungerModeActions } from 'features/GameMods/HungerMode';
import { exampleActions } from 'entities/Example/model/slice/exampleSlice';

export const Result = () => {

    const isAuth = useSelector(getIsAuth);
    const dispatch = useAppDispatch();
    const gameMode = useSelector(getInterfaceGameMode);
    
    const numberResult = useSelector(getSessionPoints);
    const sessionTime = useSelector(getSessionTime);
    const timeResult = timeNormalization(sessionTime, sessionTime >= 3600);
    const round = useSelector(getCurrentRound);
    const eps = calculateEPS(numberResult, sessionTime);
    const sessionTextEnd = useSelector(getUnexpectedEndText);
    const { sendSessionData } = useSendSessionData();
    
    const closeResultHandle = useCallback(() => {
        dispatch(sessionActions.closeResultPage());
        // dispatch(exampleActions.notRetrySession());
    }, []);

    // const retrySessionHandle = useCallback(() => {
    //     dispatch(sessionActions.closeResultPage());
    //     dispatch(exampleActions.retrySession());
    // }, []);
    
    useEffect(() => {
        dispatch(sessionDataActions.saveEPS(eps));
        if (isAuth) {
            sendSessionData(eps);
        }
        // saveSessionDataInLocalStorage();
        return () => {
            closeResultHandle();
            dispatch(sessionDataActions.resetExampleList());
            dispatch(hungerModeActions.setRounds(0));
            dispatch(sessionDataActions.resetSessionTimeFlags());
            dispatch(sessionActions.unexpectedEnd(null));
        };
    }, []);

    // <ExampleButton onClick={retrySessionHandle}>Повторить</ExampleButton>

    return (
        <PageLayout>
            <div className={style.resultContainer}>
                <h3 className={style.title}>{sessionTextEnd}</h3>
                <div className={style.result}>
                    <ResultItem title="Примеров решено:" value={numberResult} />
                    {gameMode === 'Голод' && <ResultItem title="Раундов завершено:" value={round} />}
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
