const DataModel=require('../models/dataModel')

exports.createData=((req,res)=>{
    const data=new DataModel(req.body)
    data.save()
        .then(()=>res.status(201).json({message:'Data saved successfully', content:data}))
        .catch((err)=>res.status(400).json({error:err.message}))
})

exports.getData=async(req,res)=>{
    try{
        const data=await DataModel.find()
        res.json({message:'Data Recieved',content:data})
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

exports.getById=async(req,res)=>{
    try{
        const data=await DataModel.findById(req.params.id)
        res.json({message:'Data Found',data})
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

exports.updateData=async(req,res)=>{
    const id=req.params.id
    try{
        const data =await DataModel.findByIdAndUpdate(id,req.body,{new:true})
        if(!data){
            return res.status(404).json({message:'Post Not Found'})
        }res.json({message:'Data Updated',data})
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

exports.deleteData=async(req,res)=>{
    const id=req.params.id
    try{
        const data =await DataModel.findByIdAndDelete(id)
        if(!data){
            return res.status(404).json({message:'Post Not Found',data})
        }res.json({message:'Data Deleted',data})
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

// module.exports={createData,getData,getById,updateData,deleteData}