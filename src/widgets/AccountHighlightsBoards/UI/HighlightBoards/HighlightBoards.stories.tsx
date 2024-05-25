import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '../../../../../config/storybook/Decorators/ThemeDecorator';
import 'app/styles/Themes.css';
import { HighlightsBoards } from './HighlightsBoards';
import { 
    FlexContainerDecorator,
} from '../../../../../config/storybook/Decorators/StoryContainer/StoryContainer';

const meta = {
    title: 'widgets/HighlightBoards',
    component: HighlightsBoards,
    parameters: {
        backgrounds: {
            default: 'dark',
        },
        layout: 'centered',
        docs: {
            description: {
                component: 'Компонент личного кабинета для представления результатов лучших сессий',
            },
        },
    },
    tags: ['autodocs'],
    args: {
        label: 'Режим игры',
        description: '',
    },

} satisfies Meta<typeof HighlightsBoards>;

type Story = StoryObj<typeof meta>;

export const Ocean: Story = {
    decorators: 
        [
            (Story) => FlexContainerDecorator(Story),
            ThemeDecorator('ocean'),
        ],
};

export const Black: Story = {
    decorators: 
        [
            (Story) => FlexContainerDecorator(Story),
            ThemeDecorator('black'),
        ],
};

export const PP: Story = {
    decorators: 
        [
            (Story) => FlexContainerDecorator(Story),
            ThemeDecorator('PP'),
        ],
};

export const Chemodan: Story = {
    decorators: 
        [
            (Story) => FlexContainerDecorator(Story),
            ThemeDecorator('chemodan'),
        ],
};

export const Norton: Story = {
    decorators:
        [
            (Story) => FlexContainerDecorator(Story),
            ThemeDecorator('norton'),
        ],
};

export default meta;
