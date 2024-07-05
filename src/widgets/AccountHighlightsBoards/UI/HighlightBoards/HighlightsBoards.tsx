import React from 'react';
import style from './HighlightsBoards.module.css';
import { HighlightsBoard } from '../../model/types/types';

interface HighlightsBoardsProps {
    highlightBoardValue?: HighlightsBoard[]
    description?: string
    label?: string
}

const defaultPlaceholder = {
    title: '—',
    eps: '—',
    additionalParameter: '—',
};

export const HighlightsBoards = (
    { highlightBoardValue, description, label }: HighlightsBoardsProps,
) => {

    const normalizeBoard = highlightBoardValue.concat(
        Array(3 - highlightBoardValue.length).fill(defaultPlaceholder),
    );

    return (
        <div className={style.highlightContainer}>
            <span title="Примеров в секунду" className={style.epsDescription}>
                ПВС
            </span>
            <span className={style.gameModeTitle}>
                {label}
            </span>
            {description && (
                <span className={style.descriptionProps}>
                    {description}
                </span>
            )}
            {normalizeBoard.map((element) => (
                <div className={style.columnContainer} key={element.title}>
                    <span className={style.title}>{element.title}</span>
                    <span className={style.eps}>{element.eps}</span>
                    <span className={style.additionalParameter}>{element.additionalParameter}</span>
                </div>
            ))}
        </div>
    );
};
