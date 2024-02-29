import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './Result.module.css';
import ExampleButton from 'shared/UI/Button/ExampleButton/ExampleButton';
import { normalizationOfTheEnd } from 'shared/lib/normalizationOfTheEnd/normalizationOfTheEnd';
import { Link } from 'react-router-dom';
import { sessionActions } from 'entities/Session';
import { getInterfaceGameMode } from 'widgets/Interface';
import { getSessionPoints, getSessionTime,
    saveSessionDataInLocalStorage, sendSessionData } from 'entities/SessionData';
import { getIsAuth } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks/reduxHooks';

export const Result = () => {

    const isAuth = useSelector(getIsAuth);
    const dispatch = useAppDispatch();
    
    const standardNumberRes = useSelector(getSessionPoints);
    const sprintTimeRes = useSelector(getSessionTime);
    const mode = useSelector(getInterfaceGameMode);
    const sprintTextRes = normalizationOfTheEnd(sprintTimeRes);

    const closeResultHandle = () => {
        dispatch(sessionActions.closeResultPage());
    };

    useEffect(() => {
        if (isAuth) {
            dispatch(sendSessionData(null));
        }
        saveSessionDataInLocalStorage();
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
