import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import Select from '../InterfaceSelects/Select/Select';
import { getSessionProgress } from 'entities/Session';
import { MyRound } from 'features/MyParams';
import { exampleActions } from 'entities/Example';
import { getParamsRounds, sessionParamsActions } from 'entities/SessionParams';

const ChangeRounds = () => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const roundsList = [3, 5, 7];
    const currentRound = useSelector(getParamsRounds);

    function changeRoundInSession(round: number) {
        if (!sessionProgress) {
            dispatch(sessionParamsActions.changeRounds(round));
            dispatch(exampleActions.generateSeed());
        }
    }

    return (
        <div className={style.containerParams}>
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

            <MyRound standardRound={roundsList} />
        </div>
    );
};

export default memo(ChangeRounds);
