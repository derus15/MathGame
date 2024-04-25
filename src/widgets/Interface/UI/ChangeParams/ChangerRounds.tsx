import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import { interfaceActions } from '../../model/slice/interfaceSlice';
import Select from '../InterfaceSelects/Select/Select';
import { useRefreshExample } from 'entities/Example';
import { getSessionProgress } from 'entities/Session';

const ChangeRounds = () => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const roundsList = [3, 5, 7];
    const currentRound = 3;
    const { refreshExample } = useRefreshExample();

    function changeTimeInSession(time: number) {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeTime(time));
            refreshExample();
        }
    }

    return (
        <div className={style.containerTime}>
            {roundsList.map((round) => (

                <Select
                    currentState={round}
                    globalState={currentRound}
                    callback={() => changeTimeInSession(round)}
                >
                    {round}
                </Select>

            ))}

            <Select
                globalState={currentRound}
                callback={() => changeTimeInSession(60)}
                currentState={10}
            >
                __
            </Select>
        </div>
    );
};

export default memo(ChangeRounds);
