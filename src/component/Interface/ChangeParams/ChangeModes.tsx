import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../Interface.module.css';
import { interfaceActions } from '../../../redux/Slices/frontSlices/interface/interfaceSlice';
import SelectMod from '../../../UI/InterfaceSelects/SelectMod/SelectMod';
import { StateSchema } from '../../../redux/types';

const ChangeModes = () => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);

    function changeGameModeInSession(mode: string) {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeGameMode(mode));
        }
    }

    return (
        <div className={classes.containerModes}>
            <SelectMod mode="Спринт" callback={() => changeGameModeInSession('Спринт')}>
                Спринт
            </SelectMod>
            <SelectMod mode="Стандарт" callback={() => changeGameModeInSession('Стандарт')}>
                Стандарт
            </SelectMod>
            <SelectMod>Скоро...</SelectMod>
        </div>
    );
};

export default ChangeModes;
