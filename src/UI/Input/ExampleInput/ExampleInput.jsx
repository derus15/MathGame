import React, { useEffect, useState } from 'react';
import style from './ExampleInput.module.css';

const ExampleInput = ({ sessionProgress, signal = null, ...props }) => {

    const [inputColor, setInputColor] = useState('');

    const checkNumber = (e) => {
        const value = e.target.value;
        const isNumber = /^[0-9]+$/.test(value);
        if (!isNumber) {
            e.target.value = '';
        }
    };

    const changeInputColor = () => {

        if (sessionProgress) {
            setInputColor('#0FBE26');

            setTimeout(() => {
                setInputColor('');
            }, 800);

        }
    };

    useEffect(() => {
        changeInputColor();
    }, [signal]);


    return (
        <div>
            <input
                onChange={(e) => {
                    checkNumber(e);
                }}
                className={(style.npt)}
                style={{ borderBottomColor: inputColor }}
                {...props}
            />
        </div>
    );
};

export default ExampleInput;
