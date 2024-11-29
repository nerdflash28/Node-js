<!-- this file will contain documentation for routing  -->
## basic routing code
```js

    const http = require('http')

    const server = http.createserver((req,res) => {
        const url = req.url;
        const method = req.method;
        if (url == '/'){
            res.write('This is home page');
            return res.end();
        }
    })