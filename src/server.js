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

const getHandelHome = (req, res) => {
    return res.send({ message: "Hello NodeJs1"} );
}

app.get("/", getHandelHome);
app.get("/login", (req, res) => res.send("login Here"));

app.listen(PROT, () => console.log(`Server listenting on http://localhost:${PROT}`)); 