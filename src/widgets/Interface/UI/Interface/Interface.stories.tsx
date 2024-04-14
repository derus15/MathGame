import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '../../../../../config/storybook/Decorators/ThemeDecorator';
import 'app/styles/Themes.css';
import 'app/styles/App.css';
import { StoreDecorator } from '../../../../../config/storybook/Decorators/StoreDecorator';
import { Interface } from 'widgets/Interface';

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
