import seedrandom from 'seedrandom';

const generateRandomColor = (seed: string, index: number, isMono: boolean = false) => {
    
    const letters = isMono ? '00000000000000' : '0123456789ABCDEF';
    const rng = seedrandom(seed + index);
    let color = '#';

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(rng() * 16)];
    }
    return color;
};

export const useGenerateAvatar = (seed: string, isMono: boolean = false) => {

    const userSeed = seed || String(Math.random());
    const avatarSquares = Array.from(
        { length: 145 },
        (_, index) => generateRandomColor(userSeed, index, isMono),
    );
    
    return {
        userSeed,
        avatarSquares,
    };
};
