//! Step 1: Import the http module
const { log } = require('console');
const http = require('http');
//! Step 2: Create the server  
const server =http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    if(req.url==='/'&& req.method==='GET'){
        req.statusCode=200
        res.end("<h1>Home page</h1><P>welcome to my home page !</p>")
    }else if(req.url==='/about'&&req.method==='GET'){
        req.statusCode=200
        res.end("<h1>About page</h1><P>welcome to my About page !</p>")
    }else if(req.url==='/contact'&&req.method==='GET'){
        req.statusCode=200
        res.end("<h1>Contact page</h1><P>welcome to my Contact page !</p>")
    }else{
        res.statusCode=404
        res.end("<h1>404-Page Not Found</h1>")
    }
})
//! Step 3: Define port
const PORT=5000
//! Step 4: Listen/Start the server
server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log("Press ctrl+C to stop the server");

})