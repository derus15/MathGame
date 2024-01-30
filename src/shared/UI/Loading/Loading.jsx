import React, { useEffect, useState } from 'react';
import style from './Loading.module.css';

const Loading = () => {

    const [content, setContent] = useState('');
    const listOfContent = '1 + 2 = 3';
    let counter = 0;
    let interval;

    const animation = () => {

        interval = setInterval(() => {
            const currentChar = listOfContent[counter];
            setContent((prevContent) => prevContent + currentChar);
            counter += 1;
            if (counter === listOfContent.length + 1) {
                setContent('');
                counter = 0;
            }

        }, [150]);

    };

    useEffect(() => {
        animation();
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

export default Loading;
