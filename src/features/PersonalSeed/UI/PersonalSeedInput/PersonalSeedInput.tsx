import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import { LineInput } from 'shared/UI/Input/LineInput/LineInput';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './PersonalSeedInput.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getSessionProgress } from 'entities/Session';
import { instructionsActions } from 'widgets/Instructions';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';
import SeedIcon from '../../../../../public/assets/seed.svg';
import { getIsPersonalSeed } from 'entities/Example';

export const PersonalSeedInput = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {

    const [isAnimateInput, setIsAnimateInput] = useState(false);
    const [isVisibleInput, setIsVisibleInput] = useState(false);

    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const isPersonalSeed = useSelector(getIsPersonalSeed);

    const openInputMode = () => {

        if (!sessionProgress) {
            setIsVisibleInput(true);

            setTimeout(() => {
                setIsAnimateInput(true);
            }, 0);
        }
        dispatch(instructionsActions.setInstruction('Задайте собственный сид сессии'));
    };

    const closeInputMode = () => {

        if (isVisibleInput) {
            setIsAnimateInput(false);

            setTimeout(() => {
                setIsVisibleInput(false);
            }, 250);

        }
    };

    useEffect(() => {
        closeInputMode();
    }, [sessionProgress]);
    
    return (
        <>
            {isVisibleInput && <LineInput
                onBlur={closeInputMode}
                className={classNames(style.seedInput, { [style.seedInputActive]: isAnimateInput })}
                {...props}
            />}
            <OutlineButton onClick={openInputMode} className={style.seedButton}>
                <SeedIcon className={
                    classNames(style.seedIcon, { [style.seedIconActive]: isPersonalSeed })
                }
                />
            </OutlineButton>
        </>

    );
};
