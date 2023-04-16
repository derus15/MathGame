import React, {useEffect, useState} from 'react';
import MyInput from "../UI/Input/MyInput";
import Timer from "./Timer";
import Example from "./Example";

const ExampleArea = ({endSession, incrementCounter, resetCounter, duration, sessionProgress, setSessionProgress, signList, ...props}) => {

    const [sign, SetSign] = useState(signList[Math.floor(Math.random() * signList.length)]);
    const [answer, setAnswer] = useState();

    const [number, setNumbers] = useState({
        num_1: Math.floor(Math.random() * 100),
        num_2: Math.floor(Math.random() * 100),
    })

    useEffect(() => {refresh(); changeSign();},[signList]);

    function changeSign() {
        let signNumber = signList[Math.floor(Math.random() * signList.length)];
        SetSign(signNumber);
    }

    function refresh() {
        const refreshNum = {
            num_1: Math.floor(Math.random() * 100),
            num_2: Math.floor(Math.random() * 100),
        }
        setNumbers(refreshNum);
    }

    function startSession() {
        if (!sessionProgress) {
            setSessionProgress(true);
            resetCounter();
        }
    }

    function answered(e) {
        if(e.target.value === answer){
            changeSign();
            refresh();
            incrementCounter();
            e.target.value = ''
        }
    }

    return (
        <div>
            <Timer duration={duration} sessionProgress={sessionProgress} end={endSession}/>
            <div className={'example'}>
                <Example number={number} sign={sign} setAnswer={setAnswer}/>
                <MyInput {...props} onClick={startSession} onInput={answered}/>
            </div>
        </div>
    );
};

export default ExampleArea;