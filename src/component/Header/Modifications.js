import React from 'react';
import style from './Header.module.css';
import OneIcon from '/public/assets/oneIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changeModifications } from '../../redux/Slices/frontSlices/interfaceSlice';
import { classNames } from '../../helpers/classNames/classNames';

const Modifications = () => {
    
    const dispatch = useDispatch();
    const active = useSelector((state) => state.interface.modifications);
    const sessionProgress = useSelector((state) => state.activities.sessionProgress);

    const changeMod = () => {
        if (!sessionProgress) {
            dispatch(changeModifications('one'));
        }
    };

    return (
        <div>
            <OneIcon
                className={classNames(style.modifications, { [style.svgModeActive]: active })}
                onClick={changeMod}
            />
        </div>
    );
};

export default Modifications;
