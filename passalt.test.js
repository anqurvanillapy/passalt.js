'use strict'

const [generate, check] = require('./index')

test('generated token of password "foo" is 152', () => {
  expect(generate('foo').length).toBe(152)
})

test('password "foo" is valid, but "bar" is invalid', () => {
  const hash = generate('foo')
  expect(check(hash, 'foo')).toBe(true)
  expect(check(hash, 'bar')).toBe(false)
})
