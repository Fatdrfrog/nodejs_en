const { writeFileSync, readFileSync } = require("fs");

//
console.log("first");
writeFileSync("./marvel.txt", "\nI am Groot!\n", { flag: "a" });

console.log("second");
const myTxtFileContent = readFileSync("./marvel.txt", "utf-8");

console.log(myTxtFileContent);

console.log("blocked");
