import { render } from '@testing-library/react';
import { BaseCounter } from 'shared/UI/BaseCounter/BaseCounter';

describe('BaseCounter', () => {

    let callbackMock: () => void;
    
    beforeEach(() => {
        callbackMock = jest.fn();
    });

    it('renders with initial props correctly', () => {

        const { getByText } = render(
            <BaseCounter
                incrementArg={5}
                targetArg={10}
                callback={callbackMock}
                mark="/"
                className="test-class"
            />,
        );

        expect(getByText('5 / 10')).toBeInTheDocument();
        expect(getByText('5 / 10').className).toBe('test-class');

    });

    it('calls callback when incrementArg is equal to targetArg', () => {
        render(
            <BaseCounter
                incrementArg={10}
                targetArg={10}
                callback={callbackMock}
                mark="/"
                className="test-class"
            />,
        );

        expect(callbackMock).toHaveBeenCalled();

    });

    it('calls callback when incrementArg is greater than targetArg', () => {
        render(
            <BaseCounter
                incrementArg={15}
                targetArg={10}
                callback={callbackMock}
                mark="/"
                className="test-class"
            />,
        );

        expect(callbackMock).toHaveBeenCalled();

    });

    it('does not call callback when incrementArg is less than targetArg', () => {
        render(
            <BaseCounter
                incrementArg={5}
                targetArg={10}
                callback={callbackMock}
                mark="/"
                className="test-class"
            />,
        );

        expect(callbackMock).not.toHaveBeenCalled();

    });

});
