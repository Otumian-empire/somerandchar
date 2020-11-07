const ALNUM_CHAR_SET = "1234567890"
const ALPHA_CHAR_SET = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxZz_-"
const ALPHANUM_CHAR_SET = ALPHA_CHAR_SET + ALNUM_CHAR_SET


class Alnum {
    constructor() {
        this.size = 8
        this.char_set = ALNUM_CHAR_SET
    }
}


class Alpha {
    constructor() {
        this.size = 128
        this.char_set = ALPHA_CHAR_SET
    }
}


class AlphaNum {
    constructor() {
        this.size = 64
        this.char_set = ALPHANUM_CHAR_SET
    }
}


class RandomCharGenerator {
    constructor(option) {
        this.size = option.size
        this.char_set = option.char_set
    }

    generateRandomChar() {
        let randChars = ""
        const rangeConstant = this.char_set.length

        for (let i = 0; i < this.size; i++) {
            randChars += this.char_set[Math.floor(Math.random() * rangeConstant)]
        }

        return randChars
    }
}


module.exports = { Alnum, Alpha, AlphaNum, RandomCharGenerator }
