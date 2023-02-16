import React from 'react';
import MyInput from "../UI/Input/MyInput";

const Example = ({number, refresh, ...props}) => {

    let answer = String(number.num_1 + number.num_2);

    return (
        <div className={'example'}>
            <div> {number.num_1} + {number.num_2} = </div>
            <MyInput
            {...props}
            onFocus={(e) => {
                if(e.target.value === answer){
                    refresh();
                    e.target.value = ''}
            }}
            />
        </div>
    );
};



export default Example;