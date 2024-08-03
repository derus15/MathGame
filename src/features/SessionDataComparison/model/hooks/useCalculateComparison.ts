import { useSelector } from 'react-redux';
import { getPreviousSessionData } from '../selectors/getPreviousSessionData';
import { useGetSessionData } from 'entities/SessionData';
import { timeNormalization } from 'shared/lib/timeNormalization/timeNormalization';

export const useCalculateComparison = () => {

    const previousSessionData = useSelector(getPreviousSessionData);
    const currentSessionData = useGetSessionData();
    const { time: currentTime, number: currentNumber, eps: currentEps } = currentSessionData;
    const { time: previousTime, number: previousNumber, eps: previousEps } = previousSessionData;
    
    const formatWithSign = (value: string, signCondition: boolean) => {
        if (signCondition) {
            return `+ ${value}`;
        }
        return `- ${value}`;
    };

    const pointsDiff = String(Math.abs(currentNumber - previousNumber));
    const timeDiff = timeNormalization(Math.abs(currentTime - previousTime), false);
    const epsDiff = String(Math.abs(Number(currentEps) - Number(previousEps)).toFixed(2));

    return [
        formatWithSign(pointsDiff, currentNumber > previousNumber),
        formatWithSign(timeDiff, currentTime > previousTime),
        formatWithSign(epsDiff, currentEps > previousEps),
    ];

};
