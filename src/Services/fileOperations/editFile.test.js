import { getContentFields } from "./editFile";

describe('getting editable content array', () => {

    test('one editable field', () => {
        expect(getContentFields('hello [\\first name]!')).toStrictEqual(['first name']);
    });

    test('two or more editable fields', () => {
        expect(getContentFields('Hello, mr. [\\first name] [\\second name]!')).toStrictEqual(['first name', 'second name']);
        expect(getContentFields('Hello, mr. [\\first name] [\\second name], I hope you have a [\\day state] day!')).toStrictEqual(['first name', 'second name', 'day state']);
    });

    test('wrong user input', () => {
        expect(getContentFields('Hello, mr. [/first name] [/second name]!')).toBe(null);
    });
});