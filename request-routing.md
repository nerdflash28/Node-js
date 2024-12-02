<!-- this file will contain documentation for routing  -->
## Request Methods
* To print important request parameters we use the below code
```js

    const http = require('http')

    const server = http.createserver((req,res) => {
        // this will print givent ur, request method, header attached with that request
        console.log(req.url, req.method, req.headers);
    });

    server.listen(3000);
```

## Understanding Response Methods
* sending Basic HTML page using response method

```js
    const http = require('http');

    const server = http.createServer((req,res) => {
        // setting the header
        res.setHeader('Content-Type','text/html');
        // writing HTML page to the header
        res.write('<html>');
        res.write('<head><title>Test Page</title></head>');
        res.write('<body>welcome to my Home page</body>');
        res.write('</html>');
        // Ending the header
        res.end();
    });

    server.listen(3000);
```


