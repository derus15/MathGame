import React from 'react';
import MyButton from "../UI/Button/MyButton";
import {useSelector} from "react-redux";

const Result = ({closeResult}) => {

    const gameMode = useSelector(state => state.interface.mode);

    return (
        <div className={'result'}>
            {(gameMode === 'Спринт')
                ?
                <div>Ваше время: {localStorage.getItem('time')}  </div>
                :
                <div>Примеров решено: {localStorage.getItem('counter')}</div>
            }
            <MyButton onClick={closeResult}></MyButton>
        </div>
    );
};

export default Result;