import React from 'react';
import MyButton from "../UI/Button/MyButton";

const Result = ({counter, gameMode, closeResult}) => {

    return (
        <div className={'result'}>
            {(gameMode === 'Спринт')
                ?
                <div>Ваше время: {localStorage.getItem('time')} </div>
                :
                <div>Примеров решено: {counter}</div>
            }
            <MyButton onClick={closeResult}></MyButton>
        </div>
    );
};

export default Result;