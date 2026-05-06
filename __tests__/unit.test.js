// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('valid', () => {
    expect(isPhoneNumber('(925) 222-3333')).toBe(true);
});
test('valid', () => {
    expect(isPhoneNumber('925-222-3333')).toBe(true);
});
test('invalid:no dash', () => {
    expect(isPhoneNumber('9252223333')).toBe(false);
});
test('invalid:letters', () => {
    expect(isPhoneNumber('abbc')).toBe(false);
});
//gamail
test('valid', () => {
    expect(isEmail('ausen@gmail.edu')).toBe(true);
});

test('valid', () => {
    expect(isEmail('abcd@ucsd.edu')).toBe(true);
});


test('invalid: no @', () => {
    expect(isEmail('jhony.sad')).toBe(false);
});

test('invalid: no .', () => {
    expect(isEmail('oppa@asfff')).toBe(false);
});

// password
test('valid', () => {
    expect(isStrongPassword('c1234')).toBe(true);
});

test('valid', () => {
    expect(isStrongPassword('kevin_chung')).toBe(true);
});
test('invalid:do not start with alphabet', () => {
    expect(isStrongPassword('8745')).toBe(false);
});


test('invalid:not allowed ;', () => {
    expect(isStrongPassword(';lj')).toBe(false);
});

// date
test('valid', () => {
    expect(isDate('04/02/2003')).toBe(true);
});

test('valid', () => {
    expect(isDate('34/57/9999')).toBe(true);
});

test('invalid:not full', () => {
    expect(isDate('04/08')).toBe(false);
});

test('invalid:no dashes', () => {
    expect(isDate('0934')).toBe(false);
});

//hexcode
test('valid', () => {
    expect(isHexColor('#FFFFFF')).toBe(true);
});

test('valid', () => {
    expect(isHexColor('#abcdef')).toBe(true);
});


test('invalid:; not allowed', () => {
    expect(isHexColor(';;;')).toBe(false);
});

test('invalid: 5 length', () => {
    expect(isHexColor('#33333')).toBe(false);
});