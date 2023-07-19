import express from "express";
import {upload, watch, edit, deleteVideo} from "../controllers/videoControllers"

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/upload", upload); 

export default videoRouter;