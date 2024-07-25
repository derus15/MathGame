import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Example, ExampleInput, getExampleAnswer } from 'entities/Example';
import { getIsRoundProgress } from '../model/selectors/getIsRoundProgress';
import { getSessionProgress } from 'entities/Session';
import { Placeholder } from '../UI/Placeholder/Placeholder';
import { getCurrentRound } from '../model/selectors/getCurrentRound';
import { hungerModeActions } from '../model/slice/hungerModeSlice';
import { useCheckAnswer } from '../../hooks/useCheckAnswer';
import { sessionDataActions } from 'entities/SessionData';
import { useStartSession } from '../../hooks/useStartSession';
import { TimersContainer } from './TimersContainer/TimersContainer';

export const HungerMode = () => {

    const isRoundProgress = useSelector(getIsRoundProgress);
    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const answer = useSelector(getExampleAnswer);
    const currentRounds = useSelector(getCurrentRound);

    const { checkAnswer, isCorrect, isIncorrect } = useCheckAnswer();
    const { startSessionHandler } = useStartSession();

    const startHungerMode = () => {
        startSessionHandler();
        dispatch(hungerModeActions.startRound());
    };

    useEffect(() => {
        if (currentRounds >= 1 && isRoundProgress) {
            dispatch(sessionDataActions.setSessionTimeFlags());
        }
    }, [isRoundProgress]);

    useEffect(() => () => { 
        dispatch(hungerModeActions.endRound());
        dispatch(hungerModeActions.resetRounds(0));
    }, []);
    
    if (!isRoundProgress && sessionProgress) {
        return <Placeholder />;
    }

    return (
        <>
            <TimersContainer />
            <Example />
            <ExampleInput
                answerSignal={isCorrect}
                errorSignal={isIncorrect}
                autoFocus={isRoundProgress}
                onFocus={startHungerMode}
                onInput={checkAnswer}
            />
            {__IS_DEV__ && <div style={{ fontSize: '2rem', color: 'white' }}>{answer}</div>}
        </>
    );
};
