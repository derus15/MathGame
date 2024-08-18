import seedrandom from 'seedrandom';
import { Sign } from 'app/types/config';

// eslint-disable-next-line no-unused-vars
const signFunction:Record<Sign, (a: number, b: number) => number> = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
};

interface generateExampleProps {
    signList?: Sign[],
    seed?: string,
    iteration?: number,
}

const generateSignList = (seed: string): Sign[] => {

    const randomSignList: Sign[] = [];
    const defaultSignList: Sign[] = ['+', '-', '*', '/'];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < defaultSignList.length; i++) {

        const rng = seedrandom(`${seed}${i}`);
        const random = rng();

        if (random >= 0.5) {
            randomSignList.push(defaultSignList[i]);
        }
    }

    return randomSignList.length > 0 ? randomSignList : defaultSignList;
};

const decodeSeedSignList = (seed: string): Sign[] => {

    try {

        const [encodeSignList] = seed.split('.');
        const decoded = atob(encodeSignList);
        const signList = decoded.split('')
            .filter((char): char is Sign => ['+', '-', '*', '/'].includes(char));

        return signList.length > 0 ? signList : generateSignList(seed);

    } catch {

        return generateSignList(seed);
    }
};

const incrementSeed = (seed: string, iteration: number) => `${seed}${iteration}`;

const generateExample = ({ seed, iteration }: generateExampleProps) => {

    const incrementedSeed = incrementSeed(seed, iteration);
    const rng = seedrandom(incrementedSeed);
    const signList = decodeSeedSignList(seed);

    let num_1 = Math.floor(rng() * 100);
    let num_2 = Math.floor(rng() * 100);

    const randomIndex = Math.floor(rng() * signList.length);
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

    return { example, answer: answerExample, sign, seed: incrementedSeed, signList };
};

export default generateExample;
