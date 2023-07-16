import React from 'react';
import MyButton from '../UI/Button/MyButton';
import { useSelector } from 'react-redux';

const Result = ({ closeResult }) => {

    const gameMode = useSelector(state => state.interface.mode);
    const standardCounter = useSelector(state => state.data.standardCounter);
    const sprintTime = Number(localStorage.getItem('time'));

    const Ending = () => {

        if (sprintTime % 10 === 1) {
            return sprintTime + ' секунда';
        } else if (![12, 13, 14].includes(sprintTime % 100) && [2, 3, 4].includes(sprintTime % 10)) {
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
            <MyButton onClick={closeResult} random={true}></MyButton>
        </div>
    );
};

export default Result;