import { findDifferencesArray } from 'shared/lib/findDifferencesArray/findDifferencesArray';

describe('findDifferencesArray', () => {
    
    it('should be correct array', () => {
        const array: number[][] = [[10, 20, 30, 40, 50]];
        const result = findDifferencesArray(array);
        expect(result).toEqual([10, 10, 10, 10]);
    });

    it('should be correct two dimensional array', () => {
        const array: number[][] = [[10, 20, 30, 40, 50], [10, 20, 30, 40, 50]];
        const result = findDifferencesArray(array);
        expect(result).toEqual([10, 10, 10, 10, 10, 10, 10, 10]);
    });

    it('should be correct array with the first nested array', () => {
        const array: number[][] = [[10, 20, 30, 40, 50], [10]];
        const result = findDifferencesArray(array);
        expect(result).toEqual([10, 10, 10, 10]);
    });

    it('should be empty array', () => {
        const array: number[][] = [[10], [10]];
        const result = findDifferencesArray(array);
        expect(result).toEqual([]);
    });

    it('should be correct array with first empty', () => {
        const array: number[][] = [[], [10, 20, 30]];
        const result = findDifferencesArray(array);
        expect(result).toEqual([10, 10]);
    });

});
