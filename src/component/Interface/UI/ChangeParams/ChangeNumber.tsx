import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import { interfaceActions } from '../../model/slice/interfaceSlice';
import MyNumber from '../../../MyParams/MyNumber';
import { StateSchema } from '../../../../redux/types';
import Select from '../InterfaceSelects/Select/Select';
import { getNumber } from '../../model/selectors/getNumber';
import { exampleActions } from '../../../../redux/Slices/frontSlices/example/exampleSlice';
import { getSignsList } from '../../model/selectors/getSignsList';

const ChangeNumber = () => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);
    const signList = useSelector(getSignsList);
    const number = useSelector(getNumber);
    
    function changeNumberInSession(number: number) {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeNumber(number));
            dispatch(exampleActions.generateNumber(2));
            dispatch(exampleActions.generateSign(signList));
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
