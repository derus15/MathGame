import normalizationExample from './normalizationExample';

describe('normalizationExample.test', () => {

    it('It should be correct example with +', () => {
        const mockSetAnswer = jest.fn((answer) => answer);
        const nums = [10, 30];
        const sign = '+';
        expect(normalizationExample(nums, sign, mockSetAnswer)).toEqual('10 + 30 =');
        expect(mockSetAnswer.mock.results[0].value).toEqual('40');
    });

    it('It should be correct example with -', () => {
        const mockSetAnswer = jest.fn((answer) => answer);
        const nums = [10, 30];
        const sign = '-';
        expect(normalizationExample(nums, sign, mockSetAnswer)).toEqual('30 - 10 =');
        expect(mockSetAnswer.mock.results[0].value).toEqual('20');
    });

    it('It should be correct example with *', () => {
        const mockSetAnswer = jest.fn((answer) => answer);
        const nums = [10, 30];
        const sign = '*';
        expect(normalizationExample(nums, sign, mockSetAnswer)).toEqual('10 * 30 =');
        expect(mockSetAnswer.mock.results[0].value).toEqual('300');
    });

    it('It should be correct example with /', () => {
        const mockSetAnswer = jest.fn((answer) => answer);
        const nums = [10, 30];
        const sign = '/';
        expect(normalizationExample(nums, sign, mockSetAnswer)).toEqual('300 / 30 =');
        expect(mockSetAnswer.mock.results[0].value).toEqual('10');
    });

});
