import React from 'react';
import MyButton from '../UI/Button/MyButton';
import { useSelector } from 'react-redux';

const Result = ({ closeResult }) => {

    const gameMode = useSelector(state => state.interface.mode);
    const standardCounter = useSelector(state => state.data.standardCounter);
    const sprintTime = Number(localStorage.getItem('time'));

    const Ending = () => {

        if (sprintTime === 1) {
            return sprintTime + ' секунда';
        }
        if (sprintTime < 5) {
            return sprintTime + ' секунды';
        } else {
            return sprintTime + ' секунд';
        }
    };

    return (
        <div className={'result'}>
            {(gameMode === 'Спринт')
                ?
                <div>Ваше время: {Ending()}</div>
                :
                <div>Примеров решено: {standardCounter}</div>
            }
            <MyButton onClick={closeResult}></MyButton>
        </div>
    );
};

export default Result;