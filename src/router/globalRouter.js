import express from "express";
import { join, login } from "../controllers/userControllers";
import { home } from "../controllers/videoControllers";

const globalRouter = express.Router();   

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
//globalRouter.get("/search", search);   

export default globalRouter;

// 재 Commit을 위한 임시 주석