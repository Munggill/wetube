import Video from "../models/Video";

// Video.find({},(error, videosDocument) => {});
// =======================================================
// server.js에서 pug 관련 설정을 해주었기 때문에 Express에서 
// pug 모듈로 render를 해준다.
// render는 view탬플릿과 탬플릿으로 보낼 변수의 인자를 같는다.
// =======================================================
export const home =  async(req, res) => {     
    try{
        const videos = await Video.find({})
        return res.render("home", {pageTitle : "Home", videos:[] }); 
    } catch{
        return res.render("server-error");
    }    
};
export const watch = (req, res) => { 
    const { id } = req.params;  
    return res.render("watch", {pageTitle : `Watching :` });
};
export const getEdit = (req, res) => {    
    const { id } = req.params;  
    return res.render("edit", {pageTitle : `Editing :`});
};
export const postEdit = (req, res) => {   
    const { id } = req.params;
    //Form Action의 Value는 req.body로 받는다.
    const title = req.body.title; 
    //const { title } = req.body;
    console.log(title);
    
    return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle : "Upload Video"});
};

export const postUpload = (req, res) => {

    // here we will add a video to the videos array.
    return res.redirect("/");
};