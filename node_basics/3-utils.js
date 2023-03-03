const addNumbers = (a, b) => {
  return a + b;
};

module.exports = addNumbers;

// module.exports.numberFunc = ;

// module.exports.secondDefinition = ;

// module.exports = {
//   numberFunc: {
//     addNumbers: (a, b) => {
//       return a + b;
//     },
//     definition: "Adding two numbers!",
//   },
//   secondDefinition: "Hello there!",
// };

console.log(module.exports.numberFunc.addNumbers(5, 6));
