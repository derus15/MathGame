import React, { useEffect, useState } from 'react';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';
import { useDispatch, useSelector } from 'react-redux';
import { exampleActions, getIsPersonalSeed } from 'entities/Example';
import { instructionsActions } from 'widgets/Instructions';
import { debounce } from 'shared/lib/debounce/debounceFunction';
import style from './PersonalSeed.module.css';
import SeedIcon from '../../../../public/assets/seed.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { getSessionProgress } from 'entities/Session';
import { LineInput } from 'shared/UI/Input/LineInput/LineInput';

export const PersonalSeed = () => {

    const dispatch = useDispatch();
    const [isAnimateInput, setIsAnimateInput] = useState(false);
    const [isVisibleInput, setIsVisibleInput] = useState(false);

    const isActive = useSelector(getIsPersonalSeed);
    const sessionProgress = useSelector(getSessionProgress);

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

    const validateSeedInput = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        
        const seed = e.target.value;
        
        if (seed.trim() === '') {
            return null;
        }

        dispatch(exampleActions.setSeed(seed));
        dispatch(exampleActions.setIsPersonalSeed());

    }, 1000);

    return (
        <div className={style.seedContainer}>
            {isVisibleInput 
                && <LineInput
                    maxLength={30}
                    onInput={(e: any) => validateSeedInput(e)}
                    onBlur={closeInputMode}
                    autoFocus
                    className={classNames(style.seedInput, { [style.seedInputActive]: isAnimateInput })}
                />}
            <OutlineButton onClick={openInputMode} className={style.seedButton}>
                <SeedIcon className={
                    classNames(style.seedIcon, { [style.seedIconActive]: isActive })
                }
                />
            </OutlineButton>
        </div>
    );
};
