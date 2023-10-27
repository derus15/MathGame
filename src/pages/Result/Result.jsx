import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './Result.module.css';
import ExampleButton from '../../UI/Button/ExampleButton/ExampleButton';
import axios from '../../axios';
import { normalizationOfTheEnd } from '../../helpers/normalizationOfTheEnd';

const Result = ({ setIsResult }) => {
    const sprintResultTime = useSelector((state) => state.data.sprintTime);
    const mode = useSelector((state) => state.interface.mode);

    const standardResultNum = useSelector((state) => state.data.standardCounter);
    const time = useSelector((state) => state.interface.time);
    const number = useSelector((state) => state.interface.number);
    const sign = useSelector((state) => state.interface.signList);

    const sprintResult = normalizationOfTheEnd(sprintResultTime);

    const actualDataStandard = {
        mode,
        time,
        number: standardResultNum, // сделать смену тернарным оператором
        sign,
    };

    const actualDataSprint = {
        mode,
        number,
        time: sprintResultTime,
        sign,
    };

    const sendData = async () => {
        if (mode === 'Стандарт') {
            await axios.post('/session', actualDataStandard);
        } else {
            await axios.post('/session', actualDataSprint);
        }
    };

    useEffect(() => {
        sendData().catch((err) => console.log(err));
    }, []);

    return (
        <div className={style.result}>
            {mode === 'Спринт' ? (
                <div>Ваше время: {sprintResult}</div>
            ) : (
                <div>Примеров решено: {standardResultNum}</div>
            )}
            <ExampleButton
                onClick={() => setIsResult((prev) => !prev)}
                random
            />
        </div>
    );
};

export default Result;
