import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateNumber, generateSign } from '../redux/Slices/frontSlices/exampleSlice';
import { incrementCounter, resetCounter } from '../redux/Slices/frontSlices/sessionDataSlice';
import SprintTimer from './Timers/SprintTimer';
import StandardTimer from './Timers/StandardTimer';
import Example from './Example';
import ExampleInput from '../UI/Input/ExampleInput/ExampleInput';
import InstructionsProvider from './Instructions/InstructionsProvider';

const ExampleArea = ({ endSession, sessionProgress, setSessionProgress }) => {

    const dispatch = useDispatch();
    const signList = useSelector((state) => state.interface.signList);
    const [answer, setAnswer] = useState();
    const gameMode = useSelector((state) => state.interface.mode);
    const inputRef = useRef(null);
    const permanentMod = useSelector((state) => state.interface.modifications);

    const refreshExample = () => {
        dispatch(generateNumber(2));
        dispatch(generateSign(signList));
    };

    useMemo(() => {
        refreshExample();
        dispatch(resetCounter());
    }, [signList, gameMode]);

    const startSession = () => {
        if (!sessionProgress) {
            setSessionProgress(true);
        }
    };

    function permanentMode(e) {
        if (permanentMod) {
            const userAnswer = String(e.target.value).length;
            if (userAnswer === answer.length && e.target.value !== answer) {
                endSession();
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

    const startSessionWithSpace = (e) => {
        if (!sessionProgress && e.keyCode === 32 && inputRef.current) {
            inputRef.current.focus();
        }
        return null;
    };

    useEffect(() => {
        window.addEventListener('keydown', startSessionWithSpace);
        return () => {
            window.removeEventListener('keydown', startSessionWithSpace);
        };
    }, [sessionProgress]);

    return (
        <>
            {gameMode === 'Стандарт' 
                ? <StandardTimer sessionProgress={sessionProgress} end={endSession} />
                : <SprintTimer sessionProgress={sessionProgress} end={endSession} />}
            <div className="example">
                <Example setAnswer={setAnswer} />
                <ExampleInput
                    ref={inputRef}
                    onFocus={startSession}
                    onInput={answered}
                    signal={answer}
                    sessionProgress={sessionProgress}
                />
            </div>
            <InstructionsProvider signal={sessionProgress} />
        </>
    );
};

export default ExampleArea;
