import { Sign } from 'app/types/config';

export const useCalculateHungerTime = (answer: string, sign: Sign) => {

    const hardDifficultSigns = ['*', '/'];

    if (hardDifficultSigns.includes(sign) && answer.length > 2) {

        return 4;

        // eslint-disable-next-line
    } else if (hardDifficultSigns.includes(sign) && answer.length <= 2 && answer !== '0') {

        return 3;

    }

    return 2;

};
