import { SignList } from 'app/types/config';

// eslint-disable-next-line no-unused-vars
const signFunction:Record<SignList, (a: number, b: number) => number> = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
};

interface normalizationExampleProps {
    signList: SignList[],
    numberForTest?: number[],
}

const generateExample = (props: normalizationExampleProps) => {

    const {
        signList,
        numberForTest = [],
    } = props;

    let num_1 = numberForTest[0] ?? Math.floor(Math.random() * 100);
    let num_2 = numberForTest[1] ?? Math.floor(Math.random() * 100);

    const randomIndex = Math.floor(Math.random() * signList.length);
    const sign = signList[randomIndex];

    if (num_1 === 0) {
        num_1 += 1;
    }

    if ((sign === '-') && (num_1 < num_2)) {

        [num_1, num_2] = [num_2, num_1];

    } else if (sign === '/') {
        
        if (num_2 === 0) {
            num_2 += 1;
        }

        num_1 *= num_2;
    }

    const answerExample = String(signFunction[sign](num_1, num_2));
    const example = `${num_1} ${sign} ${num_2} =`;

    return { example, answer: answerExample, sign };
};

export default generateExample;
