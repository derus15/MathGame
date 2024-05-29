import { Meta, StoryObj } from '@storybook/react';
import { ExampleButton } from 'shared/UI/Button/ExampleButton/ExampleButton';
import { ThemeDecorator } from '../../../../../config/storybook/Decorators/ThemeDecorator';
import 'app/styles/Themes.css';
import 'app/styles/App.css';
import { DemoWithThemes } from '../../../../../config/storybook/Decorators/DemoWithThemes';

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

export const Themes: Story = {
    decorators: [
        (Story) => DemoWithThemes(Story),
    ],
};

export default meta;
