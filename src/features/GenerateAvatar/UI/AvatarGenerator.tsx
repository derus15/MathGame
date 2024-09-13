import React from 'react';
import style from './AvatarGenerator.module.css';
import { useGenerateAvatar } from '../hooks/useGenerateAvatar';

interface AvatarGeneratorProps {
    seed: string;
}

export const AvatarGenerator = ({ seed }: AvatarGeneratorProps) => {
  
    const avatarSquares = useGenerateAvatar(seed, true) || [];

    return (
        <div className={style.avatarCircle}>
            {avatarSquares.map((color, index) => (
                <div key={index} className={style.square} style={{ backgroundColor: color }} />
            ))}
        </div>
    );
};
