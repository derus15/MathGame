import React, { FC } from 'react';
import { ThemeList } from 'app/types/config';

export const ThemeDecorator = (theme: ThemeList) => (Story: FC) => (
    <div data-theme={theme}>
        <Story />
    </div>
);
