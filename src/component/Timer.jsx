import React from 'react';

const Timer = ({time}) => {

    return (
        <div>
           <div style={{fontSize:'30px', color:'white', position: 'absolute', bottom: '170px', left: '250px'}}>{time}</div>
        </div>
    );
};

export default Timer;