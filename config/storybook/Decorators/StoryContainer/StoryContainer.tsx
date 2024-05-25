import React, { FC } from 'react';
// @ts-ignore
import style from './StoryContainer.module.css';

export const FlexContainerDecorator = (Story: FC) => (
    <div className={style.container}>
        <Story />
    </div>
);
