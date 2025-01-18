import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import Select from '../InterfaceSelects/Select/Select';
import { getSessionProgress } from 'entities/Session';
import { instructionsActions } from 'widgets/Instructions';
import { exampleActions } from 'entities/Example';
import { sessionParamsActions, getParamsGameMode } from 'entities/SessionParams';

const instructionsObject: Record<string, string> = {
    'Спринт': 'Решайте примеры, пока они не закончатся',
    'Стандарт': 'Решайте примеры, пока идет время',
    'Голод': 'Решайте примеры, увеличивая время раунда',
};

export const ChangeMods = memo(() => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const ModsList = ['Спринт', 'Стандарт', 'Голод'];
    const currentMode = useSelector(getParamsGameMode);

    function changeGameModeInSession(mode: string) {
        if (!sessionProgress) {
            dispatch(sessionParamsActions.changeGameMode(mode));
            dispatch(instructionsActions.setInstruction(instructionsObject[mode]));
            dispatch(exampleActions.generateSeed());
        }
    }

    return (
        <div className={style.containerMods}>
            {ModsList.map((mode) => (

                <Select
                    isMods
                    key={mode}
                    isActive={mode === currentMode}
                    callback={() => changeGameModeInSession(mode)}
                >
                    {mode}
                </Select>

            ))}
        </div>
    );
});
