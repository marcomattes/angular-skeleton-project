import { StringUtilities } from './string.utilities';

describe(`StringUtilitiesTests`, () => {
  let utils: StringUtilities;

  beforeEach(() => {
    utils = new StringUtilities();
  });

  it(`should return empty string instead of null`, () => {
    expect(utils.nullOrEmpty(null)).toBe('');
  });

  it(`should return empty string instead of undefined`, () => {
    expect(utils.nullOrEmpty(undefined)).toBe('');
  });

  it(`should return original value if set`, () => {
    expect(utils.nullOrEmpty('test')).toBe('test');
  });
});
