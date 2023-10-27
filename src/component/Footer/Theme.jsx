import React, { useState, useEffect } from 'react';

function Theme() {
    const themesList = ['black', 'ocean', 'PP'];
    const [themeIndex, setThemeIndex] = useState(localStorage.getItem('theme') || 0);

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
        black: 'Темная',
        PP: 'PP',
        ocean: 'Ocean',
    };

    return (
        <div>
            <div onClick={showTheme} className="extra">{themeObj[themesList[themeIndex]]}</div>
        </div>
    );
}

export default Theme;
