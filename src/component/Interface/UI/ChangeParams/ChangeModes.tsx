import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import { interfaceActions } from '../../model/slice/interfaceSlice';
import { StateSchema } from '../../../../redux/types';
import Select from '../InterfaceSelects/Select/Select';
import { getGameMod } from '../../model/selectors/getGameMod';
import { getSignsList } from '../../model/selectors/getSignsList';
import { exampleActions } from '../../../../redux/Slices/frontSlices/example/exampleSlice';

const ChangeModes = () => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);
    const signList = useSelector(getSignsList);
    const mode = useSelector(getGameMod);

    function changeGameModeInSession(mode: string) {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeGameMode(mode));
            dispatch(exampleActions.generateNumber(2));
            dispatch(exampleActions.generateSign(signList));
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
