import { calculateEPS } from 'shared/lib/calculateEPS/calculateEPS';

describe('calculateEPS', () => {

    it('should be correct basic EPS', () => {
        const example = 10;
        const time = 10_000;
        expect(calculateEPS(example, time)).toEqual('1.00');
    });

    it('should be correct zero EPS', () => {
        const example = 0;
        const time = 10_000;
        expect(calculateEPS(example, time)).toEqual('0.00');
    });

    it('should be correct zero time', () => {
        const example = 0;
        const time = 0;
        expect(calculateEPS(example, time)).toEqual('0.00');
    });

    it('should be correct EPS with 1 example', () => {
        const example = 1;
        const time = 1_000;
        expect(calculateEPS(example, time)).toEqual('1.00');
    });

    it('should be correct EPS with 1 example', () => {
        const example = 1;
        const time = 1_430;
        expect(calculateEPS(example, time)).toEqual('0.70');
    });

    it('should be correct EPS with zero example', () => {
        const example = 0;
        const time = 12_000;
        expect(calculateEPS(example, time)).toEqual('0.00');
    });

    it('should be correct EPS', () => {
        const example = 12;
        const time = 12_000;
        expect(calculateEPS(example, time)).toEqual('1.00');
    });

    it('should be correct EPS with 4 example', () => {
        const example = 4;
        const time = 5_450;
        expect(calculateEPS(example, time)).toEqual('0.73');
    });

    it('should be correct EPS with 16 example', () => {
        const example = 16;
        const time = 55_450;
        expect(calculateEPS(example, time)).toEqual('0.29');
    });

});
