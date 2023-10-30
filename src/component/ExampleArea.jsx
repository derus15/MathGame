import React, { useMemo, useState } from 'react';
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

    const refreshExample = () => {
        dispatch(generateNumber(2));
        dispatch(generateSign(signList));
    };

    useMemo(() => {
        refreshExample();
    }, [signList, gameMode]);

    function startSession() {
        if (!sessionProgress) {
            setSessionProgress(true);
        }
    }

    function answered(e) {
        if (e.target.value === answer) {
            refreshExample();
            e.target.value = '';
        }
    }

    return (
        <>
            {gameMode === 'Стандарт' 
                ? <StandardTimer answer={answer} sessionProgress={sessionProgress} end={endSession} />
                : <SprintTimer answer={answer} sessionProgress={sessionProgress} end={endSession} />
            }
            <div className="example">
                <Example setAnswer={setAnswer} />
                <ExampleInput
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
