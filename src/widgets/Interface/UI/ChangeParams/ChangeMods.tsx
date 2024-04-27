import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import { interfaceActions } from '../../model/slice/interfaceSlice';
import Select from '../InterfaceSelects/Select/Select';
import { getInterfaceGameMode } from '../../model/selectors/getInterfaceGameMode';
import { useRefreshExample } from 'entities/Example';
import { getSessionProgress } from 'entities/Session';

export const ChangeMods = memo(() => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const ModsList = ['Спринт', 'Стандарт'];
    const currentMode = useSelector(getInterfaceGameMode);
    const { refreshExample } = useRefreshExample();

    function changeGameModeInSession(mode: string) {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeGameMode(mode));
            refreshExample();
        }
    }

    return (
        <div className={style.containerMods}>
            {ModsList.map((mode) => (

                <Select
                    key={mode}
                    globalState={currentMode}
                    callback={() => changeGameModeInSession(mode)}
                    currentState={mode}
                >
                    {mode}
                </Select>

            ))}
            <Select globalState={currentMode}>Скоро...</Select>
        </div>
    );
});
