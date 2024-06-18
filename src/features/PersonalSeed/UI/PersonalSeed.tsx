import React, { useState } from 'react';
import ExampleInput from 'shared/UI/Input/ExampleInput/ExampleInput';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { exampleActions } from 'entities/Example';
import { isDecodeBase64 } from 'shared/lib/decodeBase64/isDecodeBase64';
import { isSeedIncludesSign } from 'shared/lib/decodeBase64/isSeedIncludesSign';
import { instructionsActions } from 'widgets/Instructions';
import { debounce } from 'shared/lib/debounce/debounceFunction';

export const PersonalSeed = () => {

    const [inputWidth, setInputWidth] = useState(0);
    const [borderWidth, setBorderWidth] = useState(0);
    const dispatch = useDispatch();

    const openInputMode = () => {
        setInputWidth(150);
        setBorderWidth(1);
        dispatch(instructionsActions.setInstruction('Задайте собственный сид сессии'));
    };
    
    const validateSeedInput = debounce((e: React.ChangeEvent<HTMLInputElement>) => {

        const seed = e.target.value;
        const isDot = seed.includes('.');
        
        if (isDot) {

            const [encodedPart] = seed.split('.');
            const decodedPart = isDecodeBase64(encodedPart);

            console.log(decodedPart);

            if (!isSeedIncludesSign(decodedPart)) {
                toast.error('Некорректный сид');
            } else {
                dispatch(exampleActions.setSeed(seed));
            }
        }
    });

    return (
        <div style={{ marginTop: '8px' }}>
            <ExampleInput 
                onInput={(e) => validateSeedInput(e)}
                style={{
                    width: `${inputWidth}px`,
                    borderBottom: `${borderWidth}px solid var(--base-color)`,
                    transitionDuration: '.250s',
                    fontSize: '16px',
                }}
                          
            />
            <OutlineButton onClick={openInputMode} style={{ color: 'var(--base-color)', fontSize: '20px' }}>
                Seed
            </OutlineButton>
        </div>
    );
};
