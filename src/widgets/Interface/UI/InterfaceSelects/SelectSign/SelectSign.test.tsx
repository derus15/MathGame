import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderProviders } from '../../../../../../config/jest/Providers/renderProviders';
import SelectSign from 'widgets/Interface/UI/InterfaceSelects/SelectSign/SelectSign';

describe('SelectSign', () => {

    test('on screen', () => {
        renderProviders(<SelectSign />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('element active', () => {
        renderProviders(<SelectSign globalState={['+', '-']} currentSign="+" />);
        expect(screen.getByRole('button')).toHaveClass('signsActive');
    });

    test('element inactive', () => {
        renderProviders(<SelectSign globalState={['+', '-']} currentSign="*" />);
        expect(screen.getByRole('button')).not.toHaveClass('elementActive');
    });

});
