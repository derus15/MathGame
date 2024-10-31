import { calculateDifferenceExtremes } from './calculateDifferenceExtremes';

describe('calculateDifferenceExtremes', () => {
    // 1_730_371_785_096
    // 1_730_371_786_198

    it('should be standard difference', () => {
        
        const time = [[100_000_000, 100_012_000]];
        expect(calculateDifferenceExtremes(time)).toEqual(12);
    });

    it('should be difference in two-dimensional array', () => {

        const time = [[100_000_000, 100_012_000], [100_016_000, 100_020_000]];
        expect(calculateDifferenceExtremes(time)).toEqual(16);
    });

    it('should be difference in two-dimensional array with empty array', () => {

        const time = [[100_000_000, 100_012_000], [100_016_000, 100_020_000], []];
        expect(calculateDifferenceExtremes(time)).toEqual(16);
    });

    it('should be difference in empty array', () => {

        const time: number[][] = [[]];
        expect(calculateDifferenceExtremes(time)).toBeUndefined();
    });

});
