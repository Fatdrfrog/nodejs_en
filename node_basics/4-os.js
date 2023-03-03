const os = require("os");

console.log(os);

console.log({
  userInfo: os.userInfo(),
  uptime: os.uptime(),
});
