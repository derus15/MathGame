import React from 'react';
import style from './HighlightsBoards.module.css';
import { HighlightsBoard } from '../../model/types/types';

interface HighlightsBoardsProps {
    highlightBoardValue?: HighlightsBoard[]
    description?: string
    label?: string
}

const defaultPlaceholder = '—';

export const HighlightsBoards = (
    { highlightBoardValue, description, label }: HighlightsBoardsProps,
) => {

    const normalizeBoard: HighlightsBoard[] = highlightBoardValue.map(
        ({ title, eps, additionalParameter }) => ({
            title: title || defaultPlaceholder,
            eps: eps || defaultPlaceholder,
            additionalParameter: additionalParameter || defaultPlaceholder,
        }),
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
            {normalizeBoard.map(({ title, eps, additionalParameter }) => (
                <div className={style.columnContainer} key={title}>
                    <span className={style.title}>{title}</span>
                    <span className={style.eps}>{eps}</span>
                    <span className={style.additionalParameter}>{additionalParameter}</span>
                </div>
            ))}
        </div>
    );
};
