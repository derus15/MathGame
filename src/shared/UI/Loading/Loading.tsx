import React, { useEffect, useState } from 'react';
import style from './Loading.module.css';

export const Loading = () => {

    const [content, setContent] = useState('');
    const listOfContent = '1 + 2 = 3';
    let currenPosition = 0;

    useEffect(() => {

        const interval = setInterval(() => {
            const currentChar = listOfContent[currenPosition];
            setContent((prevContent) => prevContent + currentChar);
            currenPosition += 1;
            if (currenPosition === listOfContent.length + 1) {
                setContent('');
                currenPosition = 0;
            }

        }, 150);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={style.content}>
            {content}
            <span className={style.cursor}>|</span>
        </div>
    );
};
