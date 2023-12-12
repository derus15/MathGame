import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './Result.module.css';
import ExampleButton from '../../UI/Button/ExampleButton/ExampleButton';
import axios from '../../helpers/axios';
import { normalizationOfTheEnd } from '../../helpers/normalizationOfTheEnd/normalizationOfTheEnd';
import { Link } from 'react-router-dom';
import { authData } from '../../redux/Slices/backSlices/authSlice';

const Result = ({ setIsResult }) => {

    const isAuth = useSelector(authData);

    const standardNumberRes = useSelector((state) => state.sessionData.counter);
    const sprintTimeRes = useSelector((state) => state.sessionData.time);

    const duration = useSelector((state) => state.interface.time);
    const mode = useSelector((state) => state.interface.mode);
    const sign = useSelector((state) => state.interface.signList);

    const sprintTextRes = normalizationOfTheEnd(sprintTimeRes);

    const actualDataSprint = {
        mode,
        number: standardNumberRes,
        time: mode === 'Стандарт' ? duration : sprintTimeRes,
        sign,
    };

    const sendData = async () => {
        await axios.post('/session', actualDataSprint);
    };

    useEffect(() => {
        sendData().catch((err) => console.log(err));
    }, []);

    return (
        <div className={style.resultContainer}>
            <div className={style.result}>

                {mode === 'Спринт' ? (
                    <div>Ваше время: {sprintTextRes}</div>
                ) : (
                    <div>Примеров решено: {standardNumberRes}</div>
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
