console.log(__dirname);
console.log(__filename);
setTimeout(function () {
  console.log("I will be printed after 4 seconds");
}, 4000);

setInterval(() => {
  console.log("Print me every 1 second");
}, 1000);
