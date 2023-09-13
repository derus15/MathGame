import React, { useState } from 'react';
import Tooltip from '../../UI/Tooltip/Tooltip';

const Theme = () => {

    //    function changeTheme(themesList) {
    //       const currentIndex = themesList.findIndex(new_theme => new_theme === theme);
    //       const nextIndex = (currentIndex + 1) % themesList.length;
    //       setTheme(themesList[nextIndex]);
    //       localStorage.setItem('theme', themesList[nextIndex]);
    //     }

    const [tooltipTheme, setTooltipTheme] = useState(false);
    const style = {
        bottom: '45px',
        left: '1070px',
        backgroundColor: 'white',
    };

    function showTheme() {
        setTooltipTheme(true);
    }

    return (
        <div>
            <div onClick={showTheme} className={'extra'}>Темная</div>
            {tooltipTheme &&
                <Tooltip
                    style={style}
                    setShow={setTooltipTheme}
                    condition={tooltipTheme}
                    depend={showTheme}>
                    Ведутся технические работы
                </Tooltip>
            }
        </div>
    );
};

export default Theme;