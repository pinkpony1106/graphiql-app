import { add } from '../tets';

describe('Math functions', () => {
  it('should add two numbers correctly', () => {
    expect(add(1, 2)).toEqual(3);
  });
});
