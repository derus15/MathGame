import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import { interfaceActions } from '../../model/slice/interfaceSlice';
import MyTime from '../../../MyParams/MyTime';
import { StateSchema } from '../../../../redux/types';
import Select from '../InterfaceSelects/Select/Select';
import { getTime } from '../../model/selectors/getTime';
import { exampleActions } from '../../../../redux/Slices/frontSlices/example/exampleSlice';
import { getSignsList } from '../../model/selectors/getSignsList';

const ChangeTime = () => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);
    const signList = useSelector(getSignsList);
    const time = useSelector(getTime);
    
    function changeTimeInSession(time: number) {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeTime(time));
            dispatch(exampleActions.generateNumber(2));
            dispatch(exampleActions.generateSign(signList));
        }
    }

    return (
        <div className={style.containerTime}>
            <Select
                globalState={time}
                callback={() => changeTimeInSession(15)}
                params={15}
            >
                0:15
            </Select>
            <Select
                globalState={time}
                callback={() => changeTimeInSession(30)}
                params={30}
            >
                0:30
            </Select>
            <Select
                globalState={time}
                callback={() => changeTimeInSession(60)}
                params={60}
            >
                1:00
            </Select>
            <MyTime standardTime={[15, 30, 60]} />
        </div>
    );
};

export default ChangeTime;