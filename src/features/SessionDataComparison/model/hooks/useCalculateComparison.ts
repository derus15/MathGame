import { useSelector } from 'react-redux';
import { getPreviousSessionData } from '../selectors/getPreviousSessionData';
import { useGetSessionData } from 'entities/SessionData';
import { timeNormalization } from 'shared/lib/timeNormalization/timeNormalization';
import { getInterfaceGameMode } from 'widgets/Interface';

interface ComparisonObject {
    value: string,
    isBetter: boolean,
}

export const useCalculateComparison = () => {

    const previousSessionData = useSelector(getPreviousSessionData);
    const currentSessionData = useGetSessionData();
    const isHunger = useSelector(getInterfaceGameMode) === 'Голод';
    const {
        time: currentTime,
        number: currentNumber,
        eps: currentEps,
        rounds: currentRounds,
    } = currentSessionData;
    const { 
        time: previousTime, 
        number: previousNumber, 
        eps: previousEps,
        rounds: previousRounds,
    } = previousSessionData;

    const pointsDiff = String(Math.abs(currentNumber - previousNumber));
    const timeDiff = timeNormalization(Math.abs(currentTime - previousTime), false);
    const roundsDiff = String(Math.abs(currentRounds - previousRounds));
    const epsDiff = String(Math.abs(Number(currentEps) - Number(previousEps)).toFixed(2));

    const createComparisonObject = (
        value: string,
        signCondition: boolean,
        reverseValue: boolean = false,
    ): ComparisonObject => ({
        value: signCondition ? `+ ${value}` : `- ${value}`,
        isBetter: reverseValue ? !signCondition : signCondition,
    });

    return [
        createComparisonObject(pointsDiff, currentNumber >= previousNumber),
        isHunger ? createComparisonObject(roundsDiff, currentRounds >= previousRounds) : null,
        createComparisonObject(timeDiff, currentTime >= previousTime, true),
        createComparisonObject(epsDiff, currentEps >= previousEps),
    ].filter(Boolean);

};
