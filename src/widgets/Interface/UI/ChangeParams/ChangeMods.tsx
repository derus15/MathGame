import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import { interfaceActions } from '../../model/slice/interfaceSlice';
import Select from '../InterfaceSelects/Select/Select';
import { getInterfaceGameMode } from '../../model/selectors/getInterfaceGameMode';
import { getSessionProgress } from 'entities/Session';
import { instructionsActions } from 'widgets/Instructions';
import { exampleActions } from 'entities/Example';

const instructionsObject: Record<string, string> = {
    'Спринт': 'Решайте примеры, пока они не кончатся',
    'Стандарт': 'Решайте примеры, пока идет время',
    'Голод': 'Решайте примеры, увеличивая время раунда',
};

export const ChangeMods = memo(() => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const ModsList = ['Спринт', 'Стандарт', 'Голод'];
    const currentMode = useSelector(getInterfaceGameMode);

    function changeGameModeInSession(mode: string) {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeGameMode(mode));
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
