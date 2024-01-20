import React, { useState, useEffect } from 'react';
import style from '../Footer.module.css';
import { OutlineButton } from 'UI/Button/OutlineButton/OutlineButton';

const ThemeSwitcher = () => {

    const themesList = ['black', 'ocean', 'PP', 'chemodan'];
    const [themeIndex, setThemeIndex] = useState(() => {
        const savedThemeIndex = localStorage.getItem('theme');
        return savedThemeIndex ? Number(savedThemeIndex) : 1;
    });

    function changeTheme() {
        const nextIndex = (themeIndex + 1) % themesList.length;
        setThemeIndex(nextIndex);
    }

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(themeIndex));
        const body = document.querySelector('body');
        body.setAttribute('datatheme', themesList[themeIndex]);
    }, [themeIndex]);

    return (
        <OutlineButton
            onClick={changeTheme}
            className={style.extra}
        >
            {[themesList[themeIndex]]}
        </OutlineButton>
    );
};

export default ThemeSwitcher;
