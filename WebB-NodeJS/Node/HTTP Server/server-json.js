const { error } = require('console');
const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json')
    if(req.url==='/'&& req.method==='GET'){
        res.statusCode=200
        res.end(JSON.stringify({message: "Wecome to the API..."}))

        //?  res.end(JSON.stringify({message: "Wecome to the API..."}))  → This line converts the JavaScript object {message: "Wecome to the API..."} into a JSON string format before sending it as a response to the client. The JSON.stringify() method is used to serialize the JavaScript object into a JSON string, which can be easily transmitted over the network and understood by clients that consume the API.
    }else if(req.url==='/users'&&req.method==='GET'){
        res.statusCode=200
        const users=[{id:1,name:"Smith",id:2,name:"Ward"}]
        res.end(JSON.stringify(users))
    }else if(req.url==='/product' && req.method==='GET'){
        res.statusCode=200
        const product=[{id:101,name:"Mobile",price:50000}]
        res.end(JSON.stringify(product))
    }else{
        res.statusCode=404
        res.end(JSON.stringify({error:"Error,page not found"}))
    }
})
const PORT=5000
server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
        console.log("Press ctrl+C to stop the server");
})