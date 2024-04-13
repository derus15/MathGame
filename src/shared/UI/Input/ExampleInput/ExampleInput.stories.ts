import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '../../../../../config/storybook/Decorators/ThemeDecorator';
import ExampleInput from 'shared/UI/Input/ExampleInput/ExampleInput';
import 'app/styles/Themes.css';
import 'app/styles/App.css';
import { StoreDecorator } from '../../../../../config/storybook/Decorators/StoreDecorator';
import { fn } from '@storybook/test';

const meta = {
    title: 'shared/Input/ExampleInput',
    component: ExampleInput,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
        },
        docs: {
            description: {
                component: 'Специфический Input компонент. Вызывает колбэк при фокусировке(focus). '
                    + 'Пропускает на ввод исключительно цифры(onlyNumber). '
                    + 'Можно сфокусироваться с помощью кнопки "Space" ',
            },
        },
    },
    tags: ['autodocs'],
    args: {
        focus: fn(),
        onInput: fn(),
        signalAnswer: 'answer',
        onlyNumber: true,
    },

} satisfies Meta<typeof ExampleInput>;

type Story = StoryObj<typeof meta>;

export const Black: Story = {
    decorators: [
        (Story) => StoreDecorator(Story),
        ThemeDecorator('black'),
    ],
};

export const PP: Story = {
    decorators: [
        (Story) => StoreDecorator(Story),
        ThemeDecorator('PP'),
    ],
};

export const Ocean: Story = {
    decorators: [
        (Story) => StoreDecorator(Story),
        ThemeDecorator('ocean'),
    ],
};

export const Chemodan: Story = {
    decorators: [
        (Story) => StoreDecorator(Story),
        ThemeDecorator('chemodan'),
    ],
};

export default meta;
