import React, { useState } from 'react';
import style from './HighlightsBoards.module.css';
import { HighlightsBoard } from '../../model/slice/types';
import { classNames } from 'shared/lib/classNames/classNames';

interface HighlightsBoardsProps {
    dataList?: HighlightsBoard[]
    description?: string
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

export const HighlightsBoards = ({ dataList = defaultProps, description }: HighlightsBoardsProps) => {
    
    const [isFocus, setIsFocus] = useState(false);
    const [deleteAnimationFlag, setDeleteAnimationFlag] = useState(false);
    
    const onMouseEnterHandle = () => {
        setIsFocus(true);
    };
    
    const onMouseLeaveHandle = () => {
        setDeleteAnimationFlag(true);
        setTimeout(() => { setIsFocus(false); setDeleteAnimationFlag(false); }, 100);
    };
    
    return (
        <div 
            className={style.highlightContainer}
            onMouseEnter={onMouseEnterHandle}
            onMouseLeave={onMouseLeaveHandle}
        >
            {isFocus && (
                <span
                    title="Примеров в секунду"
                    className={classNames(style.epsDescription, {
                        [style.descriptionFocus]: isFocus,
                        [style.descriptionBlur]: deleteAnimationFlag,
                    })}
                >
                    ПВС
                </span>
            )}
            {isFocus && description && (
                <span className={classNames(style.descriptionProps, {
                    [style.descriptionFocus]: isFocus,
                    [style.descriptionBlur]: deleteAnimationFlag,
                })}
                >
                    {description}
                </span>
            )}
            {dataList.map((element) => (
                <div className={style.columnContainer} key={element.title}>
                    <span className={style.title}>{element.title}</span>
                    <span className={style.eps}>{element.eps}</span>
                    <span className={style.additionalParameter}>{element.additionalParameter}</span>
                </div>
            ))}
        </div>

    );

};
