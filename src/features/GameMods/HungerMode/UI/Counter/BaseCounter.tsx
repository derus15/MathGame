import { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface BaseCounterProps {
    incrementArg: number;
    targetArg: number;
    mark: string;
    callback: () => void;
    className?: string;
}

export const BaseCounter = ({ incrementArg, targetArg, callback, mark, className }: BaseCounterProps) => {

    useEffect(() => {
        if (incrementArg >= targetArg) {
            callback();
        }
    }, [incrementArg]);
    
    return (
        <div className={classNames('', {}, [className])}>{incrementArg} {mark} {targetArg}</div>
    );

};
