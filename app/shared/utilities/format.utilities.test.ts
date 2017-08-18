import { expect } from 'chai';

import { FormatUtilities } from './format.utilities';

describe(`FormatUtilitiesTests`, () => {
  let utils: FormatUtilities;

  beforeEach(() => {
    utils = new FormatUtilities();
  });

  it('formatPhoneNumber with full number should return formatted phone number', () => {
    expect(utils.formatPhoneNumber('1231231234')).to.equal('123-123-1234');
  });

  it('formatPhoneNumber with one digit should return formatted phone number', () => {
    expect(utils.formatPhoneNumber('1')).to.equal('1');
  });

  it('formatPhoneNumber with three digits should return formatted phone number', () => {
    expect(utils.formatPhoneNumber('123')).to.equal('123');
  });

  it('formatPhoneNumber with four digits should return formatted phone number', () => {
    expect(utils.formatPhoneNumber('1234')).to.equal('123-4');
  });

  it('formatPhoneNumber with formatted four digits should return formatted phone number', () => {
    expect(utils.formatPhoneNumber('123-4')).to.equal('123-4');
  });

  it('formatPhoneNumber with seven digits should return formatted phone number', () => {
    expect(utils.formatPhoneNumber('1234567')).to.equal('123-456-7');
  });

  it('formatPhoneNumber with formatted seven digits should return formatted phone number', () => {
    expect(utils.formatPhoneNumber('123-456-7')).to.equal('123-456-7');
  });

  it('formatPhoneNumber should remove alpha characters', () => {
    expect(utils.formatPhoneNumber('1a')).to.equal('1');
  });

  it('formatPhoneNumber should remove other symbols', () => {
    expect(utils.formatPhoneNumber('1;\'[]\'')).to.equal('1');
  });
});
