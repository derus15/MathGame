import React, { useState } from 'react';
import ExampleInput from 'shared/UI/Input/ExampleInput/ExampleInput';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';

export const PersonalSeed = () => {

    const [inputWidth, setInputWidth] = useState(0);
    const [borderWidth, setBorderWidth] = useState(0);
    
    const setSeed = () => {
        setInputWidth(150);
        setBorderWidth(1);
    };
    
    return (
        <div style={{ marginTop: '8px' }}>
            <ExampleInput style={{
                width: `${inputWidth}px`,
                borderBottom: `${borderWidth}px solid var(--base-color)`,
                transitionDuration: '.250s',
                fontSize: '16px',
            }}
            />
            <OutlineButton onClick={setSeed} style={{ color: 'var(--base-color)', fontSize: '20px' }}>
                Seed
            </OutlineButton>
        </div>
    );
};
