import React, { useCallback, useEffect, useState } from 'react';
import { exampleActions, getIsPersonalSeed } from 'entities/Example';
import style from './PersonalSeed.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { PersonalSeedInput } from './PersonalSeedInput/PersonalSeedInput';
import { debounce } from 'shared/lib/debounce/debounceFunction';

export const PersonalSeed = () => {

    const dispatch = useDispatch();
    const isPersonalSeed = useSelector(getIsPersonalSeed);

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (!isPersonalSeed) {
            setInputValue('');
        }
    }, [isPersonalSeed]);

    const validateSeedInput = useCallback(debounce((seed: string) => {

        if (seed.trim() === '') {
            dispatch(exampleActions.resetIsPersonalSeed());
            dispatch(exampleActions.generateSeed());
            return;
        }

        dispatch(exampleActions.setSeed(seed));
        dispatch(exampleActions.setIsPersonalSeed());

    }), []);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const seed = e.target.value;
        setInputValue(seed);
        validateSeedInput(seed);
    };

    return (
        <div className={style.seedContainer}>
            <PersonalSeedInput
                onInput={(e:React.ChangeEvent<HTMLInputElement>) => {
                    handleChangeInput(e);
                }}
                value={inputValue}
                maxLength={30}
                autoFocus
            />
        </div>
    );
};
