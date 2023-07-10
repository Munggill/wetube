import express from "express";
import logger from "morgan";
import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import videoRouter from "./router/videoRouter";

const PORT = 3999; 
const app = express();
app.use(logger("dev"));   



app.use("/", globalRouter);
app.use("/videos", videoRouter); 
app.use("/users", userRouter); 
 
app.listen(PORT, () => console.log(`Server listenting on http://localhost:${PORT}`));