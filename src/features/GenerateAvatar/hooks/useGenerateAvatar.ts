import seedrandom from 'seedrandom';
import { useEffect, useState } from 'react';
import { useSaveUserAvatarMutation } from '../api/saveUserAvatar';

const generateRandomColor = (seed: string, index: number) => {
    const rng = seedrandom(seed + index);
    const randomNumber = Math.round(rng());

    return randomNumber === 0 ? '#000000' : '#FFFFFF';
};

const generateSeed = () => {
    const randomString = Math.random().toString(36).substring(2, 15);
    return btoa(randomString);
};

export const useGenerateAvatar = (seed: string) => {

    const [avatarSquares, setAvatarSquares] = useState([]);
    const [saveUserAvatar] = useSaveUserAvatarMutation();

    useEffect(() => {
        let userSeed = seed;

        if (seed === 'none') {
            userSeed = generateSeed();
            saveUserAvatar({ seed: userSeed });
        }

        const squares = Array.from(
            { length: 145 },
            (_, index) => generateRandomColor(userSeed, index),
        );

        setAvatarSquares(squares);

    }, [seed, saveUserAvatar]);

    return avatarSquares;
};
