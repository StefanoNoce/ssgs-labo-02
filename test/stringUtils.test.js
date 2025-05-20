const {
    reverseString,
    isPalindrome,
    truncateString,
    countCharacters,
} = require('../src/stringUtils');

describe('reverseString', () => {
    test('inverte una stringa normale', () => {
        expect(reverseString('ciao')).toBe('oaic');
    });
    test('gestisce stringa vuota', () => {
        expect(reverseString('')).toBe('');
    });
    test('gestisce stringa con spazi', () => {
        expect(reverseString('a b')).toBe('b a');
    });
    test('gestisce caratteri speciali', () => {
        expect(reverseString('!@#')).toBe('#@!');
    });
});

describe('isPalindrome', () => {
    test('riconosce un palindromo semplice', () => {
        expect(isPalindrome('anna')).toBe(true);
    });
    test('riconosce una stringa non palindroma', () => {
        expect(isPalindrome('ciao')).toBe(false);
    });
    test('gestisce stringa vuota', () => {
        expect(isPalindrome('')).toBe(true);
    });
    test('gestisce palindromi con spazi e maiuscole', () => {
        expect(isPalindrome('I topi non avevano nipoti')).toBe(true);
        expect(isPalindrome('Anna')).toBe(true);
    });
});

describe('truncateString', () => {
    test('tronca una stringa più lunga del massimo', () => {
        expect(truncateString('supercalifragilistico', 10)).toBe('supercalif...');
    });
    test('non tronca se la stringa è corta', () => {
        expect(truncateString('ciao', 10)).toBe('ciao');
    });
    test('gestisce stringa vuota', () => {
        expect(truncateString('', 5)).toBe('');
    });
    test('gestisce lunghezza massima zero', () => {
        expect(truncateString('abc', 0)).toBe('...');
    });
    test('gestisce lunghezza massima negativa', () => {
        expect(truncateString('abc', -1)).toBe('ab...');
    });
});

describe('countCharacters', () => {
    test('conta i caratteri correttamente', () => {
        expect(countCharacters('banana')).toEqual({ b: 1, a: 3, n: 2 });
    });
    test('gestisce stringa vuota', () => {
        expect(countCharacters('')).toEqual({});
    });
    test('gestisce caratteri speciali', () => {
        expect(countCharacters('a!a!')).toEqual({ a: 2, '!': 2 });
    });
    test('distingue maiuscole e minuscole', () => {
        expect(countCharacters('Aa')).toEqual({ A: 1, a: 1 });
    });
});