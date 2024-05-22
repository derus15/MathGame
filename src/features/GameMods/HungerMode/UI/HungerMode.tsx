import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Example, getExampleAnswer } from 'entities/Example';
import ExampleInput from 'shared/UI/Input/ExampleInput/ExampleInput';
import style from './HungerMode.module.css';
import { HungerTimer } from './Timer/HungerTimer';
import { HungerPointsCounter } from './Counter/HungerPointsCounter';
import { getIsRoundProgress } from '../model/selectors/getIsRoundProgress';
import { getSessionProgress } from 'entities/Session';
import { Placeholder } from '../UI/Placeholder/Placeholder';
import { RoundCounter } from '../UI/Counter/RoundCounter';
import { getCurrentRound, hungerModeActions } from 'features/GameMods/HungerMode';
import { useCheckAnswer } from 'features/GameMods/hooks/useCheckAnswer';
import { classNames } from 'shared/lib/classNames/classNames';
import { getSessionPoints, sessionDataActions } from 'entities/SessionData';
import { useStartSession } from 'features/GameMods/hooks/useStartSession';

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
    
    if (!isRoundProgress && sessionProgress) {
        return (
            <>
                <div className={style.timerContainer}>
                    <RoundCounter />
                </div>
                <Placeholder />
            </>
        );
    }

    return (
        <>
            <div className={classNames('', {
                [style.timerContainer]: isRoundProgress,
                [style.roundCounter]: !isRoundProgress,
            })}
            >
                {isRoundProgress ? <HungerTimer /> : <RoundCounter />}
                {isRoundProgress && <HungerPointsCounter />}
            </div>
            <Example />
            <ExampleInput
                autofocus={isRoundProgress}
                onlyNumber
                focus={startHungerMode}
                onInput={checkAnswer}
                signal={globalPoints}
            />
            {__IS_DEV__ && <div style={{ fontSize: '2rem', color: 'white' }}>{answer}</div>}
        </>
    );
};
