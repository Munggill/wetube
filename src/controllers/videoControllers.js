import videoModel from "../models/Video";

// Video.find({},(error, videosDocument) => {});
// =======================================================
// server.js에서 pug 관련 설정을 해주었기 때문에 Express에서 
// pug 모듈로 render를 해준다.
// render는 view탬플릿과 탬플릿으로 보낼 변수의 인자를 같는다.
// =======================================================
export const home =  async(req, res) => {     
    try{
        const videos = await videoModel.find({})
        console.log(videos);
        return res.render("home", {pageTitle : "Home", videos:videos }); 
    } catch{
        console.log(Error);
        return res.render("server-error", {error : Error});
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

export const postUpload = async (req, res) => {
    const { title, description, hashtags } = req.body;
    try {    
        const video = new videoModel({
            title : title,
            description : description ,
            // createdAt : Date.now(),
            hashtags : hashtags.split(",").map(word => `#${word}`),
            meta:{
                views:0,
                rating:0
            }
        }); 
        await video.save(); 
        return res.redirect("/");
    }
    catch(error) {
        console.log(`EERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!${error}`);
        return res.render("upload", {pageTitle:"UploadVideo"});
    } 
};