import { Dispatch, SetStateAction } from 'react';
import { SignList } from '../../app/types/config';

// eslint-disable-next-line no-unused-vars
const signFunction:Record<SignList, (a: number, b: number) => number> = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
};

interface normalizationExampleProps {
    numbersList: number[],
    sign: SignList,
    setAnswer: Dispatch<SetStateAction<string>>
}

function normalizationExample(props: normalizationExampleProps) {

    const {
        numbersList,
        sign,
        setAnswer,
    } = props;
    
    let [num_1, num_2] = numbersList;
    
    if ((sign === '-') && (num_1 < num_2)) {
        [num_1, num_2] = [num_2, num_1];

    } else if (sign === '/') {

        if (num_1 === 0) {
            num_1 += 1;
        }

        if (num_1 > 10 && num_1 < 100) {
            num_2 = Math.floor(num_2 / 10) + 1;
        }

        num_1 *= num_2; // (num_1 * num_2) / num_2 = num_1
        // nums = [1, 30];
        // (30 * 1) / 30 = 30 / 30 = 1
    }

    const answerExample = String(signFunction[sign](num_1, num_2));
    setAnswer(answerExample);

    return (`${num_1} ${sign} ${num_2} =`);
}

export default normalizationExample;
