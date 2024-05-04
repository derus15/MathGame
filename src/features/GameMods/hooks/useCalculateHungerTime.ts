import { SignList } from 'app/types/config';

export const useCalculateHungerTime = (answer: string, sign: SignList) => {

    const hardDifficultSigns = ['*', '/'];

    if (hardDifficultSigns.includes(sign) && answer.length > 2) {
        
        return 4;
        
    }

    if (hardDifficultSigns.includes(sign) && answer.length <= 2 && answer !== '0') {
        
        return 3;
        
    } 
        
    return 2;
    
};
