import { expect } from 'chai';

import { StringUtilities } from "./string.utilities";

describe(`StringUtilitiesTests`, () => {
  let utils: StringUtilities

  beforeEach(() => {
    utils = new StringUtilities();
  });

  it(`should return empty string instead of null`, () => {
    expect(utils.nullOrEmpty(null)).to.be.equal("");
  });

  it(`should return empty string instead of undefined`, () => {
    expect(utils.nullOrEmpty(undefined)).to.be.equal("");
  });

  it(`should return original value if set`, () => {
    expect(utils.nullOrEmpty("test")).to.be.equal("test");
  });
});
