import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../Interface.module.css';
import { changeGameMode } from '../../../redux/Slices/frontSlices/interfaceSlice';
import SelectMod from '../../../UI/InterfaceSelects/SelectMod/SelectMod';

const ChangeModes = () => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector((state) => state.activities.sessionProgress);

    function changeGameModeInSession(mode) {
        if (!sessionProgress) {
            dispatch(changeGameMode(mode));
        }
    }

    return (
        <div className={classes.containerModes}>
            <SelectMod mode="Спринт" onClick={() => changeGameModeInSession('Спринт')}>
                Спринт
            </SelectMod>
            <SelectMod mode="Стандарт" onClick={() => changeGameModeInSession('Стандарт')}>
                Стандарт
            </SelectMod>
            <SelectMod>Скоро...</SelectMod>
        </div>
    );
};

export default ChangeModes;
