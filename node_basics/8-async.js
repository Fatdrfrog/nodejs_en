const { writeFile, readFile } = require("fs");

writeFile("./string.txt", "Batman vs Naruto!", (err) => {
  if (err) {
    console.error(err);
    return;
  }

  readFile("./string.txt", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    writeFile("./string1.txt", `Spidey is the best, but ${data}`, (err) => {
      if (err) {
        console.error(err);
        return;
      }

      readFile("./string1.txt", "utf-8", (err, data2) => {
        if (err) {
          console.error(err);
          return;
        }

        console.log(`Final Result: ${data2}`);
      });
    });
  });
});

console.log("blocked");
