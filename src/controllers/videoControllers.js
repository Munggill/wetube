const fakeUser ={
    username:"안명길",
    loggedIn: false,
}

// =======================================================
// server.js에서 pug 관련 설정을 해주었기 때문에 Express에서 
// pug 모듈로 render를 해준다.
// render는 view탬플릿과 탬플릿으로 보낼 변수의 인자를 같는다.
// =======================================================
export const trending = (req, res) => res.render("home", {pageTitle : "Home", fakeUser:fakeUser});
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search =(req, res) => res.send("Search");
export const upload =(req, res) => {
    console.log("TEST>");
    res.send("<h1>Upload</h1>");
}
export const deleteVideo =(req, res) => res.send("DeleteVideo");