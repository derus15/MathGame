import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import { interfaceActions } from '../../model/slice/interfaceSlice';
import Select from '../InterfaceSelects/Select/Select';
import { getInterfaceNumber } from '../../model/selectors/getInterfaceNumber';
import { getSessionProgress } from 'entities/Session';
import { MyNumber } from 'features/MyParams';
import { exampleActions } from 'entities/Example';

const ChangeNumber = () => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const numbersList = [10, 15, 20];
    const currentNumber = useSelector(getInterfaceNumber);
    
    function changeNumberInSession(number: number) {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeNumber(number));
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
