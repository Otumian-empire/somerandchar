const { Alnum, Alpha, AlphaNum, RandomCharGenerator } = require("./index")

const assert = require("assert")


describe("Test RandomCharGenerator", () => {

    it("returns 8 characters when Alnum is passed", () => {
        const SIZE = 8
        const alnum = new Alnum()
        const randCharGen = new RandomCharGenerator(alnum)

        const result = randCharGen.generateRandomChar()

        assert.strictEqual(result.length, SIZE)

    })

    it("returns 128 characters when Alpha is passed", () => {
        const SIZE = 128
        const alpha = new Alpha()
        const randCharGen = new RandomCharGenerator(alpha)

        const result = randCharGen.generateRandomChar()

        assert.strictEqual(result.length, SIZE)

    })

    it("returns 64 characters when Alphanum is passed", () => {
        const SIZE = 64
        const alphanum = new AlphaNum()
        const randCharGen = new RandomCharGenerator(alphanum)

        const result = randCharGen.generateRandomChar()

        assert.strictEqual(result.length, SIZE)

    })

})


describe("Test RandomCharGenerator with Custom option", () => {

    it("returns 12 characters when Alnum is passed", () => {
        const size = 12
        const char_set = "abXzfgqhwjn4ormtg_-SDfg"
        const randCharGen = new RandomCharGenerator({ size, char_set })

        const result = randCharGen.generateRandomChar()

        assert.strictEqual(result.length, size)

    })

    it("returns 0 characters when empty option is passed", () => {
        const size = 0
        const char_set = ""
        const randCharGen = new RandomCharGenerator({ size, char_set })

        const result = randCharGen.generateRandomChar()

        assert.strictEqual(result.length, size)

    })

})


describe("Test RandomCharGenerator with Custom option of Alnum - override size", () => {

    class CustomAlnum extends Alnum {
        constructor(size) {
            super().size = size
        }
    }

    it("returns 128 characters when Alnum is passed", () => {
        const size = 128
        const customAlnum = new CustomAlnum(size)
        const randCharGen = new RandomCharGenerator(customAlnum)

        const result = randCharGen.generateRandomChar()

        assert.strictEqual(result.length, size)

    })

})