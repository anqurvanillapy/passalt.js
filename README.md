# passalt.js

Generate/check password hash in Node.js, like `generate_password_hash` and
`check_password_hash` in `werkzeug.security`.

Format: `sha512$salt$hash`

## Install

Clone and `npm i`.

```bash
$ git clone https://github.com/anqurvanillapy/passalt.js.git
$ cd passalt.js/
$ npm i
```

## APIs and Usage

- `passalt.generate(passwd)`
- `passalt.check(hash, passwd)`

```js
import 'passalt'

const hash = passalt.generate('foo')
passalt.check(hash, 'foo')
// => true
passalt.check(hash, 'bar')
// => false
```

## License

ISC
