const fs =require('fs')
const path = require('path')
// console.log(fs);

//!Define a folder and file path
const folderPath=path.join(__dirname,"newFolder")
const filePath = path.join(folderPath,"example.txt")
// console.log(folderPath);
// console.log(filePath);

//!Step-1 : Create a durectory if it doesn't exists
if(!fs.existsSync(folderPath)){
    //?Create the folder
    fs.mkdirSync(folderPath)
    console.log("Folder Created");
}

//!Step-2 : Create and write to a file
fs.writeFileSync(filePath,"This is the content for new file")

//!Step-3 : Append or Add multiple content
fs.appendFileSync(filePath," \n multiple line 1 \n another line")

//!Step-4 : Read the file content 
const content=fs.readFileSync(filePath,'utf-8')
console.log(content);

//!Step-5 : Delete the file
fs.unlinkSync(filePath)



