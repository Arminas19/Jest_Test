/**
 * @jest-environment jsdom
 */

const addition = require('../cal');

describe('Calculator', () => {
    describe('Addition Function', () => {
        test('should return 42 for 20 + 22', () => {
            expect(addition(20, 22)).toBe(42);
        });
        test('should return 73 for 42 + 31', () => {
            expect(addition(42, 31)).toBe(73);
        });
    });
    describe('Subtraction Function', () => {

    });
    describe('Multiplication Function', () => {

    });
    describe('Divistion Function', () => {

    });
})