import { render, screen } from '@testing-library/react';
import { ExampleButton } from './ExampleButton';

describe('ExampleButton', () => {

    test('on screen', () => {
        render(
            <ExampleButton />,
        );
        expect(screen.getByText('Кнопка')).toBeInTheDocument();
    });
});
