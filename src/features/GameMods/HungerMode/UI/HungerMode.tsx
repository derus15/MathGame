import React from 'react';
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
import { hungerModeActions } from 'features/GameMods/HungerMode';
import { useCheckAnswer } from 'features/GameMods/hooks/useCheckAnswer';
import { classNames } from 'shared/lib/classNames/classNames';
import { getSessionPoints } from 'entities/SessionData';

interface HungerModeProps {
    startSessionHandler: () => void,
}

export const HungerMode = ({ startSessionHandler }: HungerModeProps) => {

    const isRoundProgress = useSelector(getIsRoundProgress);
    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const globalPoints = useSelector(getSessionPoints);
    const answer = useSelector(getExampleAnswer);
    const { checkAnswer } = useCheckAnswer();

    const startHungerMode = () => {
        startSessionHandler();
        dispatch(hungerModeActions.startRound());
    };

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
