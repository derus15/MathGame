import { calculateEPS } from 'shared/lib/calculateEPS/calculateEPS';

describe('calculateEPS', () => {

    it('should be correct basic EPS', () => {
        const example = 10;
        const time = [[100_000_000, 100_010_000]];
        expect(calculateEPS(example, time)).toEqual('1.00');
    });

    it('should be correct zero EPS', () => {
        const example = 0;
        const time = [[100_000_000, 100_010_000]];
        expect(calculateEPS(example, time)).toEqual('0.00');
    });

    it('should be correct zero time', () => {
        const example = 0;
        const time = [[100_000_000, 100_000_000]];
        expect(calculateEPS(example, time)).toEqual('0.00');
    });

    it('should be correct EPS with 1 example', () => {
        const example = 1;
        const time = [[100_000_000, 100_001_000]];
        expect(calculateEPS(example, time)).toEqual('1.00');
    });

    it('should be correct EPS with 1 example', () => {
        const example = 1;
        const time = [[100_000_000, 100_001_430]];
        expect(calculateEPS(example, time)).toEqual('0.70');
    });

    it('should be correct EPS with zero example', () => {
        const example = 0;
        const time = [[100_000_000, 100_012_000]];
        expect(calculateEPS(example, time)).toEqual('0.00');
    });

    it('should be correct EPS', () => {
        const example = 12;
        const time = [[100_000_000, 100_012_000]];
        expect(calculateEPS(example, time)).toEqual('1.00');
    });

    it('should be correct EPS with 4 example', () => {
        const example = 4;
        const time = [[100_000_000, 100_005_450]];
        expect(calculateEPS(example, time)).toEqual('0.73');
    });

    it('should be correct EPS with 16 example', () => {
        const example = 16;
        const time = [[100_000_000, 100_055_450]];
        expect(calculateEPS(example, time)).toEqual('0.29');
    });

});
