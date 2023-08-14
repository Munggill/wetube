import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    eamil:{type:String, reuired: true, unique:true}, 
    username:{type:String, reuired: true, unique:true}, 
    password:{type:String, reuired: true }, 
    name:{type:String, reuired: true },  
    location : {type:String}
});

const UserModel = mongoose.model("User", UsersSchema);
export default UserModel;