import http from 'http';
const PORT = process.env.PORT;

// this line will create a custom server
const server = http.createServer((req,res) => {
    res.writeHead(200, {'content-type' : 'text/plain'});
    res.end('Hello world');
});

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
