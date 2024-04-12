import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import { interfaceActions } from '../../model/slice/interfaceSlice';
import Select from '../InterfaceSelects/Select/Select';
import { getInterfaceGameMode } from '../../model/selectors/getInterfaceGameMode';
import { useRefreshExample } from 'entities/Example';
import { getSessionProgress } from 'entities/Session';

const ChangeMods = () => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const mode = useSelector(getInterfaceGameMode);
    const { refreshExample } = useRefreshExample();

    function changeGameModeInSession(mode: string) {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeGameMode(mode));
            refreshExample();
        }
    }

    return (
        <div className={style.containerModes}>
            <Select
                globalState={mode}
                callback={() => changeGameModeInSession('Спринт')}
                currentState="Спринт"
            >
                Спринт
            </Select>
            <Select
                globalState={mode}
                callback={() => changeGameModeInSession('Стандарт')}
                currentState="Стандарт"
            >
                Стандарт
            </Select>
            <Select globalState={mode}>Скоро...</Select>
        </div>
    );
};

export default memo(ChangeMods);
