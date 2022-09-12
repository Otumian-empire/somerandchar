const { isNumber, isString } = require("../src/helper");

const assert = require("assert");

describe("Test isNumber", () => {
  it("returns true when 12 passed", () => {
    assert.strictEqual(isNumber(12), true);
  });

  it("returns true when 2 passed", () => {
    assert.strictEqual(isNumber(2), true);
  });

  it("returns false when ` ` passed", () => {
    assert.strictEqual(isNumber(" "), false);
  });

  it("returns false when `` passed", () => {
    assert.strictEqual(isNumber(""), false);
  });

  it("returns false when `2` passed", () => {
    assert.strictEqual(isNumber("2"), false);
  });

  it("returns false when [] passed", () => {
    assert.strictEqual(isNumber([]), false);
  });
});

describe("Test isString", () => {
  it("returns true when `hello` passed", () => {
    assert.strictEqual(isString("hello"), true);
  });

  it("returns true when `w` passed", () => {
    assert.strictEqual(isString("w"), true);
  });

  it("returns true when ` ` passed", () => {
    assert.strictEqual(isString(" "), true);
  });

  it("returns true when `` passed", () => {
    assert.strictEqual(isString(""), true);
  });

  it("returns true when `2` passed", () => {
    assert.strictEqual(isString("2"), true);
  });

  it("returns false when 2 passed", () => {
    assert.strictEqual(isString(2), false);
  });

  it("returns false when [] passed", () => {
    assert.strictEqual(isString([]), false);
  });
});
