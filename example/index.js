const somerandchar = require("@otumian-empire/somerandchar");
const builder = new somerandchar();

// default, calling toString on builder instance
console.log(builder.toString());

// this is the same as above
// call the size method and pass the desired size as integer
// call the alnum method to use numeric characters
// call the toString method to return the token
let result = builder.size(6).alnum().toString();
console.log(result);

// Need long random alphabetic string for email verification,
// as part of url
// call alpha method and pass 128 to the size method
result = builder.size(128).alpha().toString();
console.log(result);

// Need long alphanumeric characters as token for email verification,
// as part of url - call alphanum and pass 64 to the size method
result = builder.alphanum().size(64).toString();
console.log(result);

// Passing a custom character set
const size = 16;
const charSet =
  "johnDOEu997uwt0tq5--z_(hz5m)un(7jp68(3)htuwlh__-psq5w1pDAnceMoney" +
  Date.now();

result = builder.customSet(charSet).size(size).toString();
console.log(result);

// calling alnum after alphanum overrides the char set
result = builder.alphanum().alnum().size(64).toString();
console.log(result);
