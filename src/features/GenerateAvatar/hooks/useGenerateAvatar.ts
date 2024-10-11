import seedrandom from 'seedrandom';

const generateRandomColor = (seed: string, index: number) => {
    const rng = seedrandom(seed + index);
    const randomNumber = Math.round(rng());

    return randomNumber === 0 ? '#000000' : '#FFFFFF';
};

export const useGenerateAvatar = (seed: string) => Array.from(
    { length: 145 },
    (_, index) => generateRandomColor(seed, index),
);
