import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExampleInput from '../UI/Input/ExampleInput/ExampleInput';
import StandardTimer from './Timers/StandardTimer';
import Example from './Example';
import SprintTimer from './Timers/SprintTimer';
import { generateNumber, generateSign } from '../redux/Slices/frontSlices/exampleSlice';

const ExampleArea = ({ endSession, sessionProgress, setSessionProgress }) => {

    const dispatch = useDispatch();
    const signList = useSelector((state) => state.interface.signList);
    const [answer, setAnswer] = useState();
    const gameMode = useSelector((state) => state.interface.mode);
    const inputRef = useRef(null);

    const refreshExample = () => {
        dispatch(generateNumber(2));
        dispatch(generateSign(signList));
    };

    useMemo(() => {
        refreshExample();
    }, [signList, gameMode]);

    const startSession = () => {
        if (!sessionProgress) {
            setSessionProgress(true);
        }
    };

    const answered = (e) => {
        if (e.target.value === answer) {
            refreshExample();
            e.target.value = '';
        }
    };

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
                ? <StandardTimer answer={answer} sessionProgress={sessionProgress} end={endSession} />
                : <SprintTimer answer={answer} sessionProgress={sessionProgress} end={endSession} />}
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
        </>
    );
};

export default ExampleArea;
