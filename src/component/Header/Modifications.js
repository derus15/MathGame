import React from 'react';
import style from './Header.module.css';
import OneIcon from '/public/assets/oneIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changeModifications } from '../../redux/Slices/frontSlices/interfaceSlice';

const Modifications = () => {
    
    const dispatch = useDispatch();
    const active = useSelector((state) => state.interface.modifications);

    const changeMod = () => {
        dispatch(changeModifications('one'));
    };
    
    return (
        <div>
            {active 
                ? <OneIcon className={style.svgModeOff} onClick={changeMod} />
                : <OneIcon className={style.svgModeOn} onClick={changeMod} />}
        </div>
    );
};

export default Modifications;
