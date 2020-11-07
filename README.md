# somerandchar

## Install

## Sample

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
