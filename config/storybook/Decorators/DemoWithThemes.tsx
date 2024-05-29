import React, { FC } from 'react';

const themes = ['ocean', 'black', 'PP', 'chemodan', 'norton'];

export const DemoWithThemes = (Story: FC) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {themes.map((theme) => (
            <div key={theme} style={{ display: 'flex', alignItems: 'center', marginTop: '32px' }}>
                <div style={{ fontSize: '22px', color: 'white', width: '150px' }}>{theme}</div>
                <div data-theme={theme}>
                    <Story />
                </div>
            </div>
        ))}
    </div>
);
