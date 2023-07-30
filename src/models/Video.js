import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title:{type: String, require : true},
    description:{type: String, require : true},
    createdAt:{type : Date, required:true, default : Date.now},
    hashtags:[{type:String}],
    meta:{
        views:{type:Number, default : 0, required : true},
        rating:{type:Number, default: 0, required : true},
    },
});

const videoModel = mongoose.model("Video", videoSchema);
export default videoModel;