import React from 'react';

const Timer = ({timer, ...props}) => {
    return (
      <div className={'timerContainer'}>
            <button
                {...props}
                style={{color:"white", fontSize:'25px', borderColor: 'white', padding:'5px 10px' }}
                onClick={timer}>
                Start
            </button>
      </div>
    );
};

export default Timer;