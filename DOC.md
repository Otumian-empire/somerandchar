# somerandchar

`somerandchar` has four classes: `Alnum, Alpha, AlphaNum and RandomCharGenerator`. `Alnum, Alpha and AlphaNum` are `options` (object) that could be passed into `RandomCharGenerator` to return a set of random characters. Every `option` class (object) has two properties, `size` and `char_set`.

## Size and Char_set

- `size`: the number of characters to be generated
- `char_set`: the set of characters from which the random characters are generated from

## Alnum

`Alnum` is a set of numerical characters from zero to nine, `0123456789`. By default, returns 8 characters.

## Alpha

`Alpha` is a set of aphabetic characters from `[A-za-z]` and includes, `-` and `_`. By default, returns 128 characters.

## AlphaNum

`AlphaNum` is a set of characters made up of `Alnum` and `Alpha` characters. By default, returns 64 characters.

## RandomCharGenerator

`RandomCharGenerator` has a constructor, which takes an `option` as argument. An `option` can be: `Alnum, Alpha, AlphaNum` or an `Object` of `size` and `char_set` properties.

## Style of import

The CommonJs style of import is used. `const randCharGen = require("somerandchar");`

## Test

`mocha` is used for testing. Install `mocha` and run `npm run test`.
