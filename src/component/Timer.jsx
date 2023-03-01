import React from 'react';

const Timer = ({time}) => {

    return (
        <div>
           <div className={'timer'}>{time}</div>
        </div>
    );
};

export default Timer;