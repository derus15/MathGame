import React, {useEffect, useState} from 'react';
import MyInput from "../UI/Input/MyInput";
import Timer from "./Timer";


const Example = ({endSession, incrementCounter, resetCounter, duration, time, setTime, sessionProgress, setSessionProgress, signList, ...props}) => {
const [sign, SetSign] = useState(signList[Math.floor(Math.random() * signList.length)]);

let answer;

const signFunction = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
    '*': (a,b) => a * b,
    '/': (a,b) => a / b,
}

const [number, setNumbers] = useState({
    num_1: Math.floor(Math.random() * 100),
    num_2: Math.floor(Math.random() * 100),
})

useEffect(() => {if (time === undefined) {setTime(duration)}},  [time]);
useEffect(() => {refresh(); changeSign();},[signList])

function changeSign() {
    let signNumber = signList[Math.floor(Math.random() * signList.length)];
    SetSign(signNumber);
}

function refresh(){
    const refreshNum = {
        num_1: Math.floor(Math.random() * 100),
        num_2: Math.floor(Math.random() * 100),
    }
    setNumbers(refreshNum);
}

function generateExample(num_1, num_2){
    if ((sign === '-') && (num_1 < num_2)){
        [num_1, num_2] = [num_2, num_1];
    }
    if (sign === '/'){
        if (num_1 === 0){
            num_1 += 1;
        }

        if (num_1 > 10 && num_1 < 100){
            num_2 = Math.floor(num_2 / 10) + 1;
        }
    answer = num_1 * num_2;
    [num_1, answer] = [answer, num_1];
    }
    answer = String(signFunction[sign](num_1, num_2));
    return (<div>{num_1} {sign} {num_2} =</div>)
}

function startSession(){
    if (!sessionProgress) {
        setSessionProgress(true);
        resetCounter();
    }
}

function answered(e){
    if(e.target.value === answer){
        changeSign();
        refresh();
        incrementCounter();
        e.target.value = ''}
    }

    return (
        <div>
            <Timer time={time} sessionProgress={sessionProgress} end={endSession} setTime={setTime}/>
            <div className={'example'}>
                {generateExample(number.num_1, number.num_2)}
                <MyInput {...props} onClick={startSession} onInput={answered}/>
            </div>
        </div>
    );
};


export default Example;