import React from 'react';

const Theme = ({changeTheme}) => {

    const themesList = ['Темная', 'PP'];
    const theme = localStorage.getItem('theme');

    return (
        <div>
            <div onClick={() => {changeTheme(themesList)}} className={'extra'}>{theme}</div>
        </div>
    );
};

export default Theme;