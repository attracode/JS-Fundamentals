#!/usr/bin/node

const args = process.argv.slice(2); // Only the user-passed arguments

if (!args[0]) {
  console.log("No argument");
} else {
  console.log(args[0]);
}
