const http = require("http");

const { readFileSync } = require("fs");

const mainK = readFileSync("./kairow/index.html");
const cssK = readFileSync("./kairow/assets/index.3fce1f81.css");
const jsK = readFileSync("./kairow/assets/index.01332571.js");
const jpgK = readFileSync("./kairow/assets/kairow.8eeb5446.jpg");
const universeK = readFileSync("./kairow/assets/myUniverse.1362bf1f.mp3");

const server = http.createServer((request, response) => {
  console.log(request.url);
  const myURL = request.url;

  if (myURL === "/kairow") {
    response.writeHead(200, { "content-type": "text/html" });
    response.write(mainK);
  } else if (myURL === "/assets/index.3fce1f81.css") {
    response.writeHead(200, { "content-type": "text/css" });
    response.write(cssK);
  } else if (myURL === "/assets/index.01332571.js") {
    response.writeHead(200, { "content-type": "text/javascript" });
    response.write(jsK);
  } else if (myURL === "/assets/kairow.8eeb5446.jpg") {
    response.writeHead(200, { "content-type": "image/jpg" });
    response.write(jpgK);
  } else if (myURL === "/assets/myUniverse.1362bf1f.mp3") {
    response.writeHead(200, { "content-type": "auido/mp3" });
    response.write(universeK);
  }
  // if (request.url === "/") {
  //   response.write("Home page");
  // } else if (request.url === "/about") {
  //   response.write("About page");
  // } else if (request.url === "/kairow") {
  //   response.write("Kairow");
  // } else response.write("Page not found :(");
  response.end();
});

// protocol: domainname : portnumber
// http: localhost : 5000
// http: 127.0.0.1 : 5000

server.listen(5000);
