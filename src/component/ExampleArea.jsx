import React, { useMemo, useState } from 'react';
import ExampleInput from '../UI/Input/ExampleInput/ExampleInput';
import StandardTimer from './Timers/StandardTimer';
import Example from './Example';
import SprintTimer from './Timers/SprintTimer';
import { useSelector } from 'react-redux';

const ExampleArea = ({ endSession, sessionProgress, setSessionProgress }) => {

    const signList = useSelector(state => state.interface.signList);
    const [sign, SetSign] = useState(signList[Math.floor(Math.random() * signList.length)]);
    const [answer, setAnswer] = useState();
    const gameMode = useSelector(state => state.interface.mode);

    const [number, setNumbers] = useState({
        num_1: Math.floor(Math.random() * 100),
        num_2: Math.floor(Math.random() * 100),
    });

    useMemo(() => {
        refresh();
        changeSign();
    }, [signList, gameMode]);

    function changeSign() {
        let signNumber = signList[Math.floor(Math.random() * signList.length)];
        SetSign(signNumber);
    }

    function refresh() {
        const refreshNum = {
            num_1: Math.floor(Math.random() * 100),
            num_2: Math.floor(Math.random() * 100),
        };
        setNumbers(refreshNum);
    }

    function startSession() {
        if (!sessionProgress) {
            setSessionProgress(true);
        }
    }

    function answered(e) {
        if (e.target.value === answer) {
            changeSign();
            refresh();
            e.target.value = '';
        }
    }

    return (
        <div>
            {(gameMode === 'Стандарт')
                ?
                <StandardTimer answer={answer} sessionProgress={sessionProgress} end={endSession} />
                :
                <SprintTimer answer={answer} sessionProgress={sessionProgress} end={endSession} />
            }
            <div className={'example'}>
                <Example number={number} sign={sign} setAnswer={setAnswer} />
                <ExampleInput tabIndex='10' onClick={startSession} onFocus={startSession} onInput={answered}
                              signal={answer}
                              sessionProgress={sessionProgress} />
            </div>
        </div>
    );
};

export default ExampleArea;