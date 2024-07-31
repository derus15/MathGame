import { useSelector } from 'react-redux';
import { getPreviousSessionData } from '../selectors/getPreviousSessionData';
import { useGetSessionData } from 'entities/SessionData';

export const useCalculateComparison = () => {

    const previousSessionData = useSelector(getPreviousSessionData);
    const currentSessionData = useGetSessionData();
    const { time: currentTime, number: currentNumber, eps: currentEps } = currentSessionData;
    const { time: previousTime, number: previousNumber, eps: previousEps } = previousSessionData;

    const formatWithSign = (value: number) => (value > 0 ? `+ ${value}` : `- ${Math.abs(value)}`);

    const pointsDiff = currentNumber - previousNumber;
    const timeDiff = currentTime - previousTime;
    const epsDiff = Number((Number(currentEps) - Number(previousEps)).toFixed(2));

    return [formatWithSign(pointsDiff), formatWithSign(timeDiff), formatWithSign(epsDiff)];
    
};
