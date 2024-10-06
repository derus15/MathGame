import React, { useState, useEffect } from 'react';
import style from '../../../widgets/Footer/UI/Footer.module.css';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';

export type ThemeList = 'black' | 'PP' | 'ocean' | 'chemodan' | 'norton' | 'matrix';

export const ThemeSwitcher = () => {

    const themesList: ThemeList[] = ['black', 'ocean', 'PP', 'chemodan', 'norton', 'matrix'];
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
            className={style.element}
        >
            {themesList[themeIndex]}
        </OutlineButton>
    );
};
