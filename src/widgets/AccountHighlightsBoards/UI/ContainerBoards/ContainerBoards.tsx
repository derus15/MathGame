import React from 'react';
import style from './ContainerBoards.module.css';
import { HighlightsBoards } from '../HighlightBoards/HighlightsBoards';
import { useGetHighlightBoardQuery } from '../../api/accountHighlightBoardApi';

export const ContainerBoards = () => {

    const { data: highlightsBoards } = useGetHighlightBoardQuery();
    const boards = [
        { id: 'time', value: highlightsBoards.timeBoard, label: 'Стандарт' },
        { id: 'number', value: highlightsBoards.numberBoard, label: 'Спринт' },
    ];
    
    return (
        <div className={style.containerBoards}>
            {boards.map((board) => (
                <HighlightsBoards
                    highlightBoardValue={board.value}
                    label={board.label}
                    key={board.label}
                />
            ))}
        </div>
    );
};
