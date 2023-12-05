
// Import the required modules
const express = require('express');
const port = 8000;

// Create an instance of the Express server
const app = express();
const cors = require('cors');
app.use(cors());

//setup chat server
const chatServer = require('http').Server(app);
const chatSockets = require('./config/socket').chatSockets(chatServer);
chatServer.listen(5000);
console.log('chat server is listening on port 5000');

// Define the route for the root path
app.use('/', require('./routes/index'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
