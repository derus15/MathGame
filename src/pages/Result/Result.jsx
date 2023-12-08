import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './Result.module.css';
import ExampleButton from '../../UI/Button/ExampleButton/ExampleButton';
import axios from '../../helpers/axios';
import { normalizationOfTheEnd } from '../../helpers/normalizationOfTheEnd/normalizationOfTheEnd';
import { Link } from 'react-router-dom';
import { authData } from '../../redux/Slices/backSlices/authSlice';

const Result = ({ setIsResult }) => {
    const sprintResultTime = useSelector((state) => state.data.sprintTime);
    const mode = useSelector((state) => state.interface.mode);
    const isAuth = useSelector(authData);

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
        <div className={style.resultContainer}>
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
                {!isAuth && (
                    <div className={style.instruction}>
                        <Link to="/auth" className={style.instructionLink}>
                            Создайте аккаунт,
                        </Link>
                        чтобы сохранять результаты
                    </div>
                )}

            </div>
        </div>
    );
};

export default Result;
