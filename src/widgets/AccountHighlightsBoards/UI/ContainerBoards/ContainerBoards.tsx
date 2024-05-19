import React from 'react';
import style from './ContainerBoards.module.css';
import { HighlightsBoards } from '../HighlightBoards/HighlightsBoards';
import { useSelector } from 'react-redux';
import { getTimeBoard } from '../../model/selectors/getTimeBoard';
import { getNumberBoard } from '../../model/selectors/getNumberBoard';

export const ContainerBoards = () => {

    const timeBoardList = useSelector(getTimeBoard);
    const numberBoardList = useSelector(getNumberBoard);
    
    return (
        <div className={style.containerBoards}>
            <HighlightsBoards dataList={timeBoardList} label="Стандарт" />
            <HighlightsBoards dataList={numberBoardList} label="Спринт" />
        </div>
    );
};
