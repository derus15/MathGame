import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '../../../../../config/storybook/Decorators/ThemeDecorator';
import 'app/styles/Themes.css';
import 'app/styles/App.css';
import { StoreDecorator } from '../../../../../config/storybook/Decorators/StoreDecorator';
import { Interface } from 'widgets/Interface';
import { DemoWithThemes } from '../../../../../config/storybook/Decorators/DemoWithThemes';

const meta = {
    title: 'widgets/Interface',
    component: Interface,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
        },
        docs: {
            description: {
                component: 'Специфичный компонент для настройки параметров сессии',
            },
        },
    },
    tags: ['autodocs'],

} satisfies Meta<typeof Interface>;

type Story = StoryObj<typeof meta>;

export const Themes: Story = {
    decorators: [
        (Story) => StoreDecorator(Story),
        (Story) => DemoWithThemes(Story),
    ],
};

export default meta;
