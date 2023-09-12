import express from "express";
import {
    logout,
    edit, 
    remove, 
    startGithubLogin, 
    finishGithubLogin, 
    see
} from "../controllers/userControllers"
const userRouter = express.Router(); 

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get("/github/start", startGithubLogin); 
userRouter.get("/github/finish", finishGithubLogin); 

userRouter.get("/:id", see);
    
export default userRouter;

// 재 Commit을 위한 임시 주석