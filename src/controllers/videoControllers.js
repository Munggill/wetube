// =======================================================
// server.js에서 pug 관련 설정을 해주었기 때문에 Express에서 
// pug 모듈로 render를 해준다.
// =======================================================
export const trending = (req, res) => res.render("home");
export const see = (req, res) => { 
    return res.send(`Watch Video ID ${req.params.id}`);
}
export const edit = (req, res) => { 
    res.send("Edit");
}
export const search =(req, res) => res.send("Search");
export const upload =(req, res) => {
    console.log("TEST>");
    res.send("<h1>Upload</h1>");
}
export const deleteVideo =(req, res) => res.send("DeleteVideo");