import React from 'react';
import style from './GenerateAvatar.module.css';
import { useGenerateAvatarSeed } from '../hooks/useGenerateAvatarSeed';

interface AvatarGeneratorProps {
    seed: string;
}

export const AvatarGenerator = ({ seed = 'mmmmmjmm' }: AvatarGeneratorProps) => {

    const squares = useGenerateAvatarSeed(seed, true);

    return (
        <div className={style.avatarCircle}>
            {squares.map((color, index) => (
                <div key={index} className={style.square} style={{ backgroundColor: color }} />
            ))}
        </div>
    );
};
