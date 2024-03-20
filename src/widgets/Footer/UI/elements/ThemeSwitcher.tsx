import React, { useState, useEffect } from 'react';
import style from '../Footer.module.css';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';
import { ThemeList } from 'app/types/config';

const ThemeSwitcher = () => {

    const themesList: ThemeList[] = ['black', 'ocean', 'PP', 'chemodan'];
    const [themeIndex, setThemeIndex] = useState(() => {
        const savedThemeIndex = localStorage.getItem('theme');
        return savedThemeIndex ? Number(savedThemeIndex) : 1;
    });

    function changeTheme() {
        const nextIndex = (themeIndex + 1) % themesList.length;
        setThemeIndex(nextIndex);
    }

    useEffect(() => {

        const body = document.querySelector('body');
        const deprecatedAttribute = body.getAttribute('datatheme');
        localStorage.setItem('theme', JSON.stringify(themeIndex));

        if (deprecatedAttribute) {
            body.removeAttribute('datatheme');
        }

        body.setAttribute('data-theme', themesList[themeIndex]);

    }, [themeIndex]);

    return (
        <OutlineButton
            onClick={changeTheme}
            className={style.extra}
        >
            {themesList[themeIndex]}
        </OutlineButton>
    );
};

export default ThemeSwitcher;
