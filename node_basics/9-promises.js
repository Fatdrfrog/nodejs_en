const { writeFile, readFile } = require("fs").promises;
// const util = require("util");

// const writePromise = util.promisify(writeFile);
// const readPromise = util.promisify(readFile);

// writeFile("./string.txt", "Batman blabla")
//   .then((data) => {
//     readFile("./string.txt", "utf-8")
//       .then((data2) => console.log(data2))
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const startWriting = async () => {
  try {
    await writeFile("./string.txt", "Batman blabla");
    await readFile("./string.txt", "utf-8");
    await writeFile("./string1.txt", "Batman blabla");
    const readResult2 = await readFile("./string1.txt", "utf-8");

    return readResult2;
  } catch (err) {
    console.log(err);
  }
};

startWriting();

console.log("blocked");
