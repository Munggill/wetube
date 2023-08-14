import express from "express";
import logger from "morgan";
import rootRouter from "./router/rootRouter";
import userRouter from "./router/userRouter";
import videoRouter from "./router/videoRouter";

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

// Express는 HTML의 Form 형식을 이해하지 못하기 때문에 해당 미들웨어를 사용하여
// Form의 Values를 이해할 수 있도록 하고 우리가 쓸 수 있는 자바스크립트 형식(객체)로 전환해준다
// req.body를 받을때 사용..
app.use(express.urlencoded({exteded:true}));

app.use("/", rootRouter);    
app.use("/videos", videoRouter); 
app.use("/users", userRouter); 

export default app

// 재 Commit을 위한 임시 주석