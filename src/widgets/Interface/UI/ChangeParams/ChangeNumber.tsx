import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import { interfaceActions } from '../../model/slice/interfaceSlice';
import MyNumber from 'features/MyParams/MyNumber';
import Select from '../InterfaceSelects/Select/Select';
import { getNumber } from '../../model/selectors/getNumber';
import { useRefreshExample } from 'entities/Example';
import { getSessionProgress } from 'entities/Session';

const ChangeNumber = () => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const number = useSelector(getNumber);
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
                params={10}
            >
                10
            </Select>
            <Select
                globalState={number}
                callback={() => changeNumberInSession(15)}
                params={15}
            >
                15
            </Select>
            <Select
                globalState={number}
                callback={() => changeNumberInSession(20)}
                params={20}
            >
                20
            </Select>
            <MyNumber standardNumber={[10, 15, 20]} />
        </div>
    );
};

export default ChangeNumber;
