import mongoose from "mongoose";

export const formatHashTags = (hashtags) =>
    hashtags.split(",").map((word) => (word.startsWith("#") ? word : `#${word}`));

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

// videoSchema.pre("save", function(){
//     this.hashtags = this.hashtags[0]
//         .split(",")
//         .map((word) => (word.startsWith("#") ? word : `#${word}`))
// });

const videoModel = mongoose.model("Video", videoSchema);
export default videoModel;

// 재 Commit을 위한 임시 주석