import React from 'react';
import style from './ContainerBoards.module.css';
import { HighlightsBoards } from '../HighlightBoards/HighlightsBoards';
import { useGetHighlightBoardQuery } from 'widgets/AccountHighlightsBoards/api/accountHighlightBoardApi';

export const ContainerBoards = () => {

    const { data: highlightsBoards } = useGetHighlightBoardQuery();
    
    return (
        <div className={style.containerBoards}>
            <HighlightsBoards highlightBoardValue={highlightsBoards.timeBoard} label="Стандарт" />
            <HighlightsBoards highlightBoardValue={highlightsBoards.numberBoard} label="Спринт" />
        </div>
    );
};
