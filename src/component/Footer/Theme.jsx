import React from 'react';

const Theme = ({changeTheme, theme}) => {

    const themesList = ['Темная', 'PP']

    return (
        <div>
            <div onClick={() => {changeTheme(themesList)}} className={'extra'}>{theme}</div>
        </div>
    );
};

export default Theme;