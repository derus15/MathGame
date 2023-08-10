import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './Result.module.css';
import ExampleButton from '../../UI/Button/ExampleButton/ExampleButton';
import axios from '../../axios';

const Result = ({ isResult, setIsResult }) => {

    const sprintResultTime = useSelector(state => state.data.sprintTime);
    const mode = useSelector(state => state.interface.mode);
    const standardResultNum = useSelector(state => state.data.standardCounter);
    const time = useSelector(state => state.interface.time);
    const number = useSelector(state => state.interface.number);
    const sign = useSelector(state => state.interface.signList);

    const actualDataStandard = {
        mode,
        time,
        number: standardResultNum,
        sign,
    };

    const actualDataSprint = {
        mode,
        number,
        time: sprintResultTime,
        sign,
    };

    const Ending = () => {

        if (sprintResultTime % 10 === 1) {
            return sprintResultTime + ' секунда';
        } else if (![12, 13, 14].includes(sprintResultTime % 100) && [2, 3, 4].includes(sprintResultTime % 10)) {
            return sprintResultTime + ' секунды';
        } else {
            return sprintResultTime + ' секунд';
        }
    };

    const sendData = async () => {
        if (mode === 'Стандарт') {
            await axios.post('/session', actualDataStandard);
        } else {
            await axios.post('/session', actualDataSprint);
        }

    };

    useEffect(() => {
        sendData()
            .catch(err => console.log(err));
    }, []);

    return (
        <div className={style.result}>
            {(mode === 'Спринт')
                ?
                <div>Ваше время: {Ending()}</div>
                :
                <div>Примеров решено: {standardResultNum}</div>
            }
            <ExampleButton onClick={() => {
                setIsResult(!isResult);
            }} random={true}></ExampleButton>
        </div>
    );
};

export default Result;