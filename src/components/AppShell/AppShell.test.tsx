import React from 'react';
import sum from '../../sum';

describe('A test', () => {
  it('2 + 2 = 4', () => {
    expect(sum(2, 2)).toEqual(4);
  });
});
