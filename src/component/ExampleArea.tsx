import React, { ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SprintTimer from './Timers/SprintTimer';
import StandardTimer from './Timers/StandardTimer';
import { Example, useRefreshExample, getAnswer } from 'component/Example';
import ExampleInput from 'UI/Input/ExampleInput/ExampleInput';
import InstructionsProvider from './Instructions/InstructionsProvider';
import { sessionDataActions } from 'redux/Slices/frontSlices/sessionData/sessionDataSlice';
import { getGameMod } from 'component/Interface';
import { useModifications } from 'component/Modifications';
import { getSessionProgress, sessionActions } from 'component/Session';

const ExampleArea = () => {

    const dispatch = useDispatch();
    const answer = useSelector(getAnswer);
    const gameMode = useSelector(getGameMod);
    const sessionProgress = useSelector(getSessionProgress);
    const { refreshExample } = useRefreshExample();
    const [oneTry] = useModifications();

    useEffect(() => {
        dispatch(sessionDataActions.resetCounter());
    }, []);

    const startSessionHandler = () => {
        if (!sessionProgress) {
            dispatch(sessionActions.startSession());
        }
    };
    
    function answered(e: ChangeEvent<HTMLInputElement>) {
        oneTry(e);
        if (e.target.value === answer) {
            dispatch(sessionDataActions.incrementCounter());
            refreshExample();
            e.target.value = '';
        }
    }

    return (
        <>
            {gameMode === 'Стандарт' 
                ? <StandardTimer />
                : <SprintTimer />}
            <div className="exampleContainer">
                <Example />
                <ExampleInput
                    focus={startSessionHandler}
                    onInput={answered}
                    signal={answer}
                />
                {__IS_DEV__ && <div style={{ fontSize: '2rem', color: 'white' }}>{answer}</div>}
            </div>
            <InstructionsProvider />
        </>
    );
};

export default ExampleArea;
