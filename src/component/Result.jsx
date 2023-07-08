import React from 'react';
import MyButton from "../UI/Button/MyButton";
import {useSelector} from "react-redux";

const Result = ({closeResult}) => {

    const gameMode = useSelector(state => state.interface.mode);
    const standardCounter = useSelector(state => state.data.standardCounter);

    return (
        <div className={'result'}>
            {(gameMode === 'Спринт')
                ?
                <div>Ваше время: {localStorage.getItem('time')}  </div>
                :
                <div>Примеров решено: {standardCounter}</div>
            }
            <MyButton onClick={closeResult}></MyButton>
        </div>
    );
};

export default Result;