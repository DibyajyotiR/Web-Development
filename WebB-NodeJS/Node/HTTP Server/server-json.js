const { error } = require('console');
const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json')
    if(req.url==='/'&& req.method==='GET'){
        res.statusCode=200
        res.end(JSON.stringify({message: "Wecome to the API..."}))
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