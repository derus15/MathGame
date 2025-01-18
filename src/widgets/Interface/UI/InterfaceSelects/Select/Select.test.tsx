import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderProviders } from '../../../../../../config/jest/Providers/renderProviders';
import Select from '../Select/Select';

describe('Select', () => {

    test('on screen', () => {
        renderProviders(<Select />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('element active', () => {

        const globalState = 'test';
        const params = 'test';

        renderProviders(<Select isActive={params === globalState} />);
        expect(screen.getByRole('button')).toHaveClass('selectActive');
    });

    test('element inactive', () => {

        const globalState: string = 'test';
        const params: string = 'test_1';

        renderProviders(<Select isActive={params === globalState} />);
        expect(screen.getByRole('button')).not.toHaveClass('selectActive');
    });

});
