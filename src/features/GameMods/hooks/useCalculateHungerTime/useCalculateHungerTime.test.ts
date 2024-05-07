import { useCalculateHungerTime } from './useCalculateHungerTime';
import { SignList } from 'app/types/config';

describe('useCalculateHungerTime.test', () => {
    
    it('should be 4 time with 4 length and *', () => {
        const answer = '3213';
        const sign: SignList = '*';
        const time = useCalculateHungerTime(answer, sign);
        expect(time).toEqual(4);
    });

    it('should be 4 time with 4 length and /', () => {
        const answer = '3213';
        const sign: SignList = '/';
        const time = useCalculateHungerTime(answer, sign);
        expect(time).toEqual(4);
    });

    it('should be 3 time with 3 length and *', () => {
        const answer = '323';
        const sign: SignList = '*';
        const time = useCalculateHungerTime(answer, sign);
        expect(time).toEqual(4);
    });

    it('should be 3 time with 3 length and /', () => {
        const answer = '323';
        const sign: SignList = '/';
        const time = useCalculateHungerTime(answer, sign);
        expect(time).toEqual(4);
    });

    it('should be 3 time with 2 length and *', () => {
        const answer = '32';
        const sign: SignList = '*';
        const time = useCalculateHungerTime(answer, sign);
        expect(time).toEqual(3);
    });

    it('should be 3 time with 2 length and /', () => {
        const answer = '32';
        const sign: SignList = '/';
        const time = useCalculateHungerTime(answer, sign);
        expect(time).toEqual(3);
    });

    it('should be 3 time with 2 length and /', () => {
        const answer = '0';
        const sign: SignList = '/';
        const time = useCalculateHungerTime(answer, sign);
        expect(time).toEqual(2);
    });

    it('should be 3 time with 1 length and *', () => {
        const answer = '3';
        const sign: SignList = '*';
        const time = useCalculateHungerTime(answer, sign);
        expect(time).toEqual(3);
    });

    it('should be 4 time with 5 length and *', () => {
        const answer = '32314';
        const sign: SignList = '*';
        const time = useCalculateHungerTime(answer, sign);
        expect(time).toEqual(4);
    });

    it('should be 2 time with 3 length and +', () => {
        const answer = '323';
        const sign: SignList = '+';
        const time = useCalculateHungerTime(answer, sign);
        expect(time).toEqual(2);
    });

    it('should be 2 time with 3 length and -', () => {
        const answer = '323';
        const sign: SignList = '-';
        const time = useCalculateHungerTime(answer, sign);
        expect(time).toEqual(2);
    });

    it('should be 2 time with 2 length and +', () => {
        const answer = '32';
        const sign: SignList = '+';
        const time = useCalculateHungerTime(answer, sign);
        expect(time).toEqual(2);
    });

    it('should be 3 time with 2 length and -', () => {
        const answer = '32';
        const sign: SignList = '-';
        const time = useCalculateHungerTime(answer, sign);
        expect(time).toEqual(2);
    });

    it('should be 2 time with 1 length and +', () => {
        const answer = '3';
        const sign: SignList = '+';
        const time = useCalculateHungerTime(answer, sign);
        expect(time).toEqual(2);
    });

    it('should be 3 time with 1 length and -', () => {
        const answer = '3';
        const sign: SignList = '-';
        const time = useCalculateHungerTime(answer, sign);
        expect(time).toEqual(2);
    });

});
