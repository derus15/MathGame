import React from 'react';
import MyInput from "../UI/Input/MyInput";

const Example = ({number, refresh, endSession, setEnd, counter, resetCounter, ...props}) => {
let answer = String(number.num_1 + number.num_2);

function startSession(){
    resetCounter()
    setEnd(false)
    console.log('начало');
    setTimeout(endSession, 5000);
}

function answered(e){
    if(e.target.value === answer){
        refresh();
        counter();
        e.target.value = ''}
    }

    return (
        <div className={'example'}>
            <div> {number.num_1} + {number.num_2} = </div>
            <MyInput
            {...props}
            onClick={startSession}
            onInput={answered}
            />
        </div>
    );
};



export default Example;