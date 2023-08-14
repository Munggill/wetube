import express from "express";
import { getJoin, postJoin, login } from "../controllers/userControllers";
import { home, search } from "../controllers/videoControllers";

const rootRouter = express.Router();   

rootRouter.get("/search", search); 
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/", home); 
rootRouter.get("/login", login); 

export default rootRouter;

// 재 Commit을 위한 임시 주석