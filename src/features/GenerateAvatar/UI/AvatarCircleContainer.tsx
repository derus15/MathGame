import React, { useEffect, useState } from 'react';
import style from 'widgets/AccountUserInfo/UI/AccountUserInfo.module.css';
import { Circle } from 'shared/UI/Circle/Circle';
import { AvatarGenerator } from '../UI/AvatarGenerator/AvatarGenerator';
import { useSaveUserAvatarMutation } from '../api/saveUserAvatar';

interface AvatarCircleContainerProps {
    seed: string;
}

const generateSeed = () => {
    const randomString = Math.random().toString(36).substring(2, 15);
    return btoa(randomString);
};

export const AvatarCircleContainer = ({ seed }: AvatarCircleContainerProps) => {

    const [saveUserAvatar] = useSaveUserAvatarMutation();
    const [avatarSeed, setAvatarSeed] = useState<string>(() => (seed !== 'none' ? seed : generateSeed()));

    useEffect(() => {
        if (seed === 'none') {
            saveUserAvatar({ seed: avatarSeed });
        }
    }, []);

    return (
        <Circle
            className={style.circleAvatar}
            front={<AvatarGenerator seed={avatarSeed} />}
            back={<AvatarGenerator seed={avatarSeed} isInvertColor />}
        />
    );
};
