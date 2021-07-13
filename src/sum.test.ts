import sum from './sum';

describe('Sum Tests', () => {
  it('adds 2 numbers correctly', () => {
    expect(sum(2, 2)).toBe(4);
  });
});
