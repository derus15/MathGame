import { Meta, StoryObj } from '@storybook/react';
import 'app/styles/Themes.css';
import 'app/styles/App.css';
import { Circle } from './Circle';
import { DemoWithThemes } from '../../../../config/storybook/Decorators/DemoWithThemes';

const meta = {
    title: 'shared/Circle',
    component: Circle,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
        },
        docs: {
            description: {
                component: 'Базовый компонент карточки в виде круга. '
                    + 'Отображет информацию на обеих сторонах, поворачивается при наведении ',
            },
        },
    },
    tags: ['autodocs'],
    args: {},

} satisfies Meta<typeof Circle>;

type Story = StoryObj<typeof meta>;

export const Themes: Story = {
    decorators: [
        (Story) => DemoWithThemes(Story),
    ],
    args: {
        info: 'Info',
        className: '',
    },
};

export default meta;
