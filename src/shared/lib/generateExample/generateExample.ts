import seedrandom from 'seedrandom';
import { SignList } from 'app/types/config';

// eslint-disable-next-line no-unused-vars
const signFunction:Record<string, (a: number, b: number) => number> = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
};

interface generateExampleProps {
    signList?: SignList[],
    seed?: string,
    iteration?: number,
}

const decodeSeedSignList = (seed: string) => {

    const [encodeSignList] = seed.split('.');
    const signList = atob(encodeSignList);
    const decodeSignList: string[] = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const sign of signList) {
        decodeSignList.push(sign);
    }

    return decodeSignList;
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
