import React, { memo, useEffect } from 'react';
import { Interface } from 'widgets/Interface';
import { useDispatch, useSelector } from 'react-redux';
import { getResult, getSessionProgress, sessionActions } from 'entities/Session';
import { InstructionsProvider } from 'widgets/Instructions';
import { sessionDataActions } from 'entities/SessionData';
import { Result } from 'pages/Result';
import { GameModsProvider } from 'widgets/GameModsProvider';

const Home = () => {

    const isResult = useSelector(getResult);
    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);

    useEffect(() => () => { dispatch(sessionActions.resetSessionProgress()); }, []);

    const startSessionHandler = () => {
        if (!sessionProgress) {
            dispatch(sessionDataActions.resetExampleList());
        }
        dispatch(sessionActions.startSession());
    };
    
    if (isResult) {
        return <Result />;
    }
    
    return (
        <>
            <Interface />
            <GameModsProvider startSessionHandler={startSessionHandler} />
            <InstructionsProvider />
        </>
    );
};

export default memo(Home);
