import React from 'react';
import style from './OneTry.module.css';
import OneIcon from '/public/assets/oneTry.svg';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { modificationsActions } from '../../model/slice/modificationsSlice';
import { getModificationsList } from 'features/Modifications/model/selectors/getModificationsList';
import { getSessionProgress } from 'entities/Session';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';
import { instructionsActions } from 'widgets/Instructions';

export const OneTry = () => {
    
    const dispatch = useDispatch();
    const modsList = useSelector(getModificationsList);
    const sessionProgress = useSelector(getSessionProgress);
    const isActive = modsList.includes('one');
    
    const changeMod = () => {
        if (!sessionProgress) {
            dispatch(modificationsActions.changeModifications('one'));
            dispatch(instructionsActions.setInstruction(
                'Режим одной ошибки: в случае ошибки сессия закончится',
            ));
        }
    };

    return (
        <OutlineButton
            className={style.modificationsButton}
            onClick={changeMod}
        >
            <OneIcon
                className={classNames(style.modifications, { [style.svgModeActive]: isActive })}
            />
        </OutlineButton>
    );
};
