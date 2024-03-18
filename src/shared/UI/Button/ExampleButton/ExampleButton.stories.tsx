import { Meta, StoryObj } from '@storybook/react';
import { ExampleButton } from 'shared/UI/Button/ExampleButton/ExampleButton';
import { themeDecorator } from '../../../../../config/storybook/Decorators/themeDecorator';
import 'app/styles/Themes.css';
import 'app/styles/App.css';

const meta = {
    title: 'shared/Button/ExampleButton',
    component: ExampleButton,
    parameters: {
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
    decorators: [themeDecorator('ocean')],
    args: {},
};

export const Black: Story = {
    decorators: [themeDecorator('black')],
    args: {},
};

export const PP: Story = {
    decorators: [themeDecorator('PP')],
    args: {},
};

export const Chemodan: Story = {
    decorators: [themeDecorator('chemodan')],
    args: {},
};

export default meta;
