const mongoose= require('mongoose')


exports.connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB Connected");
        
    }catch(err){
        console.error(err.message);
    }
}