import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Result.module.css';
import ExampleButton from 'shared/UI/Button/ExampleButton/ExampleButton';
import { normalizationOfTheEnd } from 'shared/lib/normalizationOfTheEnd/normalizationOfTheEnd';
import { Link } from 'react-router-dom';
import { StateSchema } from 'app/Providers/Store/types';
import { sessionActions } from 'entities/Session';
import { getInterfaceGameMode, getInterfaceSignsList } from 'widgets/Interface';
import { getSessionPoints, getSessionTime } from 'entities/SessionData';
import axios from 'shared/api/axios';

export const Result = () => {

    const isAuth = useSelector((state: StateSchema) => state.auth.isAuth);
    const dispatch = useDispatch();
    
    const standardNumberRes = useSelector(getSessionPoints);
    const sprintTimeRes = useSelector(getSessionTime);

    const mode = useSelector(getInterfaceGameMode);
    const sign = useSelector(getInterfaceSignsList);

    const sprintTextRes = normalizationOfTheEnd(sprintTimeRes);

    const actualDataSprint = {
        mode,
        number: standardNumberRes,
        time: sprintTimeRes,
        sign,
    };

    const sendData = async () => {
        if (isAuth) {
            await axios.post('/session', actualDataSprint);
        }
    };
    
    const closeResultHandle = () => {
        dispatch(sessionActions.closeResultPage());
    };

    useEffect(() => {
        sendData().catch((err) => console.log(err));
        return () => {
            closeResultHandle();
        };
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
                    onClick={closeResultHandle}
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
