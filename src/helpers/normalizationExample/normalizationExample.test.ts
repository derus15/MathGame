import normalizationExample from './normalizationExample';

describe('normalizationExample.test', () => {

    it('It should be correct example with +', () => {
        const mockSetAnswer = jest.fn();
        const nums = [10, 30];
        const sign = '+';
        expect(normalizationExample(nums, sign, mockSetAnswer)).toEqual('10 + 30 =');
    });

    it('It should be correct example with -', () => {
        const mockSetAnswer = jest.fn();
        const nums = [20, 30];
        const sign = '-';
        expect(normalizationExample(nums, sign, mockSetAnswer)).toEqual('30 - 20 =');
    });

    it('It should be correct example with *', () => {
        const mockSetAnswer = jest.fn();
        const nums = [10, 30];
        const sign = '*';
        expect(normalizationExample(nums, sign, mockSetAnswer)).toEqual('10 * 30 =');
    });

    it('It should be correct example with /', () => {
        const mockSetAnswer = jest.fn();
        const nums = [10, 30];
        const sign = '/';
        expect(normalizationExample(nums, sign, mockSetAnswer)).toEqual('300 / 30 =');
    });

});
