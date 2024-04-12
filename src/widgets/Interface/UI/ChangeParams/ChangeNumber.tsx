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
    const number = useSelector(getInterfaceNumber);
    const { refreshExample } = useRefreshExample();
    
    function changeNumberInSession(number: number) {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeNumber(number));
            refreshExample();
        }
    }

    return (
        <div className={style.containerNumber}>
            <Select
                globalState={number}
                callback={() => changeNumberInSession(10)}
                currentState={10}
            >
                10
            </Select>
            <Select
                globalState={number}
                callback={() => changeNumberInSession(15)}
                currentState={15}
            >
                15
            </Select>
            <Select
                globalState={number}
                callback={() => changeNumberInSession(20)}
                currentState={20}
            >
                20
            </Select>
            <MyNumber standardNumber={[10, 15, 20]} />
        </div>
    );
};

export default memo(ChangeNumber);
