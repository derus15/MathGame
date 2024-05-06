import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import { interfaceActions } from '../../model/slice/interfaceSlice';
import Select from '../InterfaceSelects/Select/Select';
import { getInterfaceGameMode } from '../../model/selectors/getInterfaceGameMode';
import { useRefreshExample } from 'entities/Example';
import { getSessionProgress } from 'entities/Session';
import { instructionsActions } from 'widgets/Instructions';

const instructionsObject: Record<string, string> = {
    'Спринт': 'Решайте примеры, пока они не кончатся',
    'Стандарт': 'Решайте примеры, пока идет время',
    'Голод': 'Решайте примеры, продлевая время раунда',
};

export const ChangeMods = memo(() => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const ModsList = ['Спринт', 'Стандарт', 'Голод'];
    const currentMode = useSelector(getInterfaceGameMode);
    const { refreshExample } = useRefreshExample();

    function changeGameModeInSession(mode: string) {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeGameMode(mode));
            dispatch(instructionsActions.setInstruction(instructionsObject[mode]));
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
        </div>
    );
});
