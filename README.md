# somerandchar

[![Publish](https://github.com/Otumian-empire/somerandchar/actions/workflows/publish.yml/badge.svg)](https://github.com/Otumian-empire/somerandchar/actions/workflows/publish.yml)

somerandchar lets you generate random characters for your applications. You can generate some random characters of customizable length. You can also choose from the character set to generate these desired random characters from. The best part, somerandchar has no dependencies thus flexibly customizable.

## Install

### clone

`git clone https://github.com/Otumian-empire/somerandchar.git`

### npm

`npm i somerandchar`

## Usage

### Generate X numbers for token

```javascript
// Need 6 numbers for token
const somerandchar = require("somerandchar");
const builder = new somerandchar();

// call the size method and pass the designed size as integer
// call the alnum method to numeric characters
// call the toString method to return the token
const result = builder.size(6).alnum().toString();
console.log(result);

// 895208
// 650209
// 888880
```

### Generate long random alphabetic string for email verification

```javascript
// Need long random alphabetic string for email verification,
// as part of url
// call alpha method and pass 128 to the size method
const somerandchar = require("somerandchar");
const builder = new somerandchar();

const result = builder.size(128).alpha().toString();
console.log(result);

//xtXFwErgKznP_ijDuhuwgsrkeolqxjKOPqXtrUgskiBWuMpTodMrRjTkqRlEaqWibpcAtFkt_VVHCZuAqncKwthUtvK_kRmzFPRkAVo_noPNo-WQxipikVxZzFTvxevm
```

### Generate long random alphanumeric string for email verification

```javascript
// Need long alphanumeric characters as token for email verification,
// as part of url - call alphanum and pass 64 to the size method
const somerandchar = require("somerandchar");
const builder = new somerandchar();

const result = builder.alphanum().size(64).toString();

console.log(result);

// lpQRGXWKmvN9DnCTRIgIcSPWWlm5SWgsTn_-rlfufMpTdadp3CveOsR9dULu2ZFd
// B5V_mijVumPf-62gVo6LIqx2UfQ8M7XEJKhAguDG6Xes5-81gXCJzSmhNg72cQ30
```

## Customize somerandchar - With some other character sets

Pass a string to the `customSet` method any a preferred size, `n` to the `size` method.

```javascript
const somerandchar = require("somerandchar");
const builder = new somerandchar();

const size = 16;
const charSet =
  "johnDOEu997uwt0tq5--z_(hz5m)un(7jp68(3)htuwlh__-psq5w1pDAnceMoney";

const result = builder.customSet(charSet).size(size).toString();

console.log(result);

// tsn_oqc_8tDup7Aj
// _w(59oD0pp190-ut
```
