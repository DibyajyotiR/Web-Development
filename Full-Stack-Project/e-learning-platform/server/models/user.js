const mongoose = require('mongoose')
const bcrypt=require('bcryptjs')
//bcryptjs :- it is library of javascript,which give us a feature to encrypt and decrypt the password
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:false
    }
},{timestamps:true}
)
userSchema.pre("save",async function(){
    if(!this.isModified("password"))
        return;
    this.password=await bcrypt.hash(this.password,10)
})
module.exports = mongoose.model('User', userSchema)