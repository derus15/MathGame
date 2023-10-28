import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExampleInput from '../UI/Input/ExampleInput/ExampleInput';
import StandardTimer from './Timers/StandardTimer';
import Example from './Example';
import SprintTimer from './Timers/SprintTimer';
import { generateNumber } from '../redux/Slices/frontSlices/exampleSlice';

// import useGenerateExample from '../hooks/useGenerateExample';
// import Tooltip from '../UI/Tooltip/Tooltip';
// import { resetSprintCounter, resetStandardCounter } from '../redux/Slices/dataSlice';

const ExampleArea = ({ endSession, sessionProgress, setSessionProgress }) => {

    const dispatch = useDispatch();
    const signList = useSelector((state) => state.interface.signList);
    const [sign, setSign] = useState(signList[Math.floor(Math.random() * signList.length)]);
    const [answer, setAnswer] = useState();
    const gameMode = useSelector((state) => state.interface.mode);
    // const [date, setDate] = useState();
    // const [instruction, setInstruction] = useState(true);

    useEffect(() => {
        dispatch(generateNumber(2));
    }, []);

    function changeSign() {
        const signNumber = signList[Math.floor(Math.random() * signList.length)];
        setSign(signNumber);
    }

    useMemo(() => {
        dispatch(generateNumber(2));
        changeSign();
    }, [signList, gameMode]);

    function startSession() {
        if (!sessionProgress) {
            setSessionProgress(true);
            // setDate(new Date().getTime());
            // setInstruction(false);
        }
    }

    function answered(e) {
        if (e.target.value === answer) {
            changeSign();
            dispatch(generateNumber(2));
            e.target.value = '';
            // let dateNow = new Date().getTime();
            // let timeSpend = (dateNow - date) / 1000;
            // setDate(new Date().getTime());
        }
    }

    return (
        <>
            {gameMode === 'Стандарт' ? (
                <StandardTimer
                    answer={answer}
                    sessionProgress={sessionProgress}
                    end={endSession}
                />
            ) : (
                <SprintTimer
                    answer={answer}
                    sessionProgress={sessionProgress}
                    end={endSession}
                />
            )}
            <div className="example">
                <Example sign={sign} setAnswer={setAnswer} />
                <ExampleInput
                    onFocus={startSession}
                    onInput={answered}
                    signal={answer}
                    sessionProgress={sessionProgress}
                />
                {answer}
            </div>
            {/* {(instruction) */}
            {/*    ? */}
            {/*    <div style={{ */}
            {/*        color: 'var(--base-color)', */}
            {/*        position: 'absolute', */}
            {/*        left: '33%', */}
            {/*        top: '170px', */}
            {/*        fontSize: '19px', */}
            {/*    }} */}
            {/*         className={'text-animation'}> */}
            {/*        Для начала сессии нажмите на поле ввода<br/>или используйте Tab */}
            {/*    </div> */}
            {/*    : */}
            {/*    <></> */}
            {/* } */}
        </>
    );
};

export default ExampleArea;
