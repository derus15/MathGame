import React, {useState} from 'react';
import MyInput from "../UI/Input/MyInput";
import Timer from "./Timer";


const Example = ({endSession, counter, resetCounter, ...props}) => {

const[time, setTime] = useState(15);

const [number, setNumbers] = useState({
    num_1: Math.floor(Math.random() * 100),
    num_2: Math.floor(Math.random() * 100),
})

let answer = String(number.num_1 + number.num_2);


function refresh(){
    const refreshNum = {
        num_1: Math.floor(Math.random() * 100),
        num_2: Math.floor(Math.random() * 100),
    }
    setNumbers(refreshNum);
}

function startTime() {
    let start = setInterval(() => {
        setTime((time) => {
            if (time <= 0){
                clearInterval(start)
            }else{
            return time - 1}
        })
    }, 1000)
}

function startSession(){
    resetCounter();
    startTime();
    console.log('начало');
    setTimeout(endSession, time * 1000);
}

function answered(e){
    if(e.target.value === answer){
        refresh();
        counter();
        e.target.value = ''}
    }

    return (
        <div>
            <Timer time={time}/>
        <div className={'example'}>
            <div> {number.num_1} + {number.num_2} = </div>
            <MyInput
            {...props}
            onClick={startSession}
            onInput={answered}
            />
        </div>
            <div>{answer}</div>
        </div>
    );
};


export default Example;