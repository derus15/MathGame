import React, { useEffect, useState } from 'react';
import ExampleInput from 'shared/UI/Input/ExampleInput/ExampleInput';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { exampleActions } from 'entities/Example';
import { isDecodeBase64 } from 'shared/lib/decodeBase64/isDecodeBase64';
import { isSeedIncludesSign } from 'shared/lib/decodeBase64/isSeedIncludesSign';
import { instructionsActions } from 'widgets/Instructions';
import { debounce } from 'shared/lib/debounce/debounceFunction';
import style from './PersonalSeed.module.css';
import SeedIcon from '../../../../public/assets/seedIcon.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { getSessionProgress } from 'entities/Session';

export const PersonalSeed = () => {

    const [inputWidth, setInputWidth] = useState(0);
    const [borderWidth, setBorderWidth] = useState(0);
    const [isVisibleInput, setIsVisibleInput] = useState(false);
    const sessionProgress = useSelector(getSessionProgress);
    const dispatch = useDispatch();

    const openInputMode = () => {
        setIsVisibleInput(true);
        dispatch(instructionsActions.setInstruction('Задайте собственный сид сессии'));
    };

    useEffect(() => {
        if (isVisibleInput) {
            setInputWidth(150);
            setBorderWidth(1);
        }
    }, [isVisibleInput]);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        
        if (sessionProgress) {
            setInputWidth(0);
            setBorderWidth(0);
        }
        
        setTimeout(() => {
            setIsVisibleInput(false);
        }, 250);
        
        return () => {
            clearTimeout(timeout);
        };
    }, [sessionProgress]);
    
    const validateSeedInput = debounce((e: React.ChangeEvent<HTMLInputElement>) => {

        const seed = e.target.value;
        const isDot = seed.includes('.');
        
        if (isDot) {

            const [encodedPart] = seed.split('.');
            const decodedPart = isDecodeBase64(encodedPart);

            if (!isSeedIncludesSign(decodedPart)) {
                toast.error('Некорректный сид');
            } else {
                dispatch(exampleActions.setSeed(seed));
            }
        }
    });

    return (
        <div className={style.seedContainer}>
            {isVisibleInput 
                && <ExampleInput
                    onInput={(e) => validateSeedInput(e)}
                    className={style.seedInput}
                    style={{
                        width: `${inputWidth}px`,
                        borderBottom: `${borderWidth}px solid var(--base-color)`,
                    }}
                />}
            <OutlineButton onClick={openInputMode} className={style.seedButton}>
                <SeedIcon className={
                    classNames(style.seedIcon, { [style.seedIconActive]: isVisibleInput })
                }
                />
            </OutlineButton>
        </div>
    );
};
