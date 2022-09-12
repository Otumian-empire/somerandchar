const { ALNUM_CHAR_SET, DEFAULT } = require("./constant");
const { isString, isNumber } = require("./helper");

module.exports = class Generator {
  constructor() {
    this._size = DEFAULT.SIZE;
    this._charSet = ALNUM_CHAR_SET;
  }

  _genChars(chars, size) {
    let randChars = DEFAULT.CHAR;
    const rangeConstant = chars.length;

    for (let i = 0; i < size; i++) {
      randChars += chars[Math.floor(Math.random() * rangeConstant)];
    }

    return randChars;
  }

  toString() {
    if (!this._charSet || !isString(this._charSet)) {
      return DEFAULT.CHAR;
    }

    if (!this._size || !isNumber(this._size) || this._size < 1) {
      return DEFAULT.CHAR;
    }

    return this._genChars(this._charSet, this._size);
  }
};
