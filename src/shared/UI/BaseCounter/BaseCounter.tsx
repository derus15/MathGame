import { useEffect } from 'react';

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
        <div className={className}>{incrementArg} {mark} {targetArg}</div>
    );

};
