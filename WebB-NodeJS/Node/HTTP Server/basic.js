//step 1-we have to import http module
//step 2-by using a inbuilt method from http module, we have to create http server
//writeHead()= For Set Content Type  we will use this method to difine the content type(status code)
//step 3-for starting(run) server

//! Step 1: Import the http module
const http = require("http");

//! Step 2: Create the server      //callback fun
const server = http.createServer((req, res) => {
    //? req → request from client
    //? res → response from server

    //* Log request details
    console.log(`Received ${req.method} request for:${req.url}`);

    //* Set response header and status code
    res.writeHead(200, { "Content-Type": "text/plain" });
    //* Send response to client
    res.end("Hello, welcome to my Node.js server!");
});

//! Step 3: Define port
const PORT = 5000
//! Step 4: Listen/Start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log("Press ctrl+C to stop the server");

});
