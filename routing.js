// this file will contain code to redirect request and store that message into separate file

// importing create server function from http module
import { createServer } from 'http';

// importing writeFileSync function from fs module 
import { writeFileSync } from 'fs';

const server = createServer((req,res) => {
    // get url from client
    const url = req.url;
    // get url method from client
    const method = req.method;
    
    // matching the url for various website pages
    // for home
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message </title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    // for /message url
    if (url === '/message' && method === 'POST'){
        // this line will create a text file with dummy font in it
        // to parse data from the user we'll use the given below format
        // Step 1: listen to data event
        const body = []; // line create an empty array  
        // this given code block will get triggered on data event and push data into empty array
        req.on('data', (chunk) => {
            body.push(chunk);           
        });
        
        // this even will be triggered on end event and 
        req.on('end', () => {
            // this line will convert buffer to string
            const parsedBody = Buffer.concat(body).toString();
            // this line will separate 
            const message = parsedBody.split('=')[1];
            // this line will write content of message to message.txt
            writeFileSync('message.txt',message);
        });

        // Respond to the client
        res.statusCode = 302; // HTTP status for redirection
        res.setHeader('Location', '/'); // Redirect to the home page
        return res.end();
    }


});


server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});



