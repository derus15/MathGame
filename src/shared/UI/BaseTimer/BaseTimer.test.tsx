import { BaseTimer } from 'shared/UI/BaseTimer/BaseTimer';
import { render } from '@testing-library/react';

describe('BaseTimer', () => {

    let setTimeMock: jest.Mock;
    let finishMockCallback: jest.Mock;

    beforeEach(() => {
        jest.useFakeTimers();
        setTimeMock = jest.fn();
        finishMockCallback = jest.fn();
    });

    it('renders with correct text', () => {
        const { getByText } = render(
            <BaseTimer time={15_000} setTime={setTimeMock} startCondition={false} />,
        );

        expect(getByText('15,0')).toBeInTheDocument();
        expect(getByText('15,0')).toHaveTextContent('15,0');

    });

    it('change time and not callback', () => {

        render(<BaseTimer
            time={300}
            setTime={setTimeMock}
            startCondition
            onFinishCallback={finishMockCallback}
        />);

        jest.advanceTimersByTime(100);

        expect(setTimeMock).toHaveBeenCalled();
        expect(finishMockCallback).not.toHaveBeenCalled();

    });
});
