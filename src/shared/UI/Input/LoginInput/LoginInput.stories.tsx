import { Meta, StoryObj } from '@storybook/react';
import 'app/styles/Themes.css';
import 'app/styles/App.css';
import { StoreDecorator } from '../../../../../config/storybook/Decorators/StoreDecorator';
import { DemoWithThemes } from '../../../../../config/storybook/Decorators/DemoWithThemes';
import LoginInput from 'shared/UI/Input/LoginInput/LoginInput';

const meta = {
    title: 'shared/Input/LoginInput',
    component: LoginInput,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
        },
        docs: {
            description: {
                component: 'Специфический Input компонент. Используется на странице авторизации. '
                    + 'При передаче props "password" превращется в поле для пароля. '
                    + 'При наведении/фокусе появлятся кнопка сокрытия/открытия пароля',
            },
        },
    },
    tags: ['autodocs'],
    args: {
        name: 'register',
        password: true,
    },

} satisfies Meta<typeof LoginInput>;

type Story = StoryObj<typeof meta>;

export const AuthData: Story = {
    decorators: [
        (Story) => DemoWithThemes(Story),
    ],
    args: {
        name: 'register',
        password: false,
    },
};

export const Password: Story = {
    decorators: [
        (Story) => StoreDecorator(Story),
        (Story) => DemoWithThemes(Story),
    ],    
};

export default meta;
