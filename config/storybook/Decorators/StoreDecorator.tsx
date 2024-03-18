import { Provider } from 'react-redux';
import { store } from '../../../src/app/Providers/Store/store';
import React, { FC } from 'react';

export const StoreDecorator = (Story: FC) => (
    <Provider store={store}>
        <Story />
    </Provider>
);
