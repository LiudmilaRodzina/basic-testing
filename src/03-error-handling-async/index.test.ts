import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const value = 'test value';
    const resolvedValue = await resolveValue(value);
    expect(resolvedValue).toBe(value);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const message = 'Custom error message';
    expect(() => throwError(message)).toThrowError(new Error(message));
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => throwError()).toThrowError(new Error('Oops!'));
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrowError(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrowError(MyAwesomeError);
  });
});
