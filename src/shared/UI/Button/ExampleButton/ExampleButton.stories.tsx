import { Meta, StoryObj } from '@storybook/react';
import { ExampleButton } from 'shared/UI/Button/ExampleButton/ExampleButton';
import React from 'react';
import 'app/styles/Themes.css';
import 'app/styles/App.css';

const meta = {
    title: 'shared/Button/ExampleButton',
    component: ExampleButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof ExampleButton>;

type Story = StoryObj<typeof meta>;

export const Ocean: Story = {
    decorators: [
        (Story) => (
            // @ts-ignore
            // eslint-disable-next-line react/no-unknown-property
            <div datatheme="ocean">
                <Story />
            </div>
        ),
    ],
    args: {
        children: 'Хорошо',
        random: false,
    },
};

export const Black: Story = {
    decorators: [
        (Story) => (
            // @ts-ignore
            // eslint-disable-next-line react/no-unknown-property
            <div datatheme="black">
                <Story />
            </div>
        ),
    ],
    args: {
        children: 'Хорошо',
        random: false,
    },
};

export const PP: Story = {
    decorators: [
        (Story) => (
            // @ts-ignore
            // eslint-disable-next-line react/no-unknown-property
            <div datatheme="PP">
                <Story />
            </div>
        ),
    ],
    args: {
        children: 'Хорошо',
        random: false,
    },
};

export const Chemodan: Story = {
    decorators: [
        (Story) => (
            // @ts-ignore
            // eslint-disable-next-line react/no-unknown-property
            <div datatheme="chemodan">
                <Story />
            </div>
        ),
    ],
    args: {
        children: 'Хорошо',
        random: false,
    },
};

export default meta;
