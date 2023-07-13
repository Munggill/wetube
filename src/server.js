import express from "express";
import logger from "morgan";
import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import videoRouter from "./router/videoRouter";

const PORT = 3999; 
const app = express();
app.use(logger("dev"));   

// ======================================================
// 현재 디렉토리
// Node는 사실 Package.json에서 구동이 된다.
// 그럼으로 server.js의 경로인 src가 아닌 package.json의 경로인 
// WETUBE 경로가 현재 작업경로다.
// 아래는 Package.json을 실행시키는 예시 코드..
// npm run dev로 서버를 구동하면 아래의 노드 모듈이 실행됨.
//  "scripts": {
//    "dev": "nodemon --exec babel-node src/server.js"
//  },
// ======================================================
console.log(`server가 실행되는 경로 :${process.cwd()}`);
// ====================================================
// Express의 기능 중 view Engine을 설정하는 구문 
// npm i [pug] 모듈을 설치한 후 pug 모듈 사용을 선언한다.
// 해당 구문을 사용함으로, Express는 HTML을 Return하기 위해 pug 모듈을 사용한다.
// Express의 ivew endgine은 현재 작업중인 경로에서 views 경로를 찾는다.
// 위 내용으로 인해 views 디렉토리(폴더)를 생성해야 한다.
// ====================================================
app.set("view engine","pug");
// views의 실행 경로를 경로를 src/views로 변경한다.
app.set("views", process.cwd() + "/src/views");

app.use("/", globalRouter);
app.use("/videos", videoRouter); 
app.use("/users", userRouter); 
 
app.listen(PORT, () => console.log(`Server listenting on http://localhost:${PORT}`));