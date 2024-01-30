import normalizationExample from './normalizationExample';

describe('normalizationExample.test', () => {

    it('should be correct example with +', () => {
        const mockSetAnswer = jest.fn((answer) => answer);
        const numsList = [10, 30];
        const sign = '+';
        expect(normalizationExample({
            numbersList: numsList,
            sign,
            setAnswer: mockSetAnswer,
        })).toEqual('10 + 30 =');
        expect(mockSetAnswer.mock.results[0].value).toEqual('40');
    });

    it('should be correct example with -', () => {
        const mockSetAnswer = jest.fn((answer) => answer);
        const numsList = [10, 30];
        const sign = '-';
        expect(normalizationExample({
            numbersList: numsList,
            sign,
            setAnswer: mockSetAnswer,
        })).toEqual('30 - 10 =');
        expect(mockSetAnswer.mock.results[0].value).toEqual('20');
    });

    it('should be correct example with -', () => {
        const mockSetAnswer = jest.fn((answer) => answer);
        const numsList = [40, 30];
        const sign = '-';
        expect(normalizationExample({
            numbersList: numsList,
            sign,
            setAnswer: mockSetAnswer,
        })).toEqual('40 - 30 =');
        expect(mockSetAnswer.mock.results[0].value).toEqual('10');
    });

    it('should be correct example with *', () => {
        const mockSetAnswer = jest.fn((answer) => answer);
        const numsList = [10, 30];
        const sign = '*';
        expect(normalizationExample({
            numbersList: numsList,
            sign,
            setAnswer: mockSetAnswer,
        })).toEqual('10 * 30 =');
        expect(mockSetAnswer.mock.results[0].value).toEqual('300');
    });

    it('should be correct example with /', () => {
        const mockSetAnswer = jest.fn((answer) => answer);
        const numsList = [9, 30];
        const sign = '/';
        expect(normalizationExample({
            numbersList: numsList,
            sign,
            setAnswer: mockSetAnswer,
        })).toEqual('270 / 30 =');
        expect(mockSetAnswer.mock.results[0].value).toEqual('9');
    });

    it('should be correct example with boundary value 100', () => {
        const mockSetAnswer = jest.fn((answer) => answer);
        const numsList = [100, 30];
        const sign = '/';
        expect(normalizationExample({
            numbersList: numsList,
            sign,
            setAnswer: mockSetAnswer,
        })).toEqual('3000 / 30 =');
        expect(mockSetAnswer.mock.results[0].value).toEqual('100');
    });

    it('should be correct example with boundary value 10', () => {
        const mockSetAnswer = jest.fn((answer) => answer);
        const numsList = [10, 30];
        const sign = '/';
        expect(normalizationExample({
            numbersList: numsList,
            sign,
            setAnswer: mockSetAnswer,
        })).toEqual('300 / 30 =');
        expect(mockSetAnswer.mock.results[0].value).toEqual('10');
    });

    it('should be correct example with boundary value 0', () => {
        const mockSetAnswer = jest.fn((answer) => answer);
        const numsList = [0, 30];
        const sign = '/';
        expect(normalizationExample({
            numbersList: numsList,
            sign,
            setAnswer: mockSetAnswer,
        })).toEqual('30 / 30 =');
        expect(mockSetAnswer.mock.results[0].value).toEqual('1');
    });

});
