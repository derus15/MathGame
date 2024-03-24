import React from 'react';
import style from './ContainerBoards.module.css';
import { HighlightsBoards } from '../HighlightBoards/HighlightsBoards';

export interface HighlightsBoardParams {
    title: string,
    eps: string,
    additionalParameter: string,
}

export const ContainerBoards = () => {
    
    const timeHighlightsBoardsFakeData: HighlightsBoardParams[] = [
        {
            title: '0:15',
            eps: '0.26',
            additionalParameter: '4',
        },
        {
            title: '0:30',
            eps: '0.20',
            additionalParameter: '6',
        },
        {
            title: '1:00',
            eps: '0.16',
            additionalParameter: '10',
        },
    ];

    const numberHighlightsBoardsFakeData: HighlightsBoardParams[] = [
        {
            title: '10',
            eps: '0.66',
            additionalParameter: '0:15',
        },
        {
            title: '15',
            eps: '0.33',
            additionalParameter: '0:45',
        },
        {
            title: '20',
            eps: '0.28',
            additionalParameter: '1:10',
        },
    ];
    
    return (
        <div className={style.containerBoards}>
            <HighlightsBoards dataList={timeHighlightsBoardsFakeData} />
            <HighlightsBoards dataList={numberHighlightsBoardsFakeData} />
        </div>
    );
};
