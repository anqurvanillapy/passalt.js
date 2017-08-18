'use strict'

const crypto = require('crypto')

// Generate salt string by given length.
function generateSalt (len) {
  return crypto.randomBytes(Math.ceil(len / 2)).toString('hex').slice(0, len)
}

// Hash the password using SHA-512 with salt.
function saltPassword (salt, passwd) {
  let hash = crypto.createHmac('sha512', salt)
  hash.update(passwd)
  return hash.digest('hex')
}

// Generate a password hash (or a "token").
function generate (passwd) {
  let salt = generateSalt(16)
  return `sha512$${salt}$${saltPassword(salt, passwd)}`
}

// Check a password hash.
function check (token, passwd) {
  let [_h, salt, hash] = token.split('$')
  _h = saltPassword(salt, passwd)
  return hash === _h
}

module.exports = [
  generate, check
]
