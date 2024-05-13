import { useEffect } from 'react';

interface BaseCounterProps {
    incrementArg: number;
    targetArg: number;
    mark: string;
    callback: () => void,
}

export const BaseCounter = ({ incrementArg, targetArg, callback, mark }: BaseCounterProps) => {

    useEffect(() => {
        if (incrementArg >= targetArg) {
            callback();
        }
    }, [incrementArg]);
    
    return (
        <div>{incrementArg} {mark} {targetArg}</div>
    );

};
