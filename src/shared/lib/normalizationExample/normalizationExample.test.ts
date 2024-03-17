import generateExample from './generateExample';
import { SignList } from 'app/types/config';

describe('generateExample.test', () => {

    it('should be correct Example with +', () => {
        const signList: SignList[] = ['+'];
        const numberForTest = [10, 30];
        const { example, answer } = generateExample({ signList, numberForTest });
        expect(example).toEqual('10 + 30 =');
        expect(answer).toEqual('40');
    });

    it('should be correct Example with -', () => {
        const signList: SignList[] = ['-'];
        const numberForTest = [10, 30];
        const { example, answer } = generateExample({ signList, numberForTest });
        expect(example).toEqual('30 - 10 =');
        expect(answer).toEqual('20');
    });

    it('should be correct Example with -', () => {
        const signList: SignList[] = ['-'];
        const numberForTest = [40, 30];
        const { example, answer } = generateExample({ signList, numberForTest });
        expect(example).toEqual('40 - 30 =');
        expect(answer).toEqual('10');
    });

    it('should be correct Example with -', () => {
        const signList: SignList[] = ['-'];
        const numberForTest = [0, 30];
        const { example, answer } = generateExample({ signList, numberForTest });
        expect(example).toEqual('30 - 1 =');
        expect(answer).toEqual('29');
    });

    it('should be correct Example with -', () => {
        const signList: SignList[] = ['-'];
        const numberForTest = [30, 0];
        const { example, answer } = generateExample({ signList, numberForTest });
        expect(example).toEqual('30 - 0 =');
        expect(answer).toEqual('30');
    });

    it('should be correct Example with *', () => {
        const signList: SignList[] = ['*'];
        const numberForTest = [10, 30];
        const { example, answer } = generateExample({ signList, numberForTest });
        expect(example).toEqual('10 * 30 =');
        expect(answer).toEqual('300');
    });

    it('should be correct Example with /', () => {
        const signList: SignList[] = ['/'];
        const numberForTest = [9, 30];
        const { example, answer } = generateExample({ signList, numberForTest });
        expect(example).toEqual('270 / 30 =');
        expect(answer).toEqual('9');
    });

    it('should be correct Example with boundary value 100', () => {
        const signList: SignList[] = ['/'];
        const numberForTest = [100, 30];
        const { example, answer } = generateExample({ signList, numberForTest });
        expect(example).toEqual('3000 / 30 =');
        expect(answer).toEqual('100');
    });

    it('should be correct Example with boundary value 10', () => {
        const signList: SignList[] = ['/'];
        const numberForTest = [10, 30];
        const { example, answer } = generateExample({ signList, numberForTest });
        expect(example).toEqual('300 / 30 =');
        expect(answer).toEqual('10');
    });

    it('should be correct Example with boundary value 0', () => {
        const signList: SignList[] = ['/'];
        const numberForTest = [0, 30];
        const { example, answer } = generateExample({ signList, numberForTest });
        expect(example).toEqual('30 / 30 =');
        expect(answer).toEqual('1');
    });

    it('should be correct Example with boundary value 0 and 0', () => {
        const signList: SignList[] = ['/'];
        const numberForTest = [0, 0];
        const { example, answer } = generateExample({ signList, numberForTest });
        expect(example).toEqual('1 / 1 =');
        expect(answer).toEqual('1');
    });

    it('should be correct Example with boundary value 0 and 1', () => {
        const signList: SignList[] = ['/'];
        const numberForTest = [1, 0];
        const { example, answer } = generateExample({ signList, numberForTest });
        expect(example).toEqual('1 / 1 =');
        expect(answer).toEqual('1');
    });

});
