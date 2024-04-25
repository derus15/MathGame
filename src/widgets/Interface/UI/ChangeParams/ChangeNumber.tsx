import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import { interfaceActions } from '../../model/slice/interfaceSlice';
import Select from '../InterfaceSelects/Select/Select';
import { getInterfaceNumber } from '../../model/selectors/getInterfaceNumber';
import { useRefreshExample } from 'entities/Example';
import { getSessionProgress } from 'entities/Session';
import { MyNumber } from 'features/MyParams';

const ChangeNumber = () => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const numbersList = [10, 15, 20];
    const currentNumber = useSelector(getInterfaceNumber);
    const { refreshExample } = useRefreshExample();
    
    function changeNumberInSession(number: number) {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeNumber(number));
            refreshExample();
        }
    }

    return (
        <div className={style.containerNumber}>
            {numbersList.map((number) => (

                <Select
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
