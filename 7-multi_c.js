#!/usr/bin/node

const arg = process.argv[2];
const count = parseInt(arg);

if (!arg || isNaN(count)) {
  console.log("Missing number of occurrences");
} else if (count > 0) {
  let i = 0;
  while (i < count) {
    console.log("C is fun");
    i++;
  }
}
// For negative numbers or 0, do nothing (prints nothing)
