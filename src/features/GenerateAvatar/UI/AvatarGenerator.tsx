import React from 'react';
import style from './AvatarGenerator.module.css';
import { useGenerateAvatar } from '../hooks/useGenerateAvatarSeed';

interface AvatarGeneratorProps {
    seed: string;
}

export const AvatarGenerator = ({ seed = 'mmmmmjmm' }: AvatarGeneratorProps) => {

    const { avatarSquares, userSeed } = useGenerateAvatar(seed, true);

    return (
        <div className={style.avatarCircle}>
            {avatarSquares.map((color, index) => (
                <div key={index} className={style.square} style={{ backgroundColor: color }} />
            ))}
        </div>
    );
};
