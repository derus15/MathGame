import React, { FC } from 'react';

export const MainContainerDecorator = (Story: FC) => (
    <div className="mainContainer">
        <Story />
    </div>
);
