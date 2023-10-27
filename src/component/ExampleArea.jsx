import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import ExampleInput from '../UI/Input/ExampleInput/ExampleInput';
import StandardTimer from './Timers/StandardTimer';
import Example from './Example';
import SprintTimer from './Timers/SprintTimer';

// import useGenerateExample from '../hooks/useGenerateExample';
// import Tooltip from '../UI/Tooltip/Tooltip';
// import { resetSprintCounter, resetStandardCounter } from '../redux/Slices/dataSlice';

const ExampleArea = ({ endSession, sessionProgress, setSessionProgress }) => {
    const signList = useSelector((state) => state.interface.signList);
    const [sign, setSign] = useState(
        signList[Math.floor(Math.random() * signList.length)],
    );
    const [answer, setAnswer] = useState();
    const gameMode = useSelector((state) => state.interface.mode);
    // const [date, setDate] = useState();
    // const [instruction, setInstruction] = useState(true);

    const [number, setNumbers] = useState({
        num_1: Math.floor(Math.random() * 100),
        num_2: Math.floor(Math.random() * 100),
    });

    function changeSign() {
        const signNumber = signList[Math.floor(Math.random() * signList.length)];
        setSign(signNumber);
    }
    function refresh() {
        const refreshNum = {
            num_1: Math.floor(Math.random() * 100),
            num_2: Math.floor(Math.random() * 100),
        };
        setNumbers(refreshNum);
    }

    useMemo(() => {
        refresh();
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
            refresh();
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
                <Example number={number} sign={sign} setAnswer={setAnswer} />
                <ExampleInput
                    onFocus={startSession}
                    onInput={answered}
                    signal={answer}
                    sessionProgress={sessionProgress}
                />
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
