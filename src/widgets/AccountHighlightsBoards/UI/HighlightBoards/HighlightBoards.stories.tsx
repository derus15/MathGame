import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '../../../../../config/storybook/Decorators/ThemeDecorator';
import 'app/styles/Themes.css';
import { HighlightsBoards } from './HighlightsBoards';
import { 
    FlexContainerDecorator,
} from '../../../../../config/storybook/Decorators/StoryContainer/StoryContainer';
import { DemoWithThemes } from '../../../../../config/storybook/Decorators/DemoWithThemes';

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

} satisfies Meta<typeof HighlightsBoards>;

type Story = StoryObj<typeof meta>;

export const WithData: Story = {
    decorators:
        [
            (Story) => FlexContainerDecorator(Story),
            ThemeDecorator('ocean'),
        ],
    args: {
        label: 'Спринт',
        description: '',
        highlightBoardValue: [
            {
                title: '10',
                eps: '1.00',
                additionalParameter: '00:10',
            },
            {
                title: '15',
                eps: '0.83',
                additionalParameter: '00:18',
            },
            {
                title: '20',
                eps: '1.00',
                additionalParameter: '00:20',
            },
        ],
    },
};

export const Themes: Story = {
    decorators: 
        [
            (Story) => FlexContainerDecorator(Story),
            (Story) => DemoWithThemes(Story),
        ],
    args: {
        label: 'Режим игры',
        description: '',
    },
};

export default meta;
