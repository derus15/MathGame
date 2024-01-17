import React, { ChangeEvent, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SprintTimer from './Timers/SprintTimer';
import StandardTimer from './Timers/StandardTimer';
import { Example, useRefreshExample, getAnswer } from 'component/Example';
import ExampleInput from 'UI/Input/ExampleInput/ExampleInput';
import InstructionsProvider from './Instructions/InstructionsProvider';
import { activitiesSessionActions } from 'redux/Slices/frontSlices/activitiesSession/activitiesSession';
import { sessionDataActions } from 'redux/Slices/frontSlices/sessionData/sessionDataSlice';
import { StateSchema } from 'redux/types';
import { testNumber } from 'helpers/testNumber/testNumber';
import { getGameMod } from 'component/Interface';

const ExampleArea = () => {

    const dispatch = useDispatch();
    const answer = useSelector(getAnswer);
    const gameMode = useSelector(getGameMod);
    const permanentMod = useSelector((state: StateSchema) => state.interface.modifications);
    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);
    const { refreshExample } = useRefreshExample();

    useMemo(() => {
        dispatch(sessionDataActions.resetCounter());
    }, []);

    const startSessionHandler = () => {
        if (!sessionProgress) {
            dispatch(activitiesSessionActions.startSession());
        }
    };

    function permanentMode(e: ChangeEvent<HTMLInputElement>) {
        const isNumber = testNumber(e.target.value);
        if (permanentMod && isNumber) {
            const userAnswer = String(e.target.value).length;
            if (userAnswer === answer.length && e.target.value !== answer) {
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
            <div className="exampleContainer">
                <Example />
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
