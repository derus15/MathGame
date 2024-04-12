import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderProviders } from '../../../../../../config/jest/Providers/renderProviders';
import Select from 'widgets/Interface/UI/InterfaceSelects/Select/Select';

describe('Select', () => {

    test('on screen', () => {
        renderProviders(<Select />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('element active', () => {

        const globalState = 'test';
        const params = 'test';

        renderProviders(<Select globalState={globalState} currentState={params} />);
        expect(screen.getByRole('button')).toHaveClass('elementActive');
    });

    test('element inactive', () => {

        const globalState = 'test';
        const params = 'test_1';

        renderProviders(<Select globalState={globalState} currentState={params} />);
        expect(screen.getByRole('button')).not.toHaveClass('elementActive');
    });

});
