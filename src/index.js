const ALNUM_CHAR_SET = "1234567890";
const ALPHA_CHAR_SET = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxZz_-";
const ALPHANUM_CHAR_SET =
  "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxZz_-1234567890";

class Generator {
  constructor() {
    this._size = 6;
    this._charSet = ALNUM_CHAR_SET;
  }

  toString() {
    if (!this._charSet || this._size < 1) {
      return "";
    }

    let randChars = "";

    const rangeConstant = this._charSet.length;

    for (let i = 0; i < this._size; i++) {
      randChars += this._charSet[Math.floor(Math.random() * rangeConstant)];
    }

    return randChars;
  }
}

class Builder {
  constructor() {
    this.randGen = new Generator();
  }

  alnum() {
    this.randGen._charSet = ALNUM_CHAR_SET;
    return this;
  }

  alpha() {
    this.randGen._charSet = ALPHA_CHAR_SET;
    return this;
  }

  alphanum() {
    this.randGen._charSet = ALPHANUM_CHAR_SET;
    return this;
  }

  customSet(charSet = "") {
    this.randGen._charSet = charSet;
    return this;
  }

  size(size = 6) {
    this.randGen._size = size;
    return this;
  }

  toString() {
    return this.randGen.toString();
  }
}

module.exports = Builder;
