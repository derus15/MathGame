import seedrandom from 'seedrandom';

const generateRandomColor = (seed: string, index: number, isMono: boolean = false) => {
    
    const letters = isMono ? '000000000000000' : '0123456789ABCDEF';
    const rng = seedrandom(seed + index);
    let color = '#';

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(rng() * 16)];
    }
    return color;
};

export const useGenerateAvatarSeed = (seed: string, isMono: boolean = false) => (
    Array.from({ length: 145 }, (_, index) => generateRandomColor(seed, index, isMono))
);
