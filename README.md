# somerandchar

somerandchar lets you generate random characters for your applications. You can generate some random characters of customizable length. You can also choose from the character set to generate these desired random characters from. The best part, somerandchar has no dependencies thus flexibly customizable.

## Install

### clone

`git clone https://github.com/Otumian-empire/somerandchar.git`

### npm

`npm i somerandchar`

## Usage

### Generate X numbers for token

```javascript
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

### Generate long random alphabetic string for email verication

```javascript
// Need long random alphabetic string for email verication,
// as part of url - Alpha returns 128 characters

const { Alpha, RandomCharGenerator } = require("somerandchar");

const longRandStr = new RandomCharGenerator(new Alpha());
console.log(longRandStr.generateRandomChar());

// -ILcOUfDzqzLzFtjWfgupdilsCTgHfhsBxckWokekH-LeAOoAiwmTgfjbLVaGzILEgVFQpTwivuJVaVOadKuQLwIJwPdUFiAKnQgkqXpASEIlzJhP_UL-jOuvmkCOtGj
```

### Generate long random alphanumeric string for email verication

```javascript
// Need long alphanumeric characters as token for email verication,
// as part of url - AlphaNum returns 64 characters

const { AlphaNum, RandomCharGenerator } = require("somerandchar");

const result = new RandomCharGenerator(new AlphaNum());

console.log(result.generateRandomChar());

// tUwmZE7PU8UImjEtwHRGF5mG30F7c9jmHL_TnCOQ956Usw_FALQihABC0F9V11-T
// DK3PCLtBEKS625KsONF064BRMxKCP-Qc7gMqRbH10dzITb5wtfT-_iW6qqEoqZTM
// xoHkrxF7x1UHtK30bxZRI88oNouJnRzfq_Kj-shGbb8ffmxc5ls3IpvAUeRerLVm
```

## Modify the internals of somerandchar

### Override a sample class

> super().char_set = "some string character set of your choice"

```javascript
class CustomAlnum extends Alnum {
  constructor(size) {
    super().size = size;
  }
}

const size = 128;

const customAlnum = new CustomAlnum(size);
const randCharGen = new RandomCharGenerator(customAlnum);

const result = randCharGen.generateRandomChar();

console.log(result);

// 71008276754097452371346850771953727143571590264375932186817824239670462309173275913598287285550337958838560274112638134932579800
```

### Pass an obejct of size and char_set instead of extending a class

```javascript
const size = 16;
const char_set =
  "johnDOEu997uwt0tq5--z_(hz5m)un(7jp68(3)htuwlh__-psq5w1pDAnceMoney";

const option = { size, char_set };
const randCharGen = new RandomCharGenerator(option);

const result = randCharGen.generateRandomChar();

console.log(result);

// qt(mD(Mm_5chAt8D
// psyA9_qEn7p756on
// q__39h5no-j_6t7M
```
