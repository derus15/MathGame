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
                <div className={style.column}>
                    <span className={style.title}>{element.title}</span>
                    <div className={style.infoContainer}>
                        <span>{element.value_1}</span>
                        <span>{element.value_2}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};
