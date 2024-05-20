import React, { useState } from 'react';
import style from './HighlightsBoards.module.css';
import { HighlightsBoard } from '../../model/types/types';
import { classNames } from 'shared/lib/classNames/classNames';

interface HighlightsBoardsProps {
    highlightBoardValue?: HighlightsBoard[]
    description?: string
    label?: string
}

const defaultProps: HighlightsBoard[] = [{
    title: '—',
    eps: '—',
    additionalParameter: '—', 
}, 
{
    title: '—',
    eps: '—',
    additionalParameter: '—', 
}, 
{
    title: '—',
    eps: '—',
    additionalParameter: '—', 
}];

const defaultPlaceholder = {
    title: '—',
    eps: '—',
    additionalParameter: '—',
};

export const HighlightsBoards = (
    { highlightBoardValue = defaultProps, description, label }: HighlightsBoardsProps,
) => {

    const [isVisible, setIsVisible] = useState(false);
    const [deleteAnimationFlagDescription, setDeleteAnimationFlagDescription] = useState(false);
    const [deleteAnimationFlagLabels, setDeleteAnimationFlagLabels] = useState(false);

    const normalizeBoard = highlightBoardValue.concat(
        Array(3 - highlightBoardValue.length).fill(defaultPlaceholder),
    );
    
    const onMouseEnterHandle = () => {
        setIsVisible(true);
    };

    const onMouseLeaveHandle = () => {
        setDeleteAnimationFlagDescription(true);
        setDeleteAnimationFlagLabels(true);

        setTimeout(() => {
            setDeleteAnimationFlagLabels(false);
        }, 250);

        setTimeout(() => {
            setDeleteAnimationFlagDescription(false);
            setIsVisible(false);
        }, 125);

    };

    return (
        <div
            className={style.highlightContainer}
            onMouseEnter={onMouseEnterHandle}
            onMouseLeave={onMouseLeaveHandle}
        >
            {isVisible && (
                <>
                    <span
                        title="Примеров в секунду"
                        className={classNames(style.epsDescription, {
                            [style.descriptionFocus]: !deleteAnimationFlagDescription,
                            [style.descriptionBlur]: deleteAnimationFlagDescription,
                        })}
                    >
                        ПВС
                    </span>
                    <span
                        className={classNames(style.gameModeTitle, {
                            [style.gameModeTitleFocus]: !deleteAnimationFlagLabels,
                            [style.gameModeTitleBlur]: deleteAnimationFlagLabels,
                        })}
                    >
                        {label}
                    </span>
                </>
            )}
            {isVisible && description && (
                <span className={classNames(style.descriptionProps, {
                    [style.descriptionFocus]: isVisible,
                    [style.descriptionBlur]: deleteAnimationFlagDescription,
                })}
                >
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
