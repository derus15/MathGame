import React from 'react';
import { useDispatch } from 'react-redux';
import classes from '../Interface.module.css';
import { changeGameMode } from '../../../redux/Slices/frontSlices/interfaceSlice';
import SelectMod from '../../../UI/InterfaceSelects/SelectMod/SelectMod';

function ChangeModes({ sessionProgress }) {
    const dispatch = useDispatch();

    function changeGameModeInSession(mode) {
        if (!sessionProgress) {
            dispatch(changeGameMode(mode));
        }
    }

    return (
        <div className={classes.containerModes}>
            <SelectMod
                mode="Спринт"
                onClick={() => changeGameModeInSession('Спринт')}
            >
                Спринт
            </SelectMod>
            <SelectMod
                mode="Стандарт"
                onClick={() => changeGameModeInSession('Стандарт')}
            >
                Стандарт
            </SelectMod>
            <SelectMod>Скоро...</SelectMod>
        </div>
    );
}

export default ChangeModes;
