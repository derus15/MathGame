import React, {useState} from 'react';
import MyInput from "../UI/Input/MyInput";
import Timer from "./Timer";


const Example = ({number, refresh, endSession, counter, resetCounter, ...props}) => {

let answer = String(number.num_1 + number.num_2);
const[time, setTime] = useState(5);


function startTime() {
    let start = setInterval(() => {
        setTime((time) => {
            if (time <= 0){
                console.log('скока?', time);
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
        </div>
    );
};



export default Example;