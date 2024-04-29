import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import { interfaceActions } from '../../model/slice/interfaceSlice';
import Select from '../InterfaceSelects/Select/Select';
import { useRefreshExample } from 'entities/Example';
import { getSessionProgress } from 'entities/Session';
import { getInterfaceRounds } from 'widgets/Interface/model/selectors/getInterfaceRounds';

const ChangeRounds = () => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const roundsList = [3, 5, 7];
    const currentRound = useSelector(getInterfaceRounds);
    const { refreshExample } = useRefreshExample();

    function changeRoundInSession(round: number) {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeRounds(round));
            refreshExample();
        }
    }

    return (
        <div className={style.containerTime}>
            {roundsList.map((round) => (

                <Select
                    key={round}
                    currentState={round}
                    globalState={currentRound}
                    callback={() => changeRoundInSession(round)}
                >
                    {round}
                </Select>

            ))}

            <Select
                globalState={currentRound}
                callback={() => changeRoundInSession(60)}
                currentState={10}
            >
                __
            </Select>
        </div>
    );
};

export default memo(ChangeRounds);
