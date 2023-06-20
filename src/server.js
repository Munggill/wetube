import express from "express";
 
const PROT = 3999;

const app = express();

/**
 서버에서 클라이언트로 반환하는 것은 어떤 형태든 가능하다.
 이하 등등
 1. Json 형태
 2. 문자열 형태
 3. HTML형태
 4. Status Code
 */

function logger (req, res, next) {
    console.log(`${req.method} ${req.url}`);
    //return res.send({ message: "MiddleWareTest ==> Last res.end(json)111"} ); 
    next();
}

const getHandelHome = (req, res) => {
    return res.send({ message: "MiddleWareTest ==> Last res.end(json)222"} ); 
}

const getLoginHandle = (req, res) =>{
    return res.send("<h1> Login Handle</h1>"); 
}
const getHandleProtected = (req, res) =>{
    return res.send("Welcome to the private lounge.");
}

app.use(logger);  

app.get("/", getHandelHome);
app.get("/login",getLoginHandle);
app.get("/protected",getHandleProtected);
app.listen(PROT, () => console.log(`Server listenting on http://localhost:${PROT}`)); 