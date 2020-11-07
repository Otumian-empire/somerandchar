# somerandchar

## Install

### clone

`git clone https://github.com/Otumian-empire/somerandchar.git`

### npm

-

## Sample

```javascript
// Need 6 numbers for token - Alnum
class Size6Alnum extends Alnum {
    constructor(size) {
        super().size = size
    }
}

const size = 6

const size6 = new Size6Alnum(size)
const result = new RandomCharGenerator(size6)

console.log(result.generateRandomChar())
// 4Hn-eT
// 1Uf0D-
// X7cDNM
// ZEnHVb
// QDxO1q
```

```javascript
// Need long random alphabetic string for email verication, as part of url - Alpha
const longRandStr = new RandomCharGenerator(new Alpha())
console.log(longRandStr.generateRandomChar())
// -ILcOUfDzqzLzFtjWfgupdilsCTgHfhsBxckWokekH-LeAOoAiwmTgfjbLVaGzILEgVFQpTwivuJVaVOadKuQLwIJwPdUFiAKnQgkqXpASEIlzJhP_UL-jOuvmkCOtGj
```

```javascript
// Need long alphanumeric characters as token for email verication - AlphaNum
const result = new RandomCharGenerator(new AlphaNum())

console.log(result.generateRandomChar())
// tUwmZE7PU8UImjEtwHRGF5mG30F7c9jmHL_TnCOQ956Usw_FALQihABC0F9V11-T
// DK3PCLtBEKS625KsONF064BRMxKCP-Qc7gMqRbH10dzITb5wtfT-_iW6qqEoqZTM
// xoHkrxF7x1UHtK30bxZRI88oNouJnRzfq_Kj-shGbb8ffmxc5ls3IpvAUeRerLVm
```

## Override

```javascript
class CustomAlnum extends Alnum {
    constructor(size) {
        super().size = size
    }
}

const size = 128

const customAlnum = new CustomAlnum(size)
const randCharGen = new RandomCharGenerator(customAlnum)

const result = randCharGen.generateRandomChar()

console.log(result)
// 71008276754097452371346850771953727143571590264375932186817824239670462309173275913598287285550337958838560274112638134932579800
```

## Pass an obejct of size and char_set

```javascript
const size = 16
const char_set = "johnDOEu997uwt0tq5--z_(hz5m)un(7jp68(3)htuwlh__-psq5w1pDAnceMoney"

const option = { size, char_set }
const randCharGen = new RandomCharGenerator(option)

const result = randCharGen.generateRandomChar()

console.log(result)
// qt(mD(Mm_5chAt8D
// psyA9_qEn7p756on
// q__39h5no-j_6t7M
```
