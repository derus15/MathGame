import { Meta, StoryObj } from '@storybook/react';
import ExampleInput from 'shared/UI/Input/ExampleInput/ExampleInput';
import 'app/styles/Themes.css';
import 'app/styles/App.css';
import { StoreDecorator } from '../../../../../config/storybook/Decorators/StoreDecorator';
import { fn } from '@storybook/test';
import { DemoWithThemes } from '../../../../../config/storybook/Decorators/DemoWithThemes';

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
        signal: 'answer',
        onlyNumber: true,
    },

} satisfies Meta<typeof ExampleInput>;

type Story = StoryObj<typeof meta>;

export const Themes: Story = {
    decorators: [
        (Story) => StoreDecorator(Story),
        (Story) => DemoWithThemes(Story),
    ],
};

export default meta;
