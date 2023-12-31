import React, { ChangeEvent, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SprintTimer from './Timers/SprintTimer';
import StandardTimer from './Timers/StandardTimer';
import Example from './Example';
import ExampleInput from '../UI/Input/ExampleInput/ExampleInput';
import InstructionsProvider from './Instructions/InstructionsProvider';
import { activitiesSessionActions } from '../redux/Slices/frontSlices/activitiesSession/activitiesSession';
import { sessionDataActions } from '../redux/Slices/frontSlices/sessionData/sessionDataSlice';
import { exampleActions } from '../redux/Slices/frontSlices/example/exampleSlice';
import { StateSchema } from '../redux/types';

const ExampleArea = () => {

    const dispatch = useDispatch();
    const signList = useSelector((state: StateSchema) => state.interface.signList);
    const [answer, setAnswer] = useState('');
    const gameMode = useSelector((state: StateSchema) => state.interface.mode);
    const permanentMod = useSelector((state: StateSchema) => state.interface.modifications);
    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);

    const refreshExample = () => {
        dispatch(exampleActions.generateNumber(2));
        dispatch(exampleActions.generateSign(signList));
    };

    useMemo(() => {
        refreshExample();
        dispatch(sessionDataActions.resetCounter());
    }, [signList, gameMode]);

    const startSessionHandler = () => {
        if (!sessionProgress) {
            dispatch(activitiesSessionActions.startSession());
        }
    };

    function permanentMode(e: ChangeEvent<HTMLInputElement>) {
        if (permanentMod) {
            const userAnswer = String(e.target.value).length;
            if (userAnswer === answer.length && e.target.value !== answer && e.target.value !== ' ') {
                dispatch(activitiesSessionActions.endSession());
            }
        }
    }

    function answered(e: ChangeEvent<HTMLInputElement>) {
        permanentMode(e);
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