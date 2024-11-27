## Step 1: import module to create-server
```javascript
const http = require('http');
```

## Step 2: create function to listen request
```js
// create a server to handle requests
function rqListener(req,res) 
{
    // code to handle the request
}

// call the method to create server
http.createServer(rqListener);
```

## Step 3: creating server using callback function
```js
// method 1
http.createServer(funtion(req,res) {
    // code to handle the request
});

// method 2
http.createServer((req,res) => {
    // code to handle the request
    console.log(req)
})
```

## Step 4: listen to the request 
```js
// we need to create a variable to store createServer object
const server = http.createServer((req,res) => {
    console.log(req);
}) 

// create listen method 
server.listen(3000);
```

## Step 5: combine everything to create a server
```js
// import module
const http = require('http')

// create server method
const server = http.createServer((req,res) => {
    // code to handle the request
    console.log(req)
})

// create listening method
server.listen(3000);
```