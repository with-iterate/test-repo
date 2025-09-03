import { add, divide } from '../math';

describe('add', () => {
    it('should return the sum of two positive numbers', () => {
        expect(add(1, 2)).toBe(3);
    });

    it('should return the sum of a positive and a negative number', () => {
        expect(add(5, -3)).toBe(2);
    });

    it('should return the sum of two negative numbers', () => {
        expect(add(-4, -6)).toBe(-10);
    });

    it('should return the sum when one number is zero', () => {
        expect(add(0, 5)).toBe(5);
        expect(add(5, 0)).toBe(5);
    });

    it('should return zero when both numbers are zero', () => {
        expect(add(0, 0)).toBe(0);
    });
});

describe('divide', () => {
    it('should return the division of two positive numbers', () => {
        expect(divide(6, 3)).toBe(2);
    });

    it('should return the division of a positive and a negative number', () => {
        expect(divide(6, -3)).toBe(-2);
    });

    it('should return the division of two negative numbers', () => {
        expect(divide(-6, -3)).toBe(2);
    });

    it('should return zero when numerator is zero', () => {
        expect(divide(0, 5)).toBe(0);
    });

    it('should handle division by one', () => {
        expect(divide(5, 1)).toBe(5);
    });

    it('should handle division by negative one', () => {
        expect(divide(5, -1)).toBe(-5);
    });

    it('should throw an error when dividing by zero', () => {
        expect(() => divide(5, 0)).toThrow();
    });
});
