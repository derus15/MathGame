import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import { interfaceActions } from '../../model/slice/interfaceSlice';
import Select from '../InterfaceSelects/Select/Select';
import { getInterfaceTime } from '../../model/selectors/getInterfaceTime';
import { getSessionProgress } from 'entities/Session';
import { MyTime } from 'features/MyParams';
import { exampleActions } from 'entities/Example';

const ChangeTime = () => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const timesList = [15, 30, 60];
    const currentTime = useSelector(getInterfaceTime);

    function changeTimeInSession(time: number) {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeTime(time));
            dispatch(exampleActions.generateSeed());
        }
    }

    return (
        <div className={style.containerParams}>
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
