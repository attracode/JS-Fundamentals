#!/usr/bin/node

const arg = process.argv[2];
const size = parseInt(arg);

if (!arg || isNaN(size)) {
  console.log("Missing size");
} else if (size > 0) {
  let i = 0;
  while (i < size) {
    console.log("X".repeat(size));
    i++;
  }
}
// For negative numbers or 0, do nothing
