import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Example, getAnswer, getExample, useRefreshExample } from 'entities/Example';
import ExampleInput from 'shared/UI/Input/ExampleInput/ExampleInput';
import { useModifications } from 'features/Modifications';
import { sessionDataActions } from 'entities/SessionData';
import style from './HungerMode.module.css';
import { HungerTimer } from './Timer/HungerTimer';
import { HungerPointsCounter } from './Counter/HungerPointsCounter';
import { getIsRoundProgress } from '../model/selectors/getIsRoundProgress';
import { getSessionProgress } from 'entities/Session';
import { Placeholder } from '../UI/Placeholder/Placeholder';
import { RoundCounter } from '../UI/Counter/RoundCounter';
import { hungerModeActions } from 'features/GameMods/HungerMode';

interface HungerModeProps {
    startSessionHandler: () => void,
}

export const HungerMode = ({ startSessionHandler }: HungerModeProps) => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const answer = useSelector(getAnswer);
    const example = useSelector(getExample);
    const isRoundProgress = useSelector(getIsRoundProgress);
    const [isInputFocused, setIsInputFocused] = useState(false);

    const { refreshExample } = useRefreshExample();
    const [oneTry] = useModifications();

    const checkAnswer = (e: ChangeEvent<HTMLInputElement>) => {
        oneTry(e);
        if (e.target.value === answer) {
            dispatch(sessionDataActions.incrementSessionPoints());
            dispatch(sessionDataActions.updateExampleList([example, answer]));
            refreshExample();
            e.target.value = '';
        }
    };

    const startHungerMode = () => {
        startSessionHandler();
        dispatch(hungerModeActions.startRound());
    };
    
    useEffect(() => {
        setIsInputFocused(true);
    }, [isRoundProgress]);
    
    if (!isRoundProgress && sessionProgress) {
        return (
            <>
                <div className={style.timerContainer}>
                    <RoundCounter />
                </div>;
                <Placeholder />
            </>
        );
    }
    
    return (
        <>
            <div className={style.timerContainer}>
                {sessionProgress ? <HungerTimer /> : <RoundCounter />}
                <HungerPointsCounter />
            </div>
            <Example />
            <ExampleInput
                autofocus={isInputFocused}
                onlyNumber
                focus={startHungerMode}
                onInput={checkAnswer}
                signalAnswer={answer}
            />
            {__IS_DEV__ && <div style={{ fontSize: '2rem', color: 'white' }}>{answer}</div>}
        </>
    );
};
