import bcrypt from "bcrypt"
import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    email:{type:String, required: true, unique:true},     
    username:{type:String, required: true, unique:true}, 
    password:{type:String, required: true }, 
    name:{type:String, required: true },  
    location : {type:String}
});

UsersSchema.pre("save", async function(){
    console.log("before : ", this.password);
    this.password = await bcrypt.hash(this.password, 5);
    console.log("after : ", this.password);
});

const UserModel = mongoose.model("User", UsersSchema);
export default UserModel;