import React from 'react';
import style from './OneTry.module.css';
import OneIcon from '/public/assets/oneIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { modificationsActions } from '../../model/slice/modificationsSlice';
import { getModificationsList } from 'features/Modifications/model/selectors/getModificationsList';
import { getSessionProgress } from 'entities/Session';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';

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
        <OutlineButton className={style.modificationsButton}>
            <OneIcon
                className={classNames(style.modifications, { [style.svgModeActive]: isActive })}
                onClick={changeMod}
            />
        </OutlineButton>
    );
};
