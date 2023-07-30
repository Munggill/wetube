import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title:{
        type: String, 
        require : true, 
        trim : true, 
        minLength : 5, 
        maxLength : 80
    },
    description:{
        type: String, 
        require : true, 
        trim : true, 
        minLength : 5, 
        maxLength : 140 
    },
    createdAt:{type : Date, required:true, default : Date.now},
    hashtags:[{type:String, trim : true}],
    meta:{
        views:{type:Number, default : 0, required : true},
        rating:{type:Number, default: 0, required : true},
    },
});

const videoModel = mongoose.model("Video", videoSchema);
export default videoModel;