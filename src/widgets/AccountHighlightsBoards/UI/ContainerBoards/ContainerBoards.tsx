import React from 'react';
import style from './ContainerBoards.module.css';
import { HighlightsBoards } from '../HighlightBoards/HighlightsBoards';

export interface HighlightsBoardParams {
    title: string,
    value_1: string,
    value_2: number,
}

export const ContainerBoards = () => {
    
    const timeHighlightsBoardsData: HighlightsBoardParams[] = [
        {
            title: '15 секунд',
            value_1: '4',
            value_2: 0.26,
        },
        {
            title: '30 секунд',
            value_1: '6',
            value_2: 0.2,
        },
        {
            title: '60 секунд',
            value_1: '10',
            value_2: 0.16,
        },
    ];

    const numberHighlightsBoardsData: HighlightsBoardParams[] = [
        {
            title: '10 примеров',
            value_1: '0:13',
            value_2: 0.76,
        },
        {
            title: '15 примеров',
            value_1: '0:45',
            value_2: 0.33,
        },
        {
            title: '20 примеров',
            value_1: '1:10',
            value_2: 0.28,
        },
    ];
    
    return (
        <div className={style.containerBoards}>
            <HighlightsBoards dataList={timeHighlightsBoardsData} />
            <HighlightsBoards dataList={numberHighlightsBoardsData} />
        </div>
    );
};
