import { add, divide, multiply, modulo, subtract } from '../math';

describe('modulo', () => {
    it('should return the remainder of two positive numbers', () => {
        expect(modulo(5, 2)).toBe(1);
    });

    it('should return the remainder of a positive and a negative number', () => {
        expect(modulo(5, -2)).toBe(1);
    });

    it('should return the remainder of two negative numbers', () => {
        expect(modulo(-5, -2)).toBe(-1);
    });

    it('should return zero when the first number is zero', () => {
        expect(modulo(0, 5)).toBe(0);
    });

    it('should throw an error when dividing by zero', () => {
        expect(() => modulo(5, 0)).toThrow();
    });
});

describe('subtract', () => {
    it('should return the difference of two positive numbers', () => {
        expect(subtract(5, 3)).toBe(2);
    });

    it('should return the difference of a positive and a negative number', () => {
        expect(subtract(5, -3)).toBe(8);
    });

    it('should return the difference of two negative numbers', () => {
        expect(subtract(-5, -3)).toBe(-2);
    });

    it('should return zero when both numbers are the same', () => {
        expect(subtract(5, 5)).toBe(0);
    });

    it('should handle subtracting zero', () => {
        expect(subtract(5, 0)).toBe(5);
        expect(subtract(0, 5)).toBe(-5);
    });
});