import express from "express";
import { 
    watch, 
    getEdit, 
    postEdit, 
    getUpload, 
    postUpload,
    deleteVideo
} from "../controllers/videoControllers"

const videoRouter = express.Router();

console.log("Parameter 진입111");
videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideo)
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;    

// 재 Commit을 위한 임시 주석