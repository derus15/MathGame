import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Example, getExampleAnswer } from 'entities/Example';
import ExampleInput from 'shared/UI/Input/ExampleInput/ExampleInput';
import { getIsRoundProgress } from '../model/selectors/getIsRoundProgress';
import { getSessionProgress } from 'entities/Session';
import { Placeholder } from '../UI/Placeholder/Placeholder';
import { getCurrentRound, hungerModeActions } from 'features/GameMods/HungerMode';
import { useCheckAnswer } from 'features/GameMods/hooks/useCheckAnswer';
import { getSessionPoints, sessionDataActions } from 'entities/SessionData';
import { useStartSession } from 'features/GameMods/hooks/useStartSession';
import { TimersContainer } from './TimersContainer/TimersContainer';

export const HungerMode = () => {

    const isRoundProgress = useSelector(getIsRoundProgress);
    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const globalPoints = useSelector(getSessionPoints);
    const answer = useSelector(getExampleAnswer);
    const currentRounds = useSelector(getCurrentRound);

    const { checkAnswer } = useCheckAnswer();
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
                autoFocus={isRoundProgress}
                onlyNumber
                focus={startHungerMode}
                onInput={checkAnswer}
                signal={globalPoints}
            />
            {__IS_DEV__ && <div style={{ fontSize: '2rem', color: 'white' }}>{answer}</div>}
        </>
    );
};
