# somerandchar

`somerandchar` has two classes:

- `Generator` with a `toString` method
- `Builder` with with methods, `alnum`, `alpha`, `alphanum`, `customSet`, `size`, and `toString`.

`somerandchar` now uses the Builder Design Pattern [[0]][wiki-builder-pattern] [[1]][geeks-builder-pattern] [[2]][jsmanifest-builder-pattern] so that instead of creating new instance of `Alnum, Alpha and AlphaNum` class we call/chain `alnum, alpha and alphanum` methods.

`somerandchar` is now,

```js
// Need 6 numbers for token - Alnum
const somerandchar = require("somerandchar");

const randChar = somerandchar.alnum().toString();

console.log(randChar);

// 987803
// 563031
// 505220
// 150277
// 384343
```

and not

```js
// Need 6 numbers for token - Alnum

const { Alnum, RandomCharGenerator } = require("somerandchar");

// Extend the Alnum class and override the size attribute
class Size6Alnum extends Alnum {
  constructor(size) {
    super().size = size; // could be passed directly
  }
}

// create an instance of the Extended class - Size6Alnum
const size = 6;
const size6 = new Size6Alnum(size);

// create instance of RandomCharGenerator and call it's generateRandomChar()
const result = new RandomCharGenerator(size6);
console.log(result.generateRandomChar());

// 895208
// 650209
// 888880
// 070770
// 499237
```

The same functionality everywhere but less code. `generateRandomChar` is now called by the `toString` method, which returns the string desired.

## By Default

By default, `somerandchar.toString()` returns 6 characters numerical characters.

## alnum()

`alnum()` sets the character set to numerical string from zero to nine, `0123456789`.

## alpha()

`alpha()` sets the character set to alphabetic characters from `[A-za-z]` and includes, `-` and `_`.

## alphanum()

`alphanum()`sets the character set to numeric and alphabetic characters, including, `_` and `-`.

## customSet()

`customSet(s)`, where is some string, receives a string argument as the character set to generate the random characters from.

## size(n)

`size(n)` sets the number of characters to be returned.

## toString()

`toString()`returns a string of the desire character set and size.

## Style of import

The CommonJs style of import is used. `const somerandchar = require("somerandchar");`

## Test

`mocha` is used for testing. Install `mocha` and run `npm run test`.

#

[wiki-builder-pattern]: https://en.wikipedia.org/wiki/Builder_pattern
[geeks-builder-pattern]: https://www.geeksforgeeks.org/builder-design-pattern/
[jsmanifest-builder-pattern]: https://jsmanifest.com/the-builder-pattern-in-javascript/
