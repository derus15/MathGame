import { calculateEPS } from 'shared/lib/calculateEPS/calculateEPS';

describe('calculateEPS', () => {

    it('should be basic functionality', () => {
        const example = 10;
        const time = 10;
        expect(calculateEPS(example, time)).toEqual('1.00');
    });

    it('should be correct zero EPS', () => {
        const example = 0;
        const time = 0;
        expect(calculateEPS(example, time)).toEqual('0.00');
    });

    it('should be correct EPS with 1 example', () => {
        const example = 1;
        const time = 0;
        expect(calculateEPS(example, time)).toEqual('1.00');
    });

    it('should be correct EPS with zero example', () => {
        const example = 0;
        const time = 1;
        expect(calculateEPS(example, time)).toEqual('0.00');
    });

    it('should be correct EPS', () => {
        const example = 12;
        const time = 30;
        expect(calculateEPS(example, time)).toEqual('0.40');
    });

});
