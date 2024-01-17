import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import { interfaceActions } from '../../model/slice/interfaceSlice';
import { StateSchema } from '../../../../redux/types';
import Select from '../InterfaceSelects/Select/Select';
import { getGameMod } from '../../model/selectors/getGameMod';
import { useRefreshExample } from 'component/Example';

const ChangeModes = () => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);
    const mode = useSelector(getGameMod);
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
                params="Спринт"
            >
                Спринт
            </Select>
            <Select
                globalState={mode}
                callback={() => changeGameModeInSession('Стандарт')}
                params="Стандарт"
            >
                Стандарт
            </Select>
            <Select globalState={mode}>Скоро...</Select>
        </div>
    );
};

export default ChangeModes;
