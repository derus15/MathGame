import { timeNormalization } from './timeNormalization';

describe('timeNormalization', () => {

    it('should be min time', () => {
        const seconds = 0;
        expect(timeNormalization(seconds)).toEqual('00:00:00');
    });

    it('should be 1 second', () => {
        const seconds = 1;
        expect(timeNormalization(seconds)).toEqual('00:00:01');
    });

    it('should be one minute', () => {
        const seconds = 60;
        expect(timeNormalization(seconds)).toEqual('00:01:00');
    });

    it('should be ten minutes', () => {
        const seconds = 600;
        expect(timeNormalization(seconds)).toEqual('00:10:00');
    });

    it('should be 1 hour', () => {
        const seconds = 3600;
        expect(timeNormalization(seconds)).toEqual('01:00:00');
    });

    it('should be max time', () => {
        const seconds = 359999;
        expect(timeNormalization(seconds)).toEqual('99:59:59');
    });

});
