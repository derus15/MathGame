import React from 'react';
import style from '../Header/Header.module.css';
import OneIcon from '/public/assets/oneIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '../../helpers/classNames/classNames';
import { interfaceActions } from '../../redux/Slices/frontSlices/interface/interfaceSlice';
import { StateSchema } from '../../redux/types';

const Modifications = () => {
    
    const dispatch = useDispatch();
    const active = useSelector((state: StateSchema) => state.interface.modifications);
    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);

    const changeMod = () => {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeModifications('one'));
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
