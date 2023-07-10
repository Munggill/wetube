import express from "express";
import { join } from "../controllers/userControllers";
import { trending } from "../controllers/videoControllers";

const globalRouter = express.Router();   

globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;
