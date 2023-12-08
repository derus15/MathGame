import { classNames } from './classNames';

describe('test for function classNames', () => {

    it('should be with one cls parameter', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    it('should be with additional parameters', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe(expected);
    });

    it('should be with true/false mods parameters', () => {
        const expected = 'someClass hovered';
        expect(classNames(
            'someClass',
            { hovered: true, red: false },
            [],
        )).toBe(expected);
    });

    it('should be with only true mods parameters', () => {
        const expected = 'someClass hovered red';
        expect(classNames(
            'someClass',
            { hovered: true, red: true },
            [''],
        )).toBe(expected);
    });

    it('should be with only false mods parameters', () => {
        const expected = 'someClass';
        expect(classNames(
            'someClass',
            { hovered: false, red: false },
            [],
        )).toBe(expected);
    });

    it('should be with undefined mods parameters', () => {
        const expected = 'someClass hovered';
        expect(classNames(
            'someClass',
            { hovered: true, red: undefined },
            [],
        )).toBe(expected);
    });

    it('should be style with one css module', () => {
        const expected = 'someClass hovered';
        const style = { hovered: 'hovered' };
        expect(classNames(
            'someClass',
            { [style.hovered]: true },
            [],
        )).toBe(expected);
    });

    it('should be style with true/false css modules', () => {
        const expected = 'someClass hovered';
        const style = { hovered: 'hovered', red: 'red' };
        expect(classNames(
            'someClass',
            { [style.hovered]: true, [style.red]: false },
            [],
        )).toBe(expected);
    });

    it('should be style with only true css modules', () => {
        const expected = 'someClass hovered red';
        const style = { hovered: 'hovered', red: 'red' };
        expect(classNames(
            'someClass',
            { [style.hovered]: true, [style.red]: true },
            [],
        )).toBe(expected);
    });

    it('should be style with only false css modules', () => {
        const expected = 'someClass';
        const style = { hovered: 'hovered', red: 'red' };
        expect(classNames(
            'someClass',
            { [style.hovered]: false, [style.red]: false },
            [],
        )).toBe(expected);
    });

});
