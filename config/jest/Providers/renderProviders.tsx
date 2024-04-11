import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../src/app/Providers/Store/store';
import { ReactNode } from 'react';

export const renderProviders = (component: ReactNode) => (render(
    <Provider store={store}>
        {component}
    </Provider>,
));
