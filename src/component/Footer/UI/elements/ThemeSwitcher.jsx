import React, { useState, useEffect } from 'react';
import style from '../Footer.module.css';
import { OutlineButton } from 'UI/Button/OutlineButton/OutlineButton';

const ThemeSwitcher = () => {
    const themesList = ['black', 'ocean', 'PP'];
    const [themeIndex, setThemeIndex] = useState(localStorage.getItem('theme') || 1);

    function showTheme() {
        const body = document.querySelector('body');
        const nextIndex = (themeIndex + 1) % themesList.length;
        setThemeIndex(nextIndex);
        localStorage.setItem('theme', nextIndex);
        body.setAttribute('datatheme', themesList[nextIndex]);
    }

    useEffect(() => {
        const body = document.querySelector('body');
        body.setAttribute('datatheme', themesList[themeIndex]);
    }, [themeIndex]);

    const themeObj = {
        'black': 'Темная',
        'PP': 'PP',
        'ocean': 'Ocean',
    };

    return (
        <OutlineButton
            onClick={showTheme}
            className={style.extra}
        >
            {themeObj[themesList[themeIndex]]}
        </OutlineButton>
    );
};

export default ThemeSwitcher;
