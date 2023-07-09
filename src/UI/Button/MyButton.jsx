import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({ children, ...props }) => {

    let textList = ['Хорошо', 'Ладно', 'Понятно', 'Прекрасно'];
    let text = textList[Math.floor(Math.random() * textList.length)];

    return (
        <div>
            <button className={classes.btn} {...props}>{text}</button>
        </div>
    );
};

export default MyButton;