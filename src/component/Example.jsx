import React, {useEffect, useState} from 'react';
import MyInput from "../UI/Input/MyInput";
import Timer from "./Timer";


const Example = ({endSession, counter, resetCounter, ...props}) => {
const [sign, SetSign] = useState('-');
const [time, setTime] = useState(5);
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

function changeSign() {
    let signNumber = (Math.floor(Math.random() * 100));

    if (signNumber <= 25) {
        return SetSign('-')
    }
    else if ((signNumber > 25) && (signNumber <= 50)) {
        return SetSign('+')
    }
    else if ((signNumber > 50) && (signNumber <= 75)) {
        return SetSign('*')
    }
    else if ((signNumber > 75) && (signNumber <= 99)) {
        return SetSign('/')
    }
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
    while ((sign === '/') && (num_1 % num_2 !== 0)){
        if (num_1 > 0){
            num_1++;
        }
        if (num_1 > 0){
            num_2--;
        }
    }
    answer = String(signFunction[sign](num_1, num_2));
    return (<div>{num_1} {sign} {num_2} =</div>)
}


function startTime() {
    if (time > 0){
    let start = setInterval(() => {
        setTime((time) => {
            if (time <= 0){
                clearInterval(start)
            }else{
                return time - 1}
        })
    }, 1000)}
}

function startSession(){
    resetCounter();
    startTime();
    setTimeout(endSession, time * 1000);
}

function answered(e){
    if(e.target.value === answer){
        changeSign();
        refresh();
        counter();
        e.target.value = ''}
    }

    return (
        <div>
            <Timer time={time}/>
        <div className={'example'}>
            {generateExample(number.num_1, number.num_2)}
            <MyInput {...props} onClick={startSession} onInput={answered}/>
        </div>
            <div>{answer}</div>
        </div>
    );
};


export default Example;