import React from 'react';
import classes from '../Interface.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeGameMode } from '../../../redux/Slices/interfaceSlice';

const ChangeModes = ({ sessionProgress }) => {

    const gameMode = useSelector(state => state.interface.mode);
    const dispatch = useDispatch();

    function changeGameModeInSession(mode) {
        if (!sessionProgress) {
            dispatch(changeGameMode(mode));
        }
    }

    function getClassName(id) {
        if (gameMode === id) {
            return `${classes.modes} ${classes.modesActive}`;
        }
        return `${classes.modes}`;
    }

    return (
        <div className={classes.containerModes}>
            <div className={getClassName('Спринт')} onClick={() => changeGameModeInSession('Спринт')}>Спринт</div>
            <div className={getClassName('Стандарт')} onClick={() => changeGameModeInSession('Стандарт')}>Стандарт</div>
            <div className={classes.modes}>Скоро...</div>
        </div>
    );
};

export default ChangeModes;