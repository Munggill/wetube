import bcrypt from "bcrypt"
import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    email:{type:String, reuired: true, unique:true}, 
    username:{type:String, reuired: true, unique:true}, 
    password:{type:String, reuired: true }, 
    name:{type:String, reuired: true },  
    location : {type:String}
});

UsersSchema.pre("save", async function(){
    console.log("before : ", this.password);
    this.password = await bcrypt.hash(this.password, 5);
    console.log("after : ", this.password);
});

const UserModel = mongoose.model("User", UsersSchema);
export default UserModel;