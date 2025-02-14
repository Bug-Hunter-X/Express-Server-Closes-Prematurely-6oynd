const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const server = app.listen(3000, () => {
  console.log('Server listening on port 3000');

  // Handle SIGINT (Ctrl+C) gracefully
  process.on('SIGINT', () => {
    console.log('Shutting down gracefully...');
    server.close(() => {
      console.log('Server closed.');
      process.exit(0);
    });
  });
});
