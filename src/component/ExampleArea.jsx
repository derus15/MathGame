import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateNumber, generateSign } from '../redux/Slices/frontSlices/exampleSlice';
import { incrementCounter, resetCounter } from '../redux/Slices/frontSlices/sessionDataSlice';
import SprintTimer from './Timers/SprintTimer';
import StandardTimer from './Timers/StandardTimer';
import Example from './Example';
import ExampleInput from '../UI/Input/ExampleInput/ExampleInput';
import InstructionsProvider from './Instructions/InstructionsProvider';
import { endSession, startSession } from '../redux/Slices/frontSlices/activitiesSession';

const ExampleArea = () => {

    const dispatch = useDispatch();
    const signList = useSelector((state) => state.interface.signList);
    const [answer, setAnswer] = useState();
    const gameMode = useSelector((state) => state.interface.mode);
    const permanentMod = useSelector((state) => state.interface.modifications);
    const sessionProgress = useSelector((state) => state.activities.sessionProgress);

    const refreshExample = () => {
        dispatch(generateNumber(2));
        dispatch(generateSign(signList));
    };

    useMemo(() => {
        refreshExample();
        dispatch(resetCounter());
    }, [signList, gameMode]);

    const startSessionHandler = () => {
        if (!sessionProgress) {
            dispatch(startSession());
        }
    };

    function permanentMode(e) {
        if (permanentMod) {
            const userAnswer = String(e.target.value).length;
            if (userAnswer === answer.length && e.target.value !== answer) {
                dispatch(endSession());
            }
        }
    }

    function answered(e) {
        permanentMode(e);
        if (e.target.value === answer) {
            dispatch(incrementCounter());
            refreshExample();
            e.target.value = '';
        }
    }

    return (
        <>
            {gameMode === 'Стандарт' 
                ? <StandardTimer />
                : <SprintTimer />}
            <div className="example">
                <Example setAnswer={setAnswer} />
                <ExampleInput
                    focus={startSessionHandler}
                    onInput={answered}
                    signal={answer}
                />
            </div>
            <InstructionsProvider />
        </>
    );
};

export default ExampleArea;
