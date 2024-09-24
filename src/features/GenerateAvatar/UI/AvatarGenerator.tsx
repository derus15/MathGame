import React from 'react';
import style from './AvatarGenerator.module.css';
import { useGenerateAvatar } from '../hooks/useGenerateAvatar';
import { classNames } from 'shared/lib/classNames/classNames';

interface AvatarGeneratorProps {
    seed: string;
    isInvertColor?: boolean;
}

export const AvatarGenerator = ({ seed, isInvertColor }: AvatarGeneratorProps) => {
  
    const avatarSquares = useGenerateAvatar(seed) || [];

    return (
        <div className={classNames(style.avatarCircle, { [style.isInvert]: isInvertColor })}>
            {avatarSquares.map((color, index) => (
                <div key={index} className={style.square} style={{ backgroundColor: color }} />
            ))}
        </div>
    );
};
