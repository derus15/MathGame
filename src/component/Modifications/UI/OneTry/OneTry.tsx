import React from 'react';
import style from './OneTry.module.css';
import OneIcon from '/public/assets/oneIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'helpers/classNames/classNames';
import { modificationsActions } from '../../model/slice/modificationsSlice';
import { getModificationsList } from 'component/Modifications/model/selectors/getModificationsList';
import { getSessionProgress } from 'component/Session';

export const OneTry = () => {
    
    const dispatch = useDispatch();
    const modsList = useSelector(getModificationsList);
    const sessionProgress = useSelector(getSessionProgress);
    const isActive = modsList.includes('one');
    
    const changeMod = () => {
        if (!sessionProgress) {
            dispatch(modificationsActions.changeModifications('one'));
        }
    };

    return (
        <div>
            <OneIcon
                className={classNames(style.modifications, { [style.svgModeActive]: isActive })}
                onClick={changeMod}
            />
        </div>
    );
};
