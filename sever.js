const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const aname = 'Pikachu';
const message = `Hello, ${name}!`;

//OBject

const user = {name:'Pikachu',age: 75}
const {name, age} = user;

// Array 
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

const fetchData = () => {
    return new Promise((resolve, reject) => {
      // Async operation
    });
  };

  const getData = async () => {
    try {
      const data = await fetchData();
    } catch (error) {
      console.error(error);
    }
  };