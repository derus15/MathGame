import React, { FC } from 'react';
import { ThemeList } from 'app/types/config';

export const ThemeDecorator = (theme: ThemeList) => (Story: FC) => (
    // @ts-ignore
    // eslint-disable-next-line react/no-unknown-property
    <div datatheme={theme}>
        <Story />
    </div>
);
