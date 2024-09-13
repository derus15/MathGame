import seedrandom from 'seedrandom';
import { useEffect, useState } from 'react';
import { useSaveUserAvatarMutation } from '../api/saveUserAvatar';

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

export const useGenerateAvatar = (seed: string, isMono = false) => {

    const [avatarSquares, setAvatarSquares] = useState([]);
    const [saveUserAvatar] = useSaveUserAvatarMutation();

    useEffect(() => {
        let userSeed = seed;

        if (seed === 'none') {
            userSeed = String(Math.random());
            saveUserAvatar({ seed: userSeed });
        }

        const squares = Array.from(
            { length: 145 },
            (_, index) => generateRandomColor(userSeed, index, isMono),
        );

        setAvatarSquares(squares);

    }, [seed, isMono, saveUserAvatar]);

    return avatarSquares;
};
