import React, { useEffect } from 'react';
import style from './HighlightsBoards.module.css';
import { HighlightsBoardParams } from '../ContainerBoards/ContainerBoards';

interface HighlightsBoardsProps {
    dataList?: HighlightsBoardParams[]
}

export const HighlightsBoards = ({ dataList }: HighlightsBoardsProps) => {

    useEffect(() => {

    }, []);

    return (
        <div className={style.highlightContainer}>
            {dataList.map((element) => (
                <div className={style.columnContainer}>
                    <span className={style.title}>{element.title}</span>
                    <span className={style.eps}>{element.eps}</span>
                    <span className={style.additionalParameter}>{element.additionalParameter}</span>
                </div>
            ))}
        </div>
    );
};
