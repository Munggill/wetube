import express from "express";
import {upload, see, edit, deleteVideo} from "../controllers/videoControllers"

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/upload", upload); 

export default videoRouter;