import { screen } from '@testing-library/react';
import { Interface } from '../Interface/Interface';
import '@testing-library/jest-dom';
import { renderProviders } from '../../../../../config/jest/Providers/renderProviders';

describe('Interface', () => {

    test('on screen', () => {
        renderProviders(<Interface />);
        expect(screen.getByTestId('interface')).toBeInTheDocument();
    });

});
