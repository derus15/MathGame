import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import { interfaceActions } from '../../model/slice/interfaceSlice';
import MyTime from '../../../MyParams/MyTime';
import Select from '../InterfaceSelects/Select/Select';
import { getTime } from '../../model/selectors/getTime';
import { useRefreshExample } from 'component/Example';
import { getSessionProgress } from 'component/Session';

const ChangeTime = () => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const time = useSelector(getTime);
    const { refreshExample } = useRefreshExample();

    function changeTimeInSession(time: number) {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeTime(time));
            refreshExample();
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
