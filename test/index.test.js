const somerandchar = require("../src");

const assert = require("assert");

describe("Test Default `somerandchar`", () => {
  beforeEach(() => {
    somerandchar.size(6);
  });

  it("returns 6 characters when charset and size is not passed", () => {
    const EXPECTED_SIZE = 6;

    assert.strictEqual(somerandchar.toString().length, EXPECTED_SIZE);
  });
});

describe("Test `somerandchar` with size = 16", () => {
  beforeEach(() => {
    somerandchar.size(6);
  });

  const PASSED_SIZE = 16;
  const EXPECTED_SIZE = 16;

  it("returns 16 characters when alnum method is called", () => {
    assert.strictEqual(
      somerandchar.size(PASSED_SIZE).alnum().toString().length,
      EXPECTED_SIZE
    );
  });

  it("returns 16 characters when alpha method is called", () => {
    assert.strictEqual(
      somerandchar.size(PASSED_SIZE).alpha().toString().length,
      EXPECTED_SIZE
    );
  });

  it("returns 16 characters when alphanum method is called", () => {
    assert.strictEqual(
      somerandchar.size(PASSED_SIZE).alphanum().toString().length,
      EXPECTED_SIZE
    );
  });
});

describe("Test `somerandchar` with diversity", () => {
  beforeEach(() => {
    somerandchar.size(6);
  });

  it("returns empty string when empty custom charset is passed", () => {
    const EXPECTED_SIZE = 0;
    const PASSED_CHAR_SET = "";

    assert.strictEqual(
      somerandchar.customSet(PASSED_CHAR_SET).toString().length,
      EXPECTED_SIZE
    );
  });

  it("returns empty string when size = 0 is passed", () => {
    const EXPECTED_SIZE = 0;
    const CUSTOM_SIZE = 0;

    assert.strictEqual(
      somerandchar.size(CUSTOM_SIZE).toString().length,
      EXPECTED_SIZE
    );
  });

  it("returns empty string when size = -5 is passed", () => {
    const EXPECTED_SIZE = 0;
    const CUSTOM_SIZE = -5;

    assert.strictEqual(
      somerandchar.size(CUSTOM_SIZE).toString().length,
      EXPECTED_SIZE
    );
  });

  it("returns 128 characters when size = 128 is passed and alpha method called", () => {
    const CUSTOM_SIZE = 128;
    const EXPECTED_SIZE = 128;

    assert.strictEqual(
      somerandchar.size(CUSTOM_SIZE).alpha().toString().length,
      EXPECTED_SIZE
    );
  });

  it("returns 64 characters when size = 64 is passed and alphanum method called", () => {
    const CUSTOM_SIZE = 64;
    const EXPECTED_SIZE = 64;

    assert.strictEqual(
      somerandchar.size(CUSTOM_SIZE).alphanum().toString().length,
      EXPECTED_SIZE
    );
  });
});

describe("Test `somerandchar` with custom charset and size", () => {
  beforeEach(() => {
    somerandchar.size(6);
  });

  it("returns 13 characters when custom charset `SsOoMmEeRrAnNnDdCcHhAarR-_0` size = 13 is passed", () => {
    const CUSTOM_SIZE = 13;
    const CUSTOM_CHAR_SET = "SsOoMmEeRrAnNnDdCcHhAarR-_0";
    const EXPECTED_SIZE = 13;

    assert.strictEqual(
      somerandchar.customSet(CUSTOM_CHAR_SET).size(CUSTOM_SIZE).toString()
        .length,
      EXPECTED_SIZE
    );
  });
});

describe("Test `somerandchar` with repeated custom charset and not calling size method", () => {
  beforeEach(() => {
    somerandchar.size(6);
  });

  it("returns 6 characters when `AAA` is passed to customSet method", () => {
    const CUSTOM_CHAR_SET = "AAA";
    const EXPECTED_SIZE = 6;

    assert.strictEqual(
      somerandchar.customSet(CUSTOM_CHAR_SET).toString().length,
      EXPECTED_SIZE
    );
  });

  it("returns 6 characters of `A`, `AAAAAA`, when `AAA` is passed to customSet method", () => {
    const CUSTOM_CHAR_SET = "AAA";
    const EXPECTED_CHAR_SET = "AAAAAA";

    assert.strictEqual(
      somerandchar.customSet(CUSTOM_CHAR_SET).toString(),
      EXPECTED_CHAR_SET
    );
  });
});
