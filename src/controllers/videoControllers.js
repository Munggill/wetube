import videoModel from "../models/Video";

// Video.find({},(error, videosDocument) => {});
// =======================================================
// server.js에서 pug 관련 설정을 해주었기 때문에 Express에서 
// pug 모듈로 render를 해준다.
// render는 view탬플릿과 탬플릿으로 보낼 변수의 인자를 같는다.
// ===================================================== == 
export const home =  async(req, res) => {     
    try{
        const videos = await videoModel.find({}) 
        return res.render("home", {pageTitle : "Home", videos:videos }); 
    } catch{ 
        return res.render("server-error", {error : Error});
    }    
};
export const watch = async (req, res) => { 
    try{        
        const { id } = req.params;  
        const video = await videoModel.findById(id);
        if(video){
            return res.render("watch", {pageTitle : video.title, video : video });
        }
        return res.render("404", {pageTitle:"Video not Found"});
    } catch (error){
        console.log(error);
        return res.render("server-error", {error : Error});
    }
};
export const getEdit = async(req, res) => {    
    const { id } = req.params;  
    const video = await videoModel.findById(id);

    if(video === null){
        return res.render("404", {pageTitle:"Video not Found"});
    } 
    return res.render("edit", {pageTitle : `Editing : ${video.title}`, video : video});
};
export const postEdit = async(req, res) => {   
    const { id } = req.params;
    //Form Action의 Value는 req.body로 받는다.
    const param = req.body;  
    const video = await videoModel.findById(id);   
    
    if(video === null){
        return res.render("404", {pageTitle:"Video not Found"});
    }

    video.title = param.title;
    video.description = param.description;
    video.hashtags = param.hashtags
        .split(",")
        .map((word) => (word.startsWith("#") ? word : `#${word}`)); 
    
    await video.save();
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
            hashtags : hashtags
                .split(",")
                .map((word) => (word.startsWith("#") ? word : `#${word}`)),
        }); 
        await video.save(); 
        return res.redirect("/");
    }
    catch(error) { 
        return res.render("upload", {
            pageTitle:"UploadVideo", 
            errorMessage : error._message
    });
    } 
};

// 재 Commit을 위한 임시 주석