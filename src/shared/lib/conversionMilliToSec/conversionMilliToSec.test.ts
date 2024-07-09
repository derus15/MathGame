import { conversionMilliToSec } from 'shared/lib/conversionMilliToSec/conversionMilliToSec';

describe('conversionMilliToSec', () => {

    it('should be one seconds', () => {
        expect(conversionMilliToSec(1000)).toEqual('1,000');
    });

    it('should be 0,100 seconds', () => {
        expect(conversionMilliToSec(100)).toEqual('0,100');
    });

    it('should be 0,500 seconds', () => {
        expect(conversionMilliToSec(500)).toEqual('0,500');
    });

    it('should be zero seconds', () => {
        expect(conversionMilliToSec(0)).toEqual('0,000');
    });

    it('should be one hundred seconds', () => {
        expect(conversionMilliToSec(100_000)).toEqual('100,000');
    });

    it('should be one 0,050', () => {
        expect(conversionMilliToSec(50)).toEqual('0,050');
    });
    
    it('should be one milliseconds', () => {
        expect(conversionMilliToSec(1)).toEqual('0,001');
    });

});
