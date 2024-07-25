import { Meta, StoryObj } from '@storybook/react';
import 'app/styles/Themes.css';
import 'app/styles/App.css';
import { DemoWithThemes } from '../../../../../config/storybook/Decorators/DemoWithThemes';
import { LineInput } from 'shared/UI/Input/LineInput/LineInput';

const meta = {
    title: 'shared/Input/LineInput',
    component: LineInput,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
        },
        docs: {
            description: {
                component: 'Базовый Input компонент. '
                    + 'Используется как заготовка для специфичных компонентов',
            },
        },
    },
    tags: ['autodocs'],
    args: {},

} satisfies Meta<typeof LineInput>;

type Story = StoryObj<typeof meta>;

export const Themes: Story = {
    decorators: [
        (Story) => DemoWithThemes(Story),
    ],
    args: {
        className: '',
    },
};

export default meta;
