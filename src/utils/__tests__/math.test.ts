import { add, divide, multiply, modulo, subtract } from '../math';

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

describe('add', () => {
    it('should return the sum of two positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    });

    it('should return the sum of a positive and a negative number', () => {
        expect(add(2, -3)).toBe(-1);
    });

    it('should return the sum of two negative numbers', () => {
        expect(add(-2, -3)).toBe(-5);
    });

    it('should return the same number when adding zero', () => {
        expect(add(2, 0)).toBe(2);
        expect(add(0, 2)).toBe(2);
    });
});

describe('divide', () => {
    it('should return the quotient of two positive numbers', () => {
        expect(divide(6, 3)).toBe(2);
    });

    it('should return the quotient of a positive and a negative number', () => {
        expect(divide(6, -3)).toBe(-2);
    });

    it('should return the quotient of two negative numbers', () => {
        expect(divide(-6, -3)).toBe(2);
    });

    it('should return zero when the numerator is zero', () => {
        expect(divide(0, 3)).toBe(0);
    });

    it('should throw an error when dividing by zero', () => {
        expect(() => divide(6, 0)).toThrow();
    });
});

describe('multiply', () => {
    it('should return the product of two positive numbers', () => {
        expect(multiply(2, 3)).toBe(6);
    });

    it('should return the product of a positive and a negative number', () => {
        expect(multiply(2, -3)).toBe(-6);
    });

    it('should return the product of two negative numbers', () => {
        expect(multiply(-2, -3)).toBe(6);
    });

    it('should return zero when multiplying by zero', () => {
        expect(multiply(2, 0)).toBe(0);
        expect(multiply(0, 2)).toBe(0);
    });
});