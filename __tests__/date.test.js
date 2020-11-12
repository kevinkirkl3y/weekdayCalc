import { TestScheduler } from 'jest';
import Date from './../src/js/date.js';

describe('Date', () => {
  
  let reusableDate;
  beforeEach(() => {
    reusableDate = new Date(17, 0o3, 2025);
  });
  
  test('should create an object with variables in the form of 00/00/0000', () => {
    expect(reusableDate.day).toEqual(17);
    expect(reusableDate.month).toEqual(0o3);
    expect(reusableDate.year).toEqual(2025);
  });
});
