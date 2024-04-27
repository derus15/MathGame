import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import { interfaceActions } from '../../model/slice/interfaceSlice';
import Select from '../InterfaceSelects/Select/Select';
import { getInterfaceTime } from '../../model/selectors/getInterfaceTime';
import { useRefreshExample } from 'entities/Example';
import { getSessionProgress } from 'entities/Session';
import { MyTime } from 'features/MyParams';

const ChangeTime = () => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const timesList = [15, 30, 60];
    const currentTime = useSelector(getInterfaceTime);
    const { refreshExample } = useRefreshExample();

    function changeTimeInSession(time: number) {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeTime(time));
            refreshExample();
        }
    }

    return (
        <div className={style.containerTime}>
            {timesList.map((time) => (

                <Select
                    key={time}
                    globalState={time}
                    callback={() => changeTimeInSession(time)}
                    currentState={currentTime}
                >
                    {time === 60 ? '1:00' : `0:${time}`}
                </Select>

            ))}
            <MyTime standardTime={timesList} />
        </div>
    );
};

export default memo(ChangeTime);
