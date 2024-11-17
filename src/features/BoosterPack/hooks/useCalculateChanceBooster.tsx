import { useDispatch, useSelector } from 'react-redux';
import { getSessionPoints, getSessionTimeSeconds } from 'entities/SessionData';
import { getModificationsList } from 'features/Modifications';
import { getExampleSignList } from 'entities/Example';
import { boosterPackActions } from 'features/BoosterPack';

export const useCalculateChanceBooster = () => {
    
    const baseChance = 10;
    const baseMultiplier = 1.08;
    const maxChance = 60;

    const sessionTime = useSelector(getSessionTimeSeconds) / 10;
    const sessionNumber = useSelector(getSessionPoints) / 10;
    const unexpectedEnd = 1;

    const sessionModifications = useSelector(getModificationsList).includes('one') ? 1.5 : 1;
    const sign = useSelector(getExampleSignList);
    const sessionSign = sign.includes('*') || sign.includes('/') ? 2.0
        : sign.some((el) => ['-', '+'].includes(el)) ? 1.5 : 1.75;

    const chance = (baseChance * baseMultiplier ** (sessionTime
            * sessionModifications + sessionNumber + sessionSign) * unexpectedEnd);

    const resultChance = Math.min(chance, maxChance);
    const dispatch = useDispatch();
    
    const calculateBoosterPackChance = () => {

        const randomNumber = Math.random() * 100;
        const isAvailablePack = randomNumber <= resultChance;
        if (isAvailablePack) dispatch(boosterPackActions.incrementBoosterCount());
        return isAvailablePack;
        
    };

    return { calculateBoosterPackChance };
};
