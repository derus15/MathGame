import { Meta, StoryObj } from '@storybook/react';
import { ExampleButton } from 'shared/UI/Button/ExampleButton/ExampleButton';
import { ThemeDecorator } from '../../../../../config/storybook/Decorators/ThemeDecorator';
import 'app/styles/Themes.css';
import 'app/styles/App.css';

const meta = {
    title: 'shared/Button/ExampleButton',
    component: ExampleButton,
    parameters: {
        backgrounds: {
            default: 'dark',
        },
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        children: 'Хорошо',
        random: false,
    },

} satisfies Meta<typeof ExampleButton>;

type Story = StoryObj<typeof meta>;

export const Ocean: Story = {
    decorators: [ThemeDecorator('ocean')],
    args: {},
};

export const Black: Story = {
    decorators: [ThemeDecorator('black')],
    args: {},
};

export const PP: Story = {
    decorators: [ThemeDecorator('PP')],
    args: {},
};

export const Chemodan: Story = {
    decorators: [ThemeDecorator('chemodan')],
    args: {},
};

export default meta;
