const {
  ALNUM_CHAR_SET,
  ALPHA_CHAR_SET,
  ALPHANUM_CHAR_SET,
  DEFAULT,
} = require("./constant");

const Generator = require("./generator");

module.exports = class Builder {
  constructor() {
    this.generator = new Generator();
  }

  alnum() {
    this.generator._charSet = ALNUM_CHAR_SET;
    return this;
  }

  alpha() {
    this.generator._charSet = ALPHA_CHAR_SET;
    return this;
  }

  alphanum() {
    this.generator._charSet = ALPHANUM_CHAR_SET;
    return this;
  }

  customSet(charSet = DEFAULT.CHAR) {
    this.generator._charSet = charSet;
    return this;
  }

  size(size = DEFAULT.SIZE) {
    this.generator._size = size;
    return this;
  }

  toString() {
    return this.generator.toString();
  }
};
