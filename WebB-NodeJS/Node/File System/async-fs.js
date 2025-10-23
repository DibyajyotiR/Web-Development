const fs=require('fs').promises
const path = require('path')
// console.log(fs);

//! Define a folder and file path
const folderPath=path.join(__dirname,"asyncFolder")
const filePath=path.join(folderPath,"newFile.pdf")
// console.log(folderPath);
// console.log(filePath);

//* Step-1: Create a directory if it doesn't exists
async function createFolder(){
    try{
        await fs.access(folderPath)
    }
    catch{
        await fs.mkdir(folderPath)
        console.log("Folder got Created"); 
    }
}
createFolder()

//* Step-2: Create and write to a file
async function  writeFile() {
    try{
        await fs.writeFile(filePath,"This is a new file \n")
        console.log("File Created");
        
    }
    catch{
        console.log(err);
        
    }
}
// writeFile()

//* Step-3: Append or add multiple content
async function appendFile(){
    try{
        await fs.appendFile(filePath,"This is a 2nd file \n")
    }
    catch (err){
        console.log(err);
    }
}
// appendFile()

//* Step-4: Read the file content
async function readFile(){
    try{
        const content=await fs.readFile(filePath,"utf-8")
        console.log(content);
    }
    catch{
        console.log(err);
        
    }
}
readFile()

//* Step-5: Delete the file
async function deleteFile(){
    try{
        await fs.unlink(filePath)
        console.log("File Deleted"); 
    }
    catch{
        console.log(err);
    }
}
deleteFile()
