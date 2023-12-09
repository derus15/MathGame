import { normalizationOfTheEnd } from './normalizationOfTheEnd';

describe('normalizationOfTheEnd', () => {

    it('should be секунда', () => {
        const time = 1;
        expect(normalizationOfTheEnd(time)).toEqual('1 секунда');
    });

    it('should be секунды', () => {
        const time = 2;
        expect(normalizationOfTheEnd(time)).toEqual('2 секунды');
    });

    it('should be секунд', () => {
        const time = 5;
        expect(normalizationOfTheEnd(time)).toEqual('5 секунд');
    });

    it('should be секунд', () => {
        const time = 0;
        expect(normalizationOfTheEnd(time)).toEqual('0 секунд');
    });

    it('should be секунд', () => {
        const time = 118;
        expect(normalizationOfTheEnd(time)).toEqual('118 секунд');
    });

    it('should be секунды', () => {
        const time = 32;
        expect(normalizationOfTheEnd(time)).toEqual('32 секунды');
    });

    it('should be секунды', () => {
        const time = 12815154;
        expect(normalizationOfTheEnd(time)).toEqual('12815154 секунды');
    });

});
