import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import Select from '../InterfaceSelects/Select/Select';
import { getSessionProgress } from 'entities/Session';
import { MyNumber } from 'features/MyParams';
import { exampleActions } from 'entities/Example';
import { getParamsNumber, sessionParamsActions } from 'entities/SessionParams';

const ChangeNumber = () => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const numbersList = [10, 15, 20];
    const currentNumber = useSelector(getParamsNumber);
    
    function changeNumberInSession(number: number) {
        if (!sessionProgress) {
            dispatch(sessionParamsActions.changeNumber(number));
            dispatch(exampleActions.generateSeed());
        }
    }

    return (
        <div className={style.containerParams}>
            {numbersList.map((number) => (

                <Select
                    key={number}
                    globalState={currentNumber}
                    callback={() => changeNumberInSession(number)}
                    currentState={number}
                >
                    {number}
                </Select>

            ))}
            <MyNumber standardNumber={numbersList} />
        </div>
    );
};

export default memo(ChangeNumber);
