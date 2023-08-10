import express from "express";
import { join, login } from "../controllers/userControllers";
import { home, search } from "../controllers/videoControllers";

const globalRouter = express.Router();   

globalRouter.get("/search", search); 
globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
console.log("VideoRouter에 serch있습니다."); 

export default globalRouter;

// 재 Commit을 위한 임시 주석