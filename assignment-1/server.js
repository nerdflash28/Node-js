const http = require('http');
const fs = require('fs');

// HTML content for the web page
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Node.js Web Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 50px;
    }
    h1 {
      color: #007BFF;
    }
    p {
      color: #555;
    }
  </style>
</head>
<body>
  <h1>Welcome to My Web Page</h1>
  <p>This page is served using pure Node.js!</p>
</body>
</html>
`;

// Create a server
const server = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Send the HTML content as the response
  res.end(htmlContent);
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
