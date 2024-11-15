import React, { useEffect } from 'react';
import { Interface } from 'widgets/Interface';
import { useDispatch, useSelector } from 'react-redux';
import { getResult, sessionActions } from 'entities/Session';
import { InstructionsProvider } from 'widgets/Instructions';
import { Result } from './Result/Result';
import { GameModsProvider } from 'widgets/GameModsProvider';
import { exampleActions } from 'entities/Example';

const Home = () => {

    const isResult = useSelector(getResult);
    const dispatch = useDispatch();

    useEffect(() => () => { 
        dispatch(sessionActions.resetSessionProgress());
        dispatch(exampleActions.notRetrySession());
    }, []);

    if (isResult) {
        return <Result />;
    }
    
    return (
        <main className="homeContainer">
            <div className="interfaceContainer">
                <Interface />
            </div>
            <GameModsProvider />
            <div className="instructionsContainer">
                <InstructionsProvider />
            </div>
        </main>
    );
};

export default Home;
