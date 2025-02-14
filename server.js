const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const server = app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// ... other code ...

// Incorrectly close server
server.close(); // This will close the server prematurely, likely causing issues if you are expecting it to stay open.