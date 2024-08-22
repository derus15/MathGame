/* eslint-disable react/function-component-definition */
import React, { FC } from 'react';
import { ThemeList } from 'features/ThemeSwitcher';

export const ThemeDecorator = (theme: ThemeList) => (Story: FC) => (
    <div data-theme={theme}>
        <Story />
    </div>
);
